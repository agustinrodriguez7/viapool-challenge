import React from 'react'
import Button from 'react-bootstrap/Button'

// Variants are defined in components/utils, just like the sizes
const LoadingButton = ({ text, variant, size, onClick }) =>
    <Button onClick={onClick} variant={variant} size={size}> {text}</Button>

export default LoadingButton