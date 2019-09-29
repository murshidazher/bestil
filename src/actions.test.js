import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BOOKS_PENDING,
    REQUEST_BOOKS_SUCCESS,
    REQUEST_BOOKS_FAILED
} from './constants';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

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
    });


    it('expected actions should be dispatched on successful request', () => {

        const store = mockStore();
        const expectedActions = [
            { type: REQUEST_BOOKS_PENDING },
            { type: REQUEST_BOOKS_SUCCESS }
        ]

        // Mock the fetch() global to always return the same value for GET
        // requests to all URLs.
        fetchMock.get('*', { response: 200 })

            console.log(store.dispatch(actions.requestBooks('abc')))
            return store.dispatch(actions.requestBooks('John'))
                .then(() => {
                    const action = store.getActions()
                    expect(action).toEqual(expectedActions)
                })

        fetchMock.restore()
    })
    
    it('expected actions should be dispatched on failed request', () => {
        const store = mockStore()
        const expectedActions = [
            { type: REQUEST_BOOKS_PENDING },
            { type: REQUEST_BOOKS_FAILED }
        ]
        // Mock the fetch() global to always return the same value for GET
        // requests to all URLs.
        fetchMock.get('*', { response: 404 })

        return store.dispatch(actions.requestBooks('John'))
        .then(() => {
            const action = store.getActions()
            expect(action).toEqual(expectedActions)
        })

        fetchMock.restore()
    })
    

        
    

        // const expectedActions = [
        //     { type: REQUEST_BOOKS_PENDING },
        //     {
        //         type: REQUEST_BOOKS_SUCCESS,
        //         payload: [{
        //                 id: 1,
        //                 volumeInfo: {
        //                     title: 'Book about John Doe',
        //                     authors: ['Jane Jackson', 'Janet Jackson'],
        //                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis labore fuga',
        //                     imageLinks: {
        //                         smallThumbnail:
        //                             'https://books.google.com/books/content?id=SQMQQyIaACYC&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api'
        //                     }
        //                 }
        //             }]
        //     },
        //     {
        //         type: REQUEST_BOOKS_FAILED,
        //         payload: 'An unexpected error occurred' 
        //     }
        // ]
        
})