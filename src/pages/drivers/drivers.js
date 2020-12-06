import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingWithCondition from '../../components/loader/loadingWithCondition'
import { addDriver } from '../../redux/drivers'
import { getDriver, getError, getLoading } from '../../redux/drivers/selectors'

const Drivers = () => {
    const dispatch = useDispatch()
    const driver = useSelector(state => getDriver(state))
    const error = useSelector(state => getError(state))
    const isLoading = useSelector(state => getLoading(state))

    const addNewDriver = (driver) => {
        dispatch(addDriver(driver))
    }
    return <LoadingWithCondition condition={isLoading}>
        {
            !error ?
                driver ?
                    <div>{`Hola ${driver.name} ${driver.lastName}`}</div>
                    :
                    <button onClick={() => addNewDriver({})}> addDriver</button>
                :
                <div> ocurrió un error</div>
        }
    </LoadingWithCondition>
}

export default Drivers