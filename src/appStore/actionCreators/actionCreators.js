import { 
  FETCH_DOGS_START,FETCH_DOGS_SUCCESS,FETCH_DOGS_FAIL,
  SEARCH_FETCH_DOGS_START,
    SEARCH_FETCH_DOGS_SUCCESS,
    SEARCH_FETCH_DOGS_FAIL,
  SEND_ID,} from "../actions/actions";
    import axios from "axios"; 


const fetchDogsStart = () => {
    return {
      type: FETCH_DOGS_START,
    };
  };
  
  const fetchDogsSuccess = (dogs) => {
    return {
      type: FETCH_DOGS_SUCCESS,
      payload: dogs,
    };
  };
  
  const fetchDogsFail = (error) => {
    return {
      type: FETCH_DOGS_FAIL,
      payload: error,
    };
  };

  const searchFetchDogsStart = () => {
    return {
      type: SEARCH_FETCH_DOGS_START,
    };
  };
  
  const searchFetchDogsSuccess = (search) => {
    return {
      type: SEARCH_FETCH_DOGS_SUCCESS,
      payload: search,
    };
  };
  
  const searchFetchDogsFail = (error) => {
    return {
      type: SEARCH_FETCH_DOGS_FAIL,
      payload: error,
    };
  };


  export const sendID = (dogID) => {
    return {
      type: SEND_ID,
      payload: dogID,
    };
  };

export const fetchDogs = () => {
    return async function (dispatch) {
      dispatch(fetchDogsStart());
      try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
        dispatch(fetchDogsSuccess(response.data));
      } catch (error) {
        dispatch(fetchDogsFail(error));
      }
    };
  };

  export const searchFetchDogs = (search) => {
    return async function (dispatch) {
      dispatch(searchFetchDogsStart());
      try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${search}`);
        dispatch(searchFetchDogsSuccess(response.data));
      } catch (error) {
        dispatch(searchFetchDogsFail(error));
      }
    };
  };


