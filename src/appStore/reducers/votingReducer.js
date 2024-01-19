import { 
  VOTING_FETCH_DOGS_SUCCESS,
  VOTING_FETCH_DOGS_FAILURE,
  VOTING_FETCH_DOGS_START,
  VOTE_FOR_DOG,
  ADD_VOTE_REQUEST, 
  ADD_VOTE_SUCCESS, 
  ADD_VOTE_FAILURE,
  VOTES_FETCH_START,
  VOTES_FETCH_SUCCESS,
  VOTES_FETCH_FAILURE,
  DELETE_VOTE_REQUEST,
  DELETE_VOTE_SUCCESS,
  DELETE_VOTE_FAILURE,
  FETCH_FAVOURITES ,
  FAVOURITE_IMAGE,
  DELETE_FAVOURITE_IMAGE,
  CLEAR_ERROR,
} from '../actions/actions';

const initialState = {
  votingDogs: [],
  isLoading: false,
  voteAdded: false,
  error: null,
  dogVotes: [],
  isDeleting: false,
  deleteError: null,
  
  favourites: [],
  page: 1,
  error_message: null,
  limit: 3,
  pagination_count: 0,
};

export const votingReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTING_FETCH_DOGS_START: {
      return {
        ...state,
        votingDogs: [],
        isLoading: true,
      };
    }

    case VOTING_FETCH_DOGS_SUCCESS:
      return {
        ...state,
        votingDogs: action.payload,
        isLoading: false,
      };

    case VOTING_FETCH_DOGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case VOTE_FOR_DOG:
      const { dogId, value } = action.payload; 
      const updatedVotes = {
        ...state.dogVotes,
        [dogId]: value === 1 ? true : false, 
      };
      return {
        ...state,
        voteAdded: false,
        dogVotes: updatedVotes,
      };

    case ADD_VOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_VOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        voteAdded: true,
      };

    case ADD_VOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case VOTES_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };

      case VOTES_FETCH_SUCCESS:
        const fetchedVotes = action.payload;
    
    
        return {
          ...state,
          isLoading: false,
          dogVotes: fetchedVotes,
        };

    case VOTES_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

      case DELETE_VOTE_REQUEST:
      return {
        ...state,
        isDeleting: true,
        deleteError: null,
      };

      case DELETE_VOTE_SUCCESS:
  const updatedVotesAfterDelete = state.dogVotes.filter(vote => vote.id !== action.payload);
  return {
    ...state,
    isDeleting: false,
    dogVotes: updatedVotesAfterDelete,
  };

    case DELETE_VOTE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        deleteError: action.payload,
      };

    case FETCH_FAVOURITES:
      return {
        ...state,
        favourites: action.payload.favourites,
        pagination_count: action.payload.pagination_count,
      };
    case FAVOURITE_IMAGE:
      const image_id = action.image_id; 
      return {
        ...state,
        favourites: [...state.favourites, { image_id, sub_id: 'User-123' }],
      };

      case DELETE_FAVOURITE_IMAGE:
        
        return {
          ...state,
          favourites: state.favourites.filter(favourite => favourite.id !== action.favouriteId),
        };

    case CLEAR_ERROR:
      return { ...state, error_message: action.payload };

    default:
      return state;
  }
};

export default votingReducer;
