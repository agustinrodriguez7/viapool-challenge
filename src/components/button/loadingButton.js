import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

// Variants are defined in components/utils, just like the sizes
const LoadingButton = ({ text, variant, size, onClick, isLoading }) =>
    <Button onClick={onClick} variant={variant} size={size} disabled={isLoading}>
        {
            isLoading ?
                <Spinner animation="grow" />
                :
                <>{text}</>
        }
    </Button>

export default LoadingButton