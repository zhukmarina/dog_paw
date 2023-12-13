import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVotes, deleteVote } from '../../appStore/actionCreators/voteActionCreators';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "../LikedDogsList/LikedDogsList.module.scss"


const DislikedDogsList = () => {
  const dispatch = useDispatch();
  const { dogVotes, isLoading, error } = useSelector((state) => state.votingReducer);

  useEffect(() => {
    dispatch(fetchVotes());
  }, [dispatch]);

  const handleDeleteVote = (voteId) => {
    dispatch(deleteVote(voteId)); 
    
  };

  return (
    <div className={styles.rightSideLike}>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>Disliked dogs</h2>
          <Box sx={{ width: 640, height: 600, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {dogVotes.map((vote) => (
                (vote.value === 0) ?
                  (
                    <ImageListItem key={vote.id}>
                      <img
                        srcSet={`${vote.image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${vote.image.url}?w=248&fit=crop&auto=format`}
                        alt={vote.id}
                        loading="lazy"
                      />
                     <button onClick={() => handleDeleteVote(vote.id)}>X</button> 
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

export default DislikedDogsList;
