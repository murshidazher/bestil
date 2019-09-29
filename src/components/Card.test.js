import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('except to render Card component', () => {
    // this states that if we render something and length returns 1
    // means it rendered
    const mockBook = {
        name: 'Book of John Doe',
        author: 'John Doe',
        pbd: '26.85',
        pad: '14.58',
        status: 'Available'
    };

    expect(shallow(<Card name={mockBook.name} author={mockBook.author} pbd={mockBook.pbd} pad={mockBook.pad} status={mockBook.status} />)).toMatchSnapshot();
})

it('except to render Card component with soldout', () => {
    // this states that if we render something and length returns 1
    // means it rendered
    const mockBook = {
        name: 'Book of John Doe',
        author: 'John Doe',
        pbd: '26.85',
        pad: '14.58',
        status: 'Sold Out'
    };

    expect(shallow(<Card name={mockBook.name} author={mockBook.author} pbd={mockBook.pbd} pad={mockBook.pad} status={mockBook.status} />)).toMatchSnapshot();
})

