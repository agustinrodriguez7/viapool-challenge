export const REQUEST_ACTION = 'REQUEST_ACTION'

const requestAction = (requestMethod, loadingAction, successAction, errorAction, params) => ({
    type: REQUEST_ACTION,
    requestMethod: requestMethod,
    loadingAction: loadingAction,
    successAction: successAction,
    errorAction: errorAction,
    params: params,
})

export default requestAction