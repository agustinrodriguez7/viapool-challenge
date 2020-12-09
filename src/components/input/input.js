import React from 'react'
import Form from 'react-bootstrap/Form'

const Input = ({ textLabel, onBlur, isValid, isInvalid, errorMessage, placeholder, type, disabled }) =>
    <Form.Group>
        <Form.Label>{textLabel}</Form.Label>
        <Form.Control
            type={type || 'text'}
            placeholder={placeholder}
            onBlur={onBlur}
            isValid={isValid}
            isInvalid={isInvalid}
            disabled={disabled} />
        <Form.Control.Feedback type="invalid" >
            {errorMessage}
        </Form.Control.Feedback>
    </Form.Group>

export default Input