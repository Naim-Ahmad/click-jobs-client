import { Typography } from '@material-tailwind/react'
import PropTypes from 'prop-types'

export default function SectionTitle({children}) {
    return <Typography className='text-2xl sm:text-3xl md:text-4xl' as="h2" variant="h2" color="blue-gray" >{children}</Typography>
}

SectionTitle.propTypes = {
    children: PropTypes.node
}