import React from 'react'
import { shallow } from 'enzyme'
import LoadWithoutError from './loadWithoutError'


describe('LoadWithoutError', () => {
    it('should see orElseRender when error is truthy ', () => {
        const OrElseRender = () => <React.Fragment></React.Fragment>
        const wrapper = shallow(
            <LoadWithoutError error={true} orElseRender={<OrElseRender />} />
        );
        expect(wrapper.containsMatchingElement(<OrElseRender />)).toEqual(true);
    });

    it('should not see orElseRender when error is falsy ', () => {
        const OrElseRender = () => <React.Fragment></React.Fragment>
        const wrapper = shallow(
            <LoadWithoutError error={false} orElseRender={<OrElseRender />} />
        );
        expect(wrapper.containsMatchingElement(<OrElseRender />)).toEqual(false);
    });

    it('should see children when error is falsy ', () => {
        const Children = () => <React.Fragment></React.Fragment>
        const wrapper = shallow(
            <LoadWithoutError error={false}>
                <Children />
            </LoadWithoutError>
        );
        expect(wrapper.containsMatchingElement(<Children />)).toEqual(true);
    });

    it('should not see children when error is truthy ', () => {
        const Children = () => <React.Fragment></React.Fragment>
        const wrapper = shallow(
            <LoadWithoutError error={true}>
                <Children />
            </LoadWithoutError>
        );
        expect(wrapper.containsMatchingElement(<Children />)).toEqual(false);
    });

});