import React from 'react'
import { mount, shallow } from 'enzyme'
import Drivers from './'
import { AlertErrorMessage, AlertSuccessMessage } from './drivers'
import '../../setupTests' //Agregado para poder obtener el reporte de jest
import DriversForm from './driversForm'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()

}))

describe('Drivers', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should see error message when error is truthy', () => {
        jest.mock('../../redux/drivers/selectors', () => ({
            getError: jest.fn().mockReturnValue({ error: {} }),
        }));
        const wrapper = mount(<Drivers />)
        expect(wrapper.containsMatchingElement(AlertErrorMessage)).toEqual(true)
    })

    it('should see DriversForm when error and driver is falsy', () => {
        const wrapper = mount(<Drivers />)
        expect(wrapper.containsMatchingElement(DriversForm)).toEqual(true)
    })

    it('should see AlertSuccessMessage when driver is truthy', () => {
        jest.mock('../../redux/drivers/selectors', () => ({
            getDriver: jest.fn().mockReturnValue({ name: 'Agustin', lastName: 'Rodiguez' }),
        }));
        const wrapper = mount(<Drivers />)
        expect(wrapper.containsMatchingElement(AlertSuccessMessage)).toEqual(true)
    })

    it('should execute dispatch just one when has error', () => {
        jest.mock('../../redux/drivers/selectors', () => ({
            getError: jest.fn().mockReturnValue({ error: {} }),
        }));
        const wrapper = mount(<Drivers />)
        wrapper.find(Button).simulate('click')
        expect(useDispatch).toHaveBeenCalledTimes(2) //Se ejecuta la primera vez cuando se instancia

    })

})