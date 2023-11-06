import { Typography } from '@material-tailwind/react'
import PropTypes from 'prop-types'

export default function SectionTitle({children}) {
    return <Typography as="h2" variant="h2" color="blue-gray" >{children}</Typography>
}

SectionTitle.propTypes = {
    children: PropTypes.node
}