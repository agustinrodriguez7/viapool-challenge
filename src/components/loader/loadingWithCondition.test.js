import React from 'react'
import { shallow } from 'enzyme'
import LoadingWithCondition from './loadingWithCondition'


describe('LoadingWithCondition', () => {
    it('should see loader when condition is true ', () => {
        const wrapper = shallow(
            <LoadingWithCondition condition={true} />
        );
        expect(wrapper.exists('[data-target="loader-with-condition"]')).toBe(true);
    });

    it('should not see loader when condition is false ', () => {
        const wrapper = shallow(
            <LoadingWithCondition condition={false} />
        );
        expect(wrapper.exists('[data-target="loader-with-condition"]')).toBe(false);
    });

    it('should see children when condition is false ', () => {
        const wrapper = shallow(
            <LoadingWithCondition condition={false}>
                <div data-target='data-target-children'></div>
            </LoadingWithCondition>
        );
        expect(wrapper.exists('[data-target="data-target-children"]')).toBe(true);
    });

    it('should not see children when condition is true ', () => {
        const wrapper = shallow(
            <LoadingWithCondition condition={true}>
                <div data-target='data-target-children'></div>
            </LoadingWithCondition>
        );
        expect(wrapper.exists('[data-target="data-target-children"]')).toBe(false);
    });

});