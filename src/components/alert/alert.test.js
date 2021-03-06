import React from 'react'
import { shallow } from 'enzyme'
import Alert from './'
import '../../setupTests' //Agregado para poder obtener el reporte de jest

describe('Alert', () => {

    it('should see only the text', () => {
        const text = 'Este es un texto'
        const wrapper = shallow(<Alert text={text} />)
        expect(wrapper.text()).toEqual(text)
    })

    it('should not see only the text', () => {
        const wrapper = shallow(<Alert />)
        expect(wrapper.text()).toEqual('')
    })

    it('should not see the both texts', () => {
        const text = 'Este es un texto'
        const headingText = 'Este es un heading text'
        const wrapper = shallow(<Alert text={text} headingText={headingText} />)
        expect(wrapper.text()).toEqual(`${headingText}${text}`)
    })

    it('should see only heading text', () => {
        const headingText = 'Este es un heading text'
        const wrapper = shallow(<Alert headingText={headingText} />)
        expect(wrapper.text()).toEqual(headingText)
    })

    it('should see Icon', () => {
        const Icon = () => <React.Fragment></React.Fragment>
        const wrapper = shallow(<Alert Icon={Icon} />)
        expect(wrapper.containsMatchingElement(<Icon />)).toEqual(true)
    })

})