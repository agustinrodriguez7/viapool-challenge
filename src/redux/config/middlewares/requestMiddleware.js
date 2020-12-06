import { REQUEST_ACTION } from './../../helper/requestAction'

const requestMiddleware = store => next => action => {
    if (action.type !== REQUEST_ACTION) {
        return next(action)
    }

    const { requestMethod,
        loadingAction,
        successAction,
        errorAction,
        params } = action

    const dispatch = store.dispatch

    dispatch(loadingAction)

    requestMethod(params)
        .then(response => dispatch(successAction(response)))
        .catch(err => {
            console.log(err)
            dispatch(errorAction(err))
        })

}

export default requestMiddleware