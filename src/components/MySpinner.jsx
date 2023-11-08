import { Spinner } from "@material-tailwind/react";

export default function MySpinner() {

    return (
        <div className="min-h-[80svh] flex justify-center items-center"><Spinner color="purple" className="lg:h-16 lg:w-16 text-gray-900/50" /></div>
    )
}