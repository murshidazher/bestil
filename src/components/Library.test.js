import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('except to render Library component', () => {
    const mockBooks = [{
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
    expect(shallow(<Library books={mockBooks} />)).toMatchSnapshot();
})

