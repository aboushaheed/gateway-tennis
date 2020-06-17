import TennisMatch from "../index";

jest.mock("react-router", () => ({ useParams : jest.fn(() => ({}) ), useHistory : jest.fn() }));

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Start match componnent', () => {


    describe('on show', () => {
        const component = shallow(
            <TennisMatch   />
        );

        it('should have a title', () => {
            const title = component.find({ 'test-id': 'title-tennis-match-config-test-id' });
            expect(title).toHaveLength(1);
            expect(title.prop('variant')).toEqual('h4');
            expect(title.text()).toEqual('Begin a new match');
        });

        it('should have a Tennis component', () => {
            const tennis = component.find({ 'test-id': 'tennis-match-config-test-id' });
            expect(tennis).toHaveLength(1);
            expect(tennis.prop('onChange')).toBeTruthy();
            expect(tennis.prop('value')).toEqual({});
        });

        it('sould have a button to create match', () => {
            const button = component.find({ 'test-id': 'button-validation-tennis-match-config-test-id' });
            expect(button).toHaveLength(1);
            expect(button.text()).toEqual('Start match');
            expect(button.prop('color')).toEqual('primary');
            expect(button.prop('onClick')).toBeTruthy();
            expect(button.prop('variant')).toEqual('contained');

        });
    });



});