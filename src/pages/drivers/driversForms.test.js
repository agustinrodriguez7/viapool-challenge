import React from 'react'
import { shallow, mount } from 'enzyme'
import DriversForm from './driversForm'
import '../../setupTests' //Agregado para poder obtener el reporte de jest
import { LoadingButton } from '../../components/button'
import Form from 'react-bootstrap/Form'

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

    it('should change key name and nameInput if only blur', () => {
        let formState = {}
        const setFormState = newFormState => { formState = newFormState }
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        const inputName = wrapper.find(Form.Control).at(0)
        inputName.simulate('blur')
        expect(formState.name).toEqual(undefined)
        expect(formState.nameInput).toEqual(false)
    })


    it('should change key age and ageInput if only blur', () => {
        let formState = {}
        const setFormState = newFormState => { formState = newFormState }
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        const inputAge = wrapper.find(Form.Control).at(1)
        inputAge.simulate('blur')
        expect(formState.age).toEqual(undefined)
        expect(formState.ageInput).toEqual(false)
    })

    it('should change key tel and telInput if only blur', () => {
        let formState = {}
        const setFormState = newFormState => { formState = newFormState }
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        const inputTel = wrapper.find(Form.Control).at(2)
        inputTel.simulate('blur')
        expect(formState.tel).toEqual(undefined)
        expect(formState.telInput).toEqual(false)
    })

    it('should change key email and emailInput if only blur', () => {
        let formState = {}
        const setFormState = newFormState => { formState = newFormState }
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        const emailInput = wrapper.find(Form.Control).at(3)
        emailInput.simulate('blur')
        expect(formState.email).toEqual(undefined)
        expect(formState.emailInput).toEqual(false)
    })

    it('should change key patent and patentInput if only blur', () => {
        let formState = {}
        const setFormState = newFormState => { formState = newFormState }
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        const emailInput = wrapper.find(Form.Control).at(4)
        emailInput.simulate('blur')
        expect(formState.patent).toEqual(undefined)
        expect(formState.patentInput).toEqual(false)
    })

    it('should change key year and yearInput if only blur', () => {
        let formState = {}
        const setFormState = newFormState => { formState = newFormState }
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        const yearInput = wrapper.find(Form.Control).at(5)
        yearInput.simulate('blur')
        expect(formState.year).toEqual(undefined)
        expect(formState.yearInput).toEqual(false)
    })

    it('should change key model and modelInput if only blur', () => {
        let formState = {}
        const setFormState = newFormState => { formState = newFormState }
        const addNewDriver = jest.fn()
        const wrapper = mount(<DriversForm driversStrings={{}}
            formState={formState}
            addNewDriver={addNewDriver}
            setFormState={setFormState}
            isLoading={true} />)
        const modelInput = wrapper.find(Form.Control).at(6)
        modelInput.simulate('blur')
        expect(formState.model).toEqual(undefined)
        expect(formState.modelInput).toEqual(false)
    })
})