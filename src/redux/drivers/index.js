import { addDriver as addNewDriver} from '../../api/drivers'
import { requestAction } from '../helper'
import { onError, onLoading, onSuccess } from './actions'

export const addDriver = (driver) =>
    requestAction(addNewDriver, onLoading, onSuccess, onError, driver)