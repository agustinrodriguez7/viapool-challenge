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


    const handleOnSubmit = () => {
        const { age, name, email, tel } = formState
        if (age && name && email && tel) {
            addNewDriver({ age, name, email })
        } else {
            const { nameInput, emailInput, ageInput, telInput } = formState
            setFormState({
                ...formState,
                nameInput: nameInput || false,
                emailInput: emailInput || false,
                ageInput: ageInput || false,
                telInput: telInput || false,
            })
        }
    }

    return <Row>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Form>
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
                    placeholder={driversStrings.tel}
                />
                <Input
                    textLabel={driversStrings.email}
                    onBlur={isAvailableDomain}
                    isValid={formState?.emailInput}
                    isInvalid={formState?.emailInput === false}
                    errorMessage={driversStrings.emailError}
                    placeholder={driversStrings.emailPlaceholder}
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