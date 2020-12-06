import React from 'react'

const LoadingWithCondition = ({ condition, children }) =>
    condition ?
        <div data-target='loader-with-condition'>cargando...</div>
        :
        children

export default LoadingWithCondition