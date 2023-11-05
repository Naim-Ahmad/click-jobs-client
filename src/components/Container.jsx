/* eslint-disable react/prop-types */

export default function Container({children}) {

    return (
        <div className="max-w-7xl mx-auto py-4 px-2 md:px-4">
            {children}
        </div>
    )
}