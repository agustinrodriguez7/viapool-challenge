export const ADD_LOADING = 'ADD_LOADING'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_ERROR = 'ADD_ERROR'

export const onSuccess = (response) => ({ type: ADD_SUCCESS, data: response.data })
export const onError = (error) => ({ type: ADD_ERROR, error: error })
export const onLoading = { type: ADD_LOADING }