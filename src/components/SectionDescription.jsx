import { Typography } from '@material-tailwind/react'
import PropTypes from 'prop-types'

export default function SectionDescription({children}) {
    return <Typography variant="small" className="text-slate-500 font-normal" >{children}</Typography>
}

SectionDescription.propTypes = {
    children: PropTypes.node
}