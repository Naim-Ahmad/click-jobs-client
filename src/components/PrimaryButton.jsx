import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';

export default function PrimaryButton({children}) {

    return (
        <Button className="bg-violet-500">{children}</Button>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.node
}