import React from 'react';
import { SubApp } from '../app/subapp';
import { shallow } from 'enzyme';

test("renders the heading with props supplied", () => {
    const result = shallow(<SubApp message="Polaris"/>).contains(<h1>Hello Polaris</h1>);
    expect(result).toBeTruthy();
});

test("matches snapshot test with no props supplied", () => {
    const snap = shallow(<SubApp message=""/>);
    // Snapshot demo
    expect(snap).toMatchSnapshot();
 });