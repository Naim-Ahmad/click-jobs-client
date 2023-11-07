/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";

export default function NoContent({children}) {

    return <Typography variant="h2" color="blue-gray" className="text-center py-6">{children}</Typography>
}