import React from 'react'

const CenteredBox = ({ children, flexDirection }) => {
    const style = { display: 'flex', flexDirection: flexDirection || 'row', alignItems: 'center' }
    return <div style={style}>
        {children}
    </div>
}

export default CenteredBox