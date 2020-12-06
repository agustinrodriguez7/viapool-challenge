import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()

    if (history.location.pathname !== '/404') {
        history.push('/404')
    }

    return <div>
        404
    </div>
}

export default NotFound