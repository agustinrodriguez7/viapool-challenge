import React from 'react'
const LoadWithoutError = ({ error, orElseRender, children }) =>
    error ?
        orElseRender
        :
        children || <></>


export default LoadWithoutError