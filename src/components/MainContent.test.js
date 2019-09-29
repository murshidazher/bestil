import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

// makes sure that it runs before each test
let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestBooks: jest.fn(),
        books: [],
        searchfield: '',
        isPending: false
    }

    wrapper = shallow(<MainContent {...mockProps} />)
})

it('except to render MainContent component', () => {
    expect(wrapper).toMatchSnapshot();
})

it('except to filter books correctly', () => {
    const mockProps2 = {
        onRequestBooks: jest.fn(),
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
        searchfield: 'John',
        isPending: false
    }
    const wrapper2 = shallow(<MainContent {...mockProps2} />)
    expect(wrapper2.instance().filterBooks(mockProps2.books)).toEqual([{
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
    }]);
})

it('except to filter books correctly it not available searchfield', () => {
    const mockProps3 = {
        onRequestBooks: jest.fn(),
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
        searchfield: 'ABC',
        isPending: false
    }
    const wrapper3 = shallow(<MainContent {...mockProps3} />)
    expect(wrapper3.instance().filterBooks(mockProps3.books)).toEqual([]);
})

