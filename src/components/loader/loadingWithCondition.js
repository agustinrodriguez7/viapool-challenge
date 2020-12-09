import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const LoadingWithCondition = ({ condition, children }) =>
    condition ?
        <Spinner animation="grow" variant="info" />
        :
        children

export default LoadingWithCondition