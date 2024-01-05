import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import styles from './VoteImage.module.scss';

const VoteImage = ({ imageUrl, onVote, onNextImage }) => {

  const handleVote = (liked) => {
    onVote(liked);
    onNextImage();
  };

  return (
    <div>
      <div className={styles.cardMedia}>
        <img src={imageUrl} alt="dog" />
      </div>

      <div className={styles.cardActions}>
        <Button size="large" onClick={() => handleVote(true)}>
          <SentimentSatisfiedOutlinedIcon />
        </Button>
        <Button size="large" onClick={() => handleVote(false)}>
          <SentimentVeryDissatisfiedIcon />
        </Button>
      </div>
    </div>
  );
};

export default VoteImage;
