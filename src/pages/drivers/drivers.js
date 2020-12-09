import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import AlertMessage from '../../components/alert'
import { bootstrapVariants } from '../../components/utils'
import { driversStrings } from '../../languages'
import { addDriver } from '../../redux/drivers'
import { getDriver, getError, getLoading } from '../../redux/drivers/selectors'
import { AlertCircle } from 'react-feather'
import LoadWithoutError from '../../components/loadWithoutError'
import DriversForm from './driversForm'
import Button from 'react-bootstrap/Button'
import { clean } from '../../redux/drivers/actions'


const Drivers = () => {
    const dispatch = useDispatch()
    const driver = useSelector(state => getDriver(state))
    const error = useSelector(state => getError(state))
    const isLoading = useSelector(state => getLoading(state))
    const [formState, setFormState] = useState({})

    const addNewDriver = (driver) => {
        dispatch(addDriver(driver))
    }

    const cleanError = () => {
        dispatch(clean)
        setFormState({})
    }

    //nombre, edad, telefono, email, patente, modelo y año
    return <Row>
        <Col xs={{ span: 10, offset: 1 }}>
            <LoadWithoutError error={error} orElseRender={<AlertErrorMessage onClick={cleanError} />}>
                {
                    driver ?
                        <div>{`Hola ${driver.name} ${driver.lastName}`}</div>
                        :
                        <>
                            <DriversForm driversStrings={driversStrings}
                                formState={formState}
                                addNewDriver={addNewDriver}
                                setFormState={setFormState}
                                isLoading={isLoading} />
                        </>

                }
            </LoadWithoutError>
        </Col>
    </Row>
}

export default Drivers

const AlertErrorMessage = ({ onClick }) =>
    <Row>
        <Col xs={{ span: 12 }} md={{ span: 6, offset: 3 }}>
            <AlertMessage style={{ marginTop: 25 }}
                Icon={AlertCircle}
                headingText={driversStrings.errorMsgHeading}
                variant={bootstrapVariants.danger}
                text={driversStrings.errorMsg} />
            <Button variant={bootstrapVariants.info}
                onClick={onClick}>
                {driversStrings.buttonRetry}
            </Button>
        </Col>
    </Row>