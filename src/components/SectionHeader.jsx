import PropTypes from 'prop-types'

export default function SectionHeader({children}) {
    return <div className="w-full md:max-w-3xl mx-auto text-center space-y-2 my-6 py-2" >{children}</div>
}

SectionHeader.propTypes = {
    children: PropTypes.node
}