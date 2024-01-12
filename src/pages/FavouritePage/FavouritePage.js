// FavouritesPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavourites, deleteFavouriteImage } from '../../appStore/actionCreators/voteActionCreators';
import { Grid, Typography } from "@mui/material";
import { useUserAuth } from '../../context/UserAuthContext';

const FavouritesPage = () => {
  const { favourites, isLoading, error_message } = useSelector((state) => state.votingReducer);
  const dispatch = useDispatch();
  const { user } = useUserAuth();

  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);
console.log(favourites)
  const handleDeleteFavouriteImage = (favourite_id) => {
    dispatch(deleteFavouriteImage(favourite_id));
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : ( 
        <>
  {favourites.length > 0 ? (
    <Grid container spacing={2}>
      {favourites.map((favourite) => (
        <Grid item xs={6} sm={4} md={3} key={favourite.id}>
          {favourite.image && favourite.image.url ? (
            <img
              srcSet={`${favourite.image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${favourite.image.url}?w=248&fit=crop&auto=format`}
              style={{ width: "100%", display: "block", borderRadius: "8px" }}
              alt={favourite.name}
            />
          ) : (
            <p>Image URL not available</p>
          )}
        </Grid>
      ))}
    </Grid>
  ) : (
    <p>No favourite images yet.</p>
  )}
</>
      )}
    </div>
  );
          }
export default FavouritesPage;
