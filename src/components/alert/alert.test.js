import React from 'react'
import { shallow } from 'enzyme'
import Alert from './'

describe('Alert', () => {

    it('should see the text', () => {
        const text = 'Este es un texto'
        const wrapper = shallow(<Alert text={text} />)
        expect(wrapper.text()).toEqual(text)
    })

    it('should not see the text', () => {
        const wrapper = shallow(<Alert/>)
        expect(wrapper.text()).toEqual('')
    })
    
})