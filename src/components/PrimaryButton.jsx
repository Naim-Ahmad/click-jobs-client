import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';

export default function PrimaryButton({children}) {

    return (
        <Button>{children}</Button>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.node
}