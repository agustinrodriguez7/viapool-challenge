import React from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertMessage = ({ headingText, text, icon, variant, style }) =>
    <Alert style={style} variant={variant}>
        <Alert.Heading>{headingText}</Alert.Heading>
        {text}
    </Alert>

export default AlertMessage