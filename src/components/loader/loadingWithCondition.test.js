import React from 'react'
import { shallow } from 'enzyme'
import LoadingWithCondition from './loadingWithCondition'
import Spinner from 'react-bootstrap/Spinner'
import '../../setupTests' //Agregado para poder obtener el reporte de jest

describe('LoadingWithCondition', () => {
    it('should see loader when condition is true ', () => {
        const wrapper = shallow(
            <LoadingWithCondition condition={true} />
        );
        expect(wrapper.exists(Spinner)).toBe(true);
    });

    it('should not see loader when condition is false ', () => {
        const wrapper = shallow(
            <LoadingWithCondition condition={false} />
        );
        expect(wrapper.exists(Spinner)).toBe(false);
    });

    it('should see children when condition is false ', () => {
        const Children = () => <React.Fragment></React.Fragment>
        const wrapper = shallow(
            <LoadingWithCondition condition={false}>
                <Children />
            </LoadingWithCondition>
        );
        expect(wrapper.exists(Children)).toBe(true);
    });

    it('should not see children when condition is true ', () => {
        const Children = () => <React.Fragment></React.Fragment>
        const wrapper = shallow(
            <LoadingWithCondition condition={true}>
                <Children />
            </LoadingWithCondition>
        );
        expect(wrapper.exists(Children)).toBe(false);
    });

});