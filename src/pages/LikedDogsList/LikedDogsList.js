import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVotes, deleteVote } from '../../appStore/actionCreators/voteActionCreators';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "./LikedDogsList.module.scss";
import { useUserAuth } from '../../context/UserAuthContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 

const LikedDogsList = () => {
  const dispatch = useDispatch();
  const { user } = useUserAuth();
  const { dogVotes, isLoading, error } = useSelector((state) => state.votingReducer);

  useEffect(() => {
    dispatch(fetchVotes(user.uid));
  }, [dispatch, user.uid]);

  const handleDeleteVote = (userId, voteId) => {
    dispatch(deleteVote(userId, voteId));
  };

  return (
    <div className={styles.rightSideLike}>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <Typography variant="h4">{user && user.displayName}, you liked this guy:</Typography>
          <Box sx={{ width: 640, height: 600, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {dogVotes.map((vote) => (
                (vote.value === 1) ? (
                  <ImageListItem key={vote.id} >
                    <img
                      srcSet={`${vote.image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${vote.image.url}?w=248&fit=crop&auto=format`}
                      alt={vote.id}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}

                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: 'white' }}
                          onClick={() => handleDeleteVote(user.uid, vote.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                      actionPosition="right"
                    />

                  </ImageListItem>
                ) : (null)
              ))}
            </ImageList>
          </Box>
        </div>
      )}
    </div>
  );
};

export default LikedDogsList;
