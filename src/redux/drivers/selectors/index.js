const getDriver = state => state.driverReducer.data
const getLoading = state => state.driverReducer.loading
const getError = state => state.driverReducer.error

export {
    getDriver,
    getLoading,
    getError
}