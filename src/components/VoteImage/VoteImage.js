import React from 'react';
import Button from '@mui/material/Button';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './VoteImage.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';

const VoteImage = ({ imageUrl, onVote, onNextImage, addFavourite, delFavourite, image_id, favourites, favourite_id }) => {

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
        {favourites && favourites.some(favourite => favourite.id === image_id) ? (
          <Button size="large" onClick={() => delFavourite(favourite_id)}>
            <FavoriteIcon />
          </Button>
        ) : (<Button size="large" onClick={() => addFavourite(image_id)}>
          <FavoriteBorderIcon />
        </Button>)}

        <Button size="large" onClick={() => handleVote(false)}>
          <SentimentVeryDissatisfiedIcon />
        </Button>
      </div>
    </div>
  );
};

export default VoteImage;
