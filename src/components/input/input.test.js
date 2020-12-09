import React from 'react'
import { shallow, mount } from 'enzyme'
import { Input } from './'
import Form from 'react-bootstrap/Form'
import '../../setupTests' //Agregado para poder obtener el reporte de jest

describe('Input', () => {

    it('should see only the text', () => {
        const text = 'Este es un texto'
        const wrapper = shallow(<Input textLabel={text} />)
        expect(wrapper.text()).toEqual(text)
    })

    it('should not see the text', () => {
        const wrapper = shallow(<Input />)
        expect(wrapper.text()).toEqual('')
    })

    it('should execute onBlur just once ', () => {
        const onBlur = jest.fn()
        const wrapper = mount(<Input onBlur={onBlur} />)
        wrapper.find(Form.Control).simulate('blur')
        expect(onBlur).toBeCalledTimes(1)
    })

    it('should see placeholder', () => {
        const text = 'Este es un texto'
        const wrapper = mount(<Input placeholder={text} />)
        expect(wrapper.find(Form.Control).props().placeholder).toEqual(text)
    })

    it('should not see placeholder', () => {
        const wrapper = mount(<Input />)
        expect(wrapper.find(Form.Control).props().placeholder).toEqual(undefined)
    })
    
})