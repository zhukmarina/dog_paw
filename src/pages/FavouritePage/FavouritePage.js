import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavourites, deleteFavouriteImage } from '../../appStore/actionCreators/voteActionCreators';
import { Typography } from "@mui/material";
import { useUserAuth } from '../../context/UserAuthContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "../LikedDogsList/LikedDogsList.module.scss"

const FavouritesPage = () => {
  const { favourites, isLoading,} = useSelector((state) => state.votingReducer);
  const dispatch = useDispatch();
  const { user } = useUserAuth();

  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);

  const handleDeleteFavouriteImage = (favourite_id) => {
    dispatch(deleteFavouriteImage(favourite_id));
  };

  return (
    <div className={styles.rightSideLike}>
      {isLoading ? (
        <p>Loading...</p>
      ) : ( 
        <> 
        <Typography variant="h4">{user && user.displayName}, it is your favourite:</Typography>
          {favourites.length > 0 ? (
            <Box sx={{ width: 640, height: 600, overflowY: 'scroll' }}>
              <ImageList variant="masonry" cols={3} gap={8}>
                {favourites.map((favourite) => (
                  <ImageListItem key={favourite.id}>
                    {favourite.image && favourite.image.url ? (
                      
                        <img
                          srcSet={`${favourite.image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          src={`${favourite.image.url}?w=248&fit=crop&auto=format`}
                          alt={favourite.id}
                        />): (
                          <p>Image URL not available</p>
                        )}
                        <ImageListItemBar
                          sx={{
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                          }}
                          position="bottom"
                          actionIcon={
                            <IconButton
                              sx={{ color: 'red' }}
                              onClick={() => handleDeleteFavouriteImage(favourite.id)}
                            >
                              <FavoriteIcon />
                            </IconButton>
                          }
                          actionPosition="right"
                        />
                      </ImageListItem>
                    ) )}
              </ImageList>
            </Box>
          ) : (
            <p>No favourite images yet.</p>
          )}
        </>
      )}
    </div>
  );
}

export default FavouritesPage;
