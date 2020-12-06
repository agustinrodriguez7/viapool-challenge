import Axios from 'axios'
import { apiConfig } from './config'

let apiInstance = null

const api = () => {
    if (!apiInstance) {
        apiInstance = Axios.create(apiConfig)
    }
    return apiInstance
}

export { api }