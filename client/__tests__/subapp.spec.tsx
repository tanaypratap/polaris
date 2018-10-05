import React from 'react';
import {SubApp} from '../app/subapp';
import { shallow } from 'enzyme';

test("renders the heading with props supplied", () => {
    const result = shallow(<SubApp message="Tanay"/>).contains(<h1>Hello Tanay</h1>);
    expect(result).toBeTruthy();
});

test('matching snapshot test', () => {
    const snap = shallow(<SubApp message=""/>);
    // Snapshot demo
    expect(snap).toMatchSnapshot();
 });