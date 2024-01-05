import axios from 'axios';
import {
  VOTE_FOR_DOG,
  ADD_VOTE_SUCCESS,
  ADD_VOTE_REQUEST,
  ADD_VOTE_FAILURE,
  VOTING_FETCH_DOGS_START,
  VOTING_FETCH_DOGS_SUCCESS,
  VOTING_FETCH_DOGS_FAILURE,
  VOTES_FETCH_START,
  VOTES_FETCH_SUCCESS,
  VOTES_FETCH_FAILURE,
  DELETE_VOTE_REQUEST,
  DELETE_VOTE_SUCCESS,
  DELETE_VOTE_FAILURE,
} from "../actions/actions";



const fetchDogsForVotingStart = () => ({
  type: VOTING_FETCH_DOGS_START,
});

const fetchDogsForVotingSuccess = (votingDogs) => ({
  type: VOTING_FETCH_DOGS_SUCCESS,
  payload: votingDogs,
});

const fetchDogsForVotingFail = (error) => ({
  type: VOTING_FETCH_DOGS_FAILURE,
  payload: error,
});



export const deleteVoteRequest = () => ({
  type: DELETE_VOTE_REQUEST,
});

export const deleteVoteSuccess = (deletedVoteId) => ({
  type: DELETE_VOTE_SUCCESS,
  payload: deletedVoteId,
});

export const deleteVoteFailure = (error) => ({
  type: DELETE_VOTE_FAILURE,
  payload: error,
});

export const fetchDogsForVoting = () => {
  return async function (dispatch) {
    dispatch(fetchDogsForVotingStart());
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search?format=json&limit=10');
      dispatch(fetchDogsForVotingSuccess(response.data));
    } catch (error) {
      dispatch(fetchDogsForVotingFail(error));
    }
  };
};

export const voteForDog = (dogId) => ({
  type: VOTE_FOR_DOG,
  payload: dogId,
});

export const addVote = (userId, currentDogId, liked) => {
  return async (dispatch) => {
    dispatch({ type: ADD_VOTE_REQUEST }); 
    try {
      const response = await fetch('https://api.thedogapi.com/v1/votes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_kssrbyIko7YpwOartoJZPYx2nHw3N8AQgYc2QgxYmSHsECmqg49E665tQREEndhU',
        },
        body: JSON.stringify({
          sub_id: userId,
          image_id: currentDogId,
          value: liked, 
        }),
      });

      const data = await response.json();
      console.log(data);
      dispatch({ type: ADD_VOTE_SUCCESS, payload: data });
      dispatch(fetchVotes(userId));

    } catch (error) {
      dispatch({ type: ADD_VOTE_FAILURE, payload: error.message });
    }
  };
};


export const fetchVotes = (userId) => {
  return async (dispatch) => {
    dispatch({ type: VOTES_FETCH_START });

   

    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/votes?sub_id=${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_kssrbyIko7YpwOartoJZPYx2nHw3N8AQgYc2QgxYmSHsECmqg49E665tQREEndhU',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        dispatch({ type: VOTES_FETCH_SUCCESS, payload: data });
        console.log('Votes data:', data); 
      } else {
        throw new Error('Failed to fetch votes');
      }
    } catch (error) {
      dispatch({ type: VOTES_FETCH_FAILURE, payload: error.message });
    }
  };
};

export const deleteVote = (userId, voteId) => {
  return async (dispatch) => {
    dispatch(deleteVoteRequest());

    try {
      const response = await fetch(`https://api.thedogapi.com/v1/votes/${voteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_kssrbyIko7YpwOartoJZPYx2nHw3N8AQgYc2QgxYmSHsECmqg49E665tQREEndhU',
        },
      });

      if (response.ok) {
        dispatch(deleteVoteSuccess(voteId)); 
      } else {
        throw new Error('Failed to delete vote');
      }
    } catch (error) {
      dispatch(deleteVoteFailure(error.message));
    }
  };
};


