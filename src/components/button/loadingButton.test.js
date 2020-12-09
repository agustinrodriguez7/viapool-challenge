import React from 'react'
import { mount, shallow } from 'enzyme'
import { LoadingButton } from './'
import Spinner from 'react-bootstrap/Spinner'
import '../../setupTests' //Agregado para poder obtener el reporte de jest

describe('LoadingButton', () => {

    it('should see spinner and be disabled when isLoading is true ', () => {
        const onClick = jest.fn()
        const wrapper = mount(<LoadingButton isLoading={true} onClick={onClick} />)
        expect(wrapper.containsMatchingElement(<Spinner />)).toEqual(true)
        wrapper.simulate('click')
        expect(onClick).toHaveBeenCalledTimes(0)
    })

    it('should not see spinner and be enabled when isLoading is false ', () => {
        const onClick = jest.fn()
        const wrapper = mount(<LoadingButton isLoading={false} onClick={onClick} />)
        expect(wrapper.containsMatchingElement(<Spinner />)).toEqual(false)
        wrapper.simulate('click')
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('the text should be equal to props ', () => {
        const text = 'Esto es un texto'
        const wrapper = shallow(<LoadingButton text={text} />)
        expect(wrapper.text()).toEqual(text)
    })

    it('the text should be empty when has no text prop ', () => {
        const wrapper = shallow(<LoadingButton />)
        expect(wrapper.text()).toEqual('')
    })

})