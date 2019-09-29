import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BOOKS_PENDING,
    REQUEST_BOOKS_SUCCESS,
    REQUEST_BOOKS_FAILED
} from './constants';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
    it('should create an action search books', () => {
        const text = 'Harry Potter';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

describe('requestBooks', () => {

    it('should handle Google Books API', () => {
        const store = mockStore();
        store.dispatch(actions.requestBooks('abc'));
        const action = store.getActions();

        const expectedAction = {
            type: REQUEST_BOOKS_PENDING
        }

        expect(action[0]).toEqual(expectedAction)
    })
})