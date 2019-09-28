import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('except to render Card component', () => {
    // this states that if we render something and length returns 1
    // means it rendered
    expect(shallow(<Card />)).toMatchSnapshot();
})

