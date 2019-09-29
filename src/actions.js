import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BOOKS_PENDING,
    REQUEST_BOOKS_SUCCESS,
    REQUEST_BOOKS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestBooks = (searchfield) => (dispatch) => {
    dispatch({ type: REQUEST_BOOKS_PENDING })
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchfield}`)
      .then(response => response.json())
        .then(data => dispatch({type: REQUEST_BOOKS_SUCCESS, payload: data}))
        .catch (error => dispatch({type: REQUEST_BOOKS_FAILED, payload: error}));
}