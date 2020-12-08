import React from 'react'
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


const Drivers = () => {
    const dispatch = useDispatch()
    const driver = useSelector(state => getDriver(state))
    const error = useSelector(state => getError(state))
    const isLoading = useSelector(state => getLoading(state))

    const addNewDriver = (driver) => {
        dispatch(addDriver(driver))
    }

    return <LoadingWithCondition condition={isLoading}>
        <Row>
            <Col>
                <LoadWithoutError error={error} orElseRender={<AlertErrorMessage />}>
                    {
                        driver ?
                            <div>{`Hola ${driver.name} ${driver.lastName}`}</div>
                            :
                            <button onClick={() => addNewDriver({})}> addDriver</button>
                    }
                </LoadWithoutError>
            </Col>
        </Row>
    </LoadingWithCondition>
}

const AlertErrorMessage = () =>
    <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <AlertMessage style={{ marginTop: 25 }}
                icon={AlertCircle}
                headingText={driversStrings.errorMsgHeading}
                variant={bootstrapVariants.danger}
                text={driversStrings.errorMsg} />
        </Col>
    </Row>

export default Drivers