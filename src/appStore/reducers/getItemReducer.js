import {
    FETCH_DOGS_START, FETCH_DOGS_SUCCESS, FETCH_DOGS_FAIL, SEARCH_FETCH_DOGS_START,
    SEARCH_FETCH_DOGS_SUCCESS,
    SEARCH_FETCH_DOGS_FAIL,
    SEND_ID
} from "../actions/actions";

const initialState = {
    dog: {},
    dogs: [],
    loading: false,
    filteredDog: [],

};

export const getItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOGS_START: {
            return {
                ...state,
                dogs: [],
                loading: true

            }
        }

        case FETCH_DOGS_SUCCESS: {
            return {
                ...state,
                dogs: action.payload,
                loading: false

            }
        }

        case FETCH_DOGS_FAIL: {
            return {
                ...state,
                dogs: action.payload,
                loading: false

            }
        }



        case SEARCH_FETCH_DOGS_START: {
            return {
                ...state,
                dogs: [],
                loading: true
            }
        }
        case SEARCH_FETCH_DOGS_SUCCESS: {
            return {
                ...state,
                dogs: action.payload,
                loading: false
            };
        }

        case SEARCH_FETCH_DOGS_FAIL: {
            return {
                ...state,
                dog: action.payload,
                loading: false
            }
        }

        case SEND_ID:
      let dogID= action.payload;
      let x = state.dogs.filter((dog) => dog.id === dogID);
      return {
        ...state,
        filteredDog: x, 
      };

        default: {
            return state
        }
    }
}