import PropTypes from "prop-types"

const Select = ({lists})=>{
    console.log(lists)
    return (
        <div>
            Select Tag
        </div>
    )
}

Select.propTypes = {
lists : PropTypes.array
}

export default Select 