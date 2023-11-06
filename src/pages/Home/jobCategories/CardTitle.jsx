import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

export default function CardTitle({children}) {

    return (
        <Typography as="h3" variant="h3">{children}</Typography>
    )
}

CardTitle.propTypes = {
    children: PropTypes.node
}