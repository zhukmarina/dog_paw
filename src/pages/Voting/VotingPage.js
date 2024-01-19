// VotingPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogsForVoting, addVote, fetchFavourites, addFavouriteImage, deleteFavouriteImage } from '../../appStore/actionCreators/voteActionCreators'; 
import VoteImage from '../../components/VoteImage/VoteImage';
import styles from './VotingPage.module.scss';
import { useUserAuth } from '../../context/UserAuthContext';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const VotingPage = () => {
  const { votingDogs, isLoading,favourites } = useSelector((state) => state.votingReducer);
  const dispatch = useDispatch();
  const [currentDogIndex, setCurrentDogIndex] = useState(0);
  
  const { user } = useUserAuth();

  useEffect(() => {
    dispatch(fetchDogsForVoting());
    dispatch(fetchFavourites());
  }, [dispatch]);



  const handleVote = (liked) => {
    const currentDogId = votingDogs[currentDogIndex]?.id;
    if (user && currentDogId) {
      const value = liked ? 1 : -1;
      dispatch(addVote(user.uid, currentDogId, value));
    }else{
      Notify.failure('Please, login!');
    }
  };

  const handleFavouriteImage = (image_id) => {
   if(user) {
    dispatch(addFavouriteImage(image_id, user.uid,));
   }else{
    Notify.failure('Please, login!');
  }
  };

  const handleDeleteFavouriteImage = (favourite_id) => {
    dispatch(deleteFavouriteImage(favourite_id));
  };

  const nextImage = () => {
    setCurrentDogIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Loading...</p>
      ) : votingDogs.length > 0 && currentDogIndex < votingDogs.length ? (
        <VoteImage 
          imageUrl={votingDogs[currentDogIndex].url} 
          onVote={handleVote} 
          onNextImage={nextImage} 
          image_id={votingDogs[currentDogIndex].id}
          addFavourite={handleFavouriteImage} 
          delFavourite={handleDeleteFavouriteImage}
          favourites={favourites}
           />
      ) : (
        <p>Ви проголосували за всіх собак!</p>
      )}
    </div>
  );
};

export default VotingPage;
