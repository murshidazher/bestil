import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BOOKS_PENDING,
    REQUEST_BOOKS_SUCCESS,
    REQUEST_BOOKS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchBooks', () => {

    const initialStateSearch = {
        searchfield: 'fiction' 
    }

    it('should return the initial state', () => {
        expect(reducers.searchBooks(undefined, {})).toEqual({
            searchfield: 'fiction'
        })
    })

    it('should handle CHANGE_SEARCH_FIELD action', () => {
        expect(reducers.searchBooks(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchfield: 'abc'
        })
    })
})

describe('requestBooks', () => {

    const initialStateBooks = {
        isPending: false,
        books: [],
        error: ''
    }

    it('should return the initial state', () => {
        expect(reducers.requestBooks(undefined, {})).toEqual(initialStateBooks)
    })

    it('should handle REQUEST_BOOKS_PENDING action', () => {
        expect(reducers.requestBooks(initialStateBooks, {
            type: REQUEST_BOOKS_PENDING
        })).toEqual({
            books: [],
            error: '',
            isPending: true
        })
    })

    it('should handle REQUEST_BOOKS_SUCCESS action', () => {
        expect(reducers.requestBooks(initialStateBooks, {
            type: REQUEST_BOOKS_SUCCESS,
            payload: {
                items:
                        [{
                            id: 1,
                            volumeInfo: {
                                title: 'Book about John Doe',
                                authors: ['Jane Jackson', 'Janet Jackson'],
                                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis labore fuga',
                                imageLinks: {
                                    smallThumbnail:
                                        'https://books.google.com/books/content?id=SQMQQyIaACYC&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api'
                                }
                            }
                
                    }]
            }
        })).toEqual({
            books: [{
                id: 1,
                volumeInfo: {
                    title: 'Book about John Doe',
                    authors: ['Jane Jackson', 'Janet Jackson'],
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis labore fuga',
                    imageLinks: {
                        smallThumbnail:
                            'https://books.google.com/books/content?id=SQMQQyIaACYC&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api'
                    }
                }
        
            }],
            error: '',
            isPending: false
        })
    })

    it('should handle REQUEST_BOOKS_FAILED action', () => {
        expect(reducers.requestBooks(initialStateBooks, {
            type: REQUEST_BOOKS_FAILED,
            payload: 'Unexpected error during execution'
        })).toEqual({
            books: [],
            error: 'Unexpected error during execution',
            isPending: false
        })
    })
})

