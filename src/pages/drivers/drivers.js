import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import AlertMessage from '../../components/alert'
import LoadingWithCondition from '../../components/loader/loadingWithCondition'
import { bootstrapVariants } from '../../components/utils'
import { driversStrings } from '../../languages'
import { addDriver } from '../../redux/drivers'
import { getDriver, getError, getLoading } from '../../redux/drivers/selectors'
import { AlertCircle } from 'react-feather'
import LoadWithoutError from '../../components/loadWithoutError'
import DriversForm from './driversForm'


const Drivers = () => {
    const dispatch = useDispatch()
    const driver = useSelector(state => getDriver(state))
    const error = useSelector(state => getError(state))
    const isLoading = useSelector(state => getLoading(state))
    const [formState, setFormState] = useState({})

    const addNewDriver = (driver) => {
        dispatch(addDriver(driver))
    }

    //nombre, edad, telefono, email, patente, modelo y año
    return <LoadingWithCondition condition={isLoading}>
        <Row>
            <Col xs={{ span: 10, offset: 1 }}>
                <LoadWithoutError error={error} orElseRender={<AlertErrorMessage />}>
                    {
                        driver ?
                            <div>{`Hola ${driver.name} ${driver.lastName}`}</div>
                            :
                            <>
                                <DriversForm driversStrings={driversStrings}
                                    formState={formState}
                                    addNewDriver={addNewDriver}
                                    setFormState={setFormState} />
                            </>

                    }
                </LoadWithoutError>
            </Col>
        </Row>
    </LoadingWithCondition>
}

export default Drivers

const AlertErrorMessage = () =>
    <Row>
        <Col xs={{ span: 12 }} md={{ span: 6, offset: 3 }}>
            <AlertMessage style={{ marginTop: 25 }}
                Icon={AlertCircle}
                headingText={driversStrings.errorMsgHeading}
                variant={bootstrapVariants.danger}
                text={driversStrings.errorMsg} />
        </Col>
    </Row>