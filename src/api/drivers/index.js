import endpoints from './endpoints'
import { api } from '../'

const addDriver = (driver) =>
    api().put(endpoints.postAddDriver, driver)

export {
    addDriver
}