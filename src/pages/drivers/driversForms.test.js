import React from 'react'
import { shallow, mount } from 'enzyme'
import DriversForm from './driversForm'
import '../../setupTests' //Agregado para poder obtener el reporte de jest
import { LoadingButton } from '../../components/button'

describe('DriversForm', () => {

    it('should not execute any action if inputs are empty', () => {
        const formState = {}
        const setFormState = jest.fn()
        const addNewDriver = jest.fn()
        const wrapper = shallow(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={false} />)
        wrapper.find(LoadingButton).simulate('click')
        expect(addNewDriver).toBeCalledTimes(0)
    })

    it('should execute action if state has correct values', () => {
        const formState = { age: 18, name: 'name', email: 'mail@viapool.com', tel: 3515050505, year: 2020, model: 'Celta', patent: 'ABC203' }
        const setFormState = jest.fn()
        const addNewDriver = jest.fn()
        const wrapper = shallow(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={false} />)
        wrapper.find(LoadingButton).simulate('click')
        expect(addNewDriver).toBeCalledTimes(1)
    })

    it('should not execute any action if isLoading is true even if state has correct values', () => {
        const formState = { age: 18, name: 'name', email: 'mail@viapool.com', tel: 3515050505, year: 2020, model: 'Celta', patent: 'ABC203' }
        const setFormState = jest.fn()
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        wrapper.find(LoadingButton).simulate('click')
        expect(addNewDriver).toBeCalledTimes(0)
    })

})