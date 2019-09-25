import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BOOKS_PENDING,
    REQUEST_BOOKS_SUCCESS,
    REQUEST_BOOKS_FAILED
} from './constants';

const initialStateSearch = {
    searchfield: 'fiction'
}

export const searchBooks = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchfield: action.payload });
        default:
            return state;
    }
}

const initialStateBooks = {
    isPending: false,
    books: [],
    error: ''
}

export const requestBooks = (state=initialStateBooks, action={}) => {
    switch (action.type) {
        case REQUEST_BOOKS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_BOOKS_SUCCESS:
            return Object.assign({}, state, { books: action.payload.items, isPending: false });
        case REQUEST_BOOKS_FAILED:
                return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
}

