import {
    ADD_LOADING,
    ADD_ERROR,
    ADD_SUCCESS,
    ADD_CLEAN
} from '../actions'



const initState = {
    loading: false,
    data: null,
    error: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_LOADING:
            return { ...state, loading: true }
        case ADD_ERROR:
            return { ...state, loading: false, error: action.error }
        case ADD_SUCCESS:
            return { ...state, loading: false, data: action.data }
        case ADD_CLEAN:
            return { ...state, data: null, error: null }
        default:
            return { ...state }
    }
}

export default reducer