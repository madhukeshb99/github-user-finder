import {
    SEARCH_USERS,
    GET_USER,
    SET_LOADING,
    GET_REPOS,
    CLEAR_USERS,
    GET_QUERY
} from "../types";

const GithubReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
                query: ''
            }
        case GET_QUERY: 
            return {
                ...state,
                query: action.payload,
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default GithubReducer;