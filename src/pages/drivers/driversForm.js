import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Input } from '../../components/input'
import { domainsAllowed } from '../../utils'
import { LoadingButton } from '../../components/button'
import { bootstrapVariants, bootstrapSizes, CenteredBox } from '../../components/utils'

const DriversForm = ({ driversStrings, formState, addNewDriver, setFormState }) => {

    const getdomain = email => email.split("@")[1].split('.')[0].toLowerCase()

    const isValidEmail = (email) => {
        const regExp = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        return regExp.test(email) ?
            domainsAllowed.includes(getdomain(email))
            :
            false
    }

    const isAvailableDomain = (event) => {
        const email = event.target.value
        email && isValidEmail(email) ?
            setFormState({
                ...formState,
                emailInput: true,
                email: email
            })
            :
            setFormState({
                ...formState,
                emailInput: false,
                email: undefined
            })
    }

    const onlyContainsText = text => /^[a-zA-Z]+$/.test(text)

    const handleOnBlur = (event) => {
        const name = event.target.value
        name && name.length > 2 && onlyContainsText(name) ?
            setFormState({
                ...formState,
                nameInput: true,
                name: name
            })
            :
            setFormState({
                ...formState,
                nameInput: false,
                name: undefined
            })
    }

    const isANumber = (text) => /^[0-9]+$/.test(text)

    const isValidAge = (event) => {
        const number = event.target.value
        number && isANumber(number) && number >= 18 ?
            setFormState({
                ...formState,
                ageInput: true,
                age: number
            })
            :
            setFormState({
                ...formState,
                ageInput: false,
                age: undefined
            })

    }

    const isValidYear = (event) => {
        const number = event.target.value
        number && isANumber(number) && number >= 1990 ?
            setFormState({
                ...formState,
                yearInput: true,
                year: number
            })
            :
            setFormState({
                ...formState,
                yearInput: false,
                year: undefined
            })

    }

    const isValidTel = (event) => {
        const tel = event.target.value
        tel && isANumber(tel) && tel.length === 10 ?
            setFormState({
                ...formState,
                telInput: true,
                tel: tel
            })
            :
            setFormState({
                ...formState,
                telInput: false,
                tel: undefined
            })

    }

    const isValidModel = (event) => {
        const name = event.target.value
        name && name.length > 2 && onlyContainsText(name) ?
            setFormState({
                ...formState,
                modelInput: true,
                model: name
            })
            :
            setFormState({
                ...formState,
                modelInput: false,
                model: undefined
            })
    }

    const handleOnSubmit = () => {
        const { age, name, email, tel, year, model } = formState
        if (age && name && email && tel && year && model) {
            addNewDriver({ age, name, email })
        } else {
            const { nameInput, emailInput, ageInput, telInput, yearInput, modelInput } = formState
            setFormState({
                ...formState,
                nameInput: nameInput || false,
                emailInput: emailInput || false,
                ageInput: ageInput || false,
                telInput: telInput || false,
                yearInput: yearInput || false,
                modelInput: modelInput || false,
            })
        }
    }

    return <Row>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Form>
                <h1 style={{ marginTop: 15, marginBottom: 15 }}>{driversStrings.registrate}</h1>
                <Input
                    textLabel={driversStrings.name}
                    onBlur={handleOnBlur}
                    isValid={formState?.nameInput}
                    isInvalid={formState?.nameInput === false}
                    errorMessage={driversStrings.nameError}
                    placeholder={driversStrings.name}
                />
                <Input
                    textLabel={driversStrings.age}
                    onBlur={isValidAge}
                    isValid={formState?.ageInput}
                    isInvalid={formState?.ageInput === false}
                    errorMessage={driversStrings.ageError}
                    placeholder={driversStrings.age}
                />
                <Input
                    textLabel={driversStrings.tel}
                    onBlur={isValidTel}
                    isValid={formState?.telInput}
                    isInvalid={formState?.telInput === false}
                    errorMessage={driversStrings.telError}
                    placeholder={driversStrings.telPlaceholder}
                />
                <Input
                    textLabel={driversStrings.email}
                    onBlur={isAvailableDomain}
                    isValid={formState?.emailInput}
                    isInvalid={formState?.emailInput === false}
                    errorMessage={driversStrings.emailError}
                    placeholder={driversStrings.emailPlaceholder}
                />
                <Input
                    textLabel={driversStrings.year}
                    onBlur={isValidYear}
                    isValid={formState?.yearInput}
                    isInvalid={formState?.yearInput === false}
                    errorMessage={driversStrings.yearError}
                    placeholder={driversStrings.year}
                />
                <Input
                    textLabel={driversStrings.model}
                    onBlur={isValidModel}
                    isValid={formState?.modelInput}
                    isInvalid={formState?.modelInput === false}
                    errorMessage={driversStrings.modelError}
                    placeholder={driversStrings.model}
                />
            </Form>
            <CenteredBox flexDirection='column'>
                <LoadingButton text={driversStrings.buttonText}
                    variant={bootstrapVariants.info}
                    size={bootstrapSizes.md}
                    onClick={handleOnSubmit} />
            </CenteredBox>
        </Col>
    </Row>
}

export default DriversForm