import endpoints from './endpoints'
import { api } from '../'

const addDriver = (driver) =>
    api().post(endpoints.postAddDriver, driver)

export {
    addDriver
}