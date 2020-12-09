import React from 'react'
import Alert from 'react-bootstrap/Alert'

//Variants are defined in components/utils
const AlertMessage = ({ headingText, text, Icon, variant, style }) =>
    <Alert style={style} variant={variant}>
        <Alert.Heading>
            {
                Icon ?
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon />
                        <div style={{ marginLeft: 10 }}>{headingText}</div>
                    </div>
                    :
                    <>{headingText}</>
            }

        </Alert.Heading>
        {text}
    </Alert>

export default AlertMessage