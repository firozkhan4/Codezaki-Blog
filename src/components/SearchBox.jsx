
import PropTypes from "prop-types"

SearchBox.propTypes = {
    handleSearchTerm: PropTypes.func.isRequired,
}

export default function SearchBox({ handleSearchTerm }) {

    return (
        <div className=" p-5 bg-white rounded-xl w-8/12 fixed top-40 right-64">
            <input
                autoFocus={true}
                type="text"
                placeholder="Start typing to Search"
                onChange={(e) => handleSearchTerm(e.target.value)}
                className="border-blue-600 border-2 outline-none w-full h-2/5 rounded-full p-5 text-black"
            />
            <div>

            </div>
        </div>
    )
}