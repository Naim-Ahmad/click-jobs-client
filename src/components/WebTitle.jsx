import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

export default function WebTitle({children}) {
    return (
        <Helmet>
            <title>{children} | Click Jobs</title>
        </Helmet>
    )
}

WebTitle.propTypes = {
    children: PropTypes.node
}