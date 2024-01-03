import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogsForVoting, addVote } from '../../appStore/actionCreators/voteActionCreators'; 
import VoteImage from '../../components/VoteImage/VoteImage';
import styles from './VotingPage.module.scss';
import { useUserAuth } from '../../context/UserAuthContext';

const VotingPage = () => {
  const dispatch = useDispatch();
  const [currentDogIndex, setCurrentDogIndex] = useState(0);
  const { votingDogs, isLoading } = useSelector((state) => state.votingReducer);
  const { user } = useUserAuth();

  useEffect(() => {
    dispatch(fetchDogsForVoting());
  }, [dispatch]);

  const handleVote = (liked) => {

    
    const currentDogId = votingDogs[currentDogIndex]?.id;

    if (currentDogId) {
      const value = liked ? 1 : -1;
      dispatch(addVote(user.uid, currentDogId, value));
    }
  };


  const nextImage = () => {
    setCurrentDogIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Loading...</p>
      ) : votingDogs.length > 0 && currentDogIndex < votingDogs.length ? (
        <VoteImage imageUrl={votingDogs[currentDogIndex].url} onVote={handleVote} onNextImage={nextImage}  />
      ) : (
        <p>Ви проголосували за всіх собак!</p>
      )}
    </div>
  );
};

export default VotingPage;
