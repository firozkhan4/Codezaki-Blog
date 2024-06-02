import { useState } from 'react'; // Importing useState hook from React
import defultUseImage from "/images/defultUserImage.jpg"; // Importing default user image
import { IoReorderThreeOutline } from "react-icons/io5"; // Importing menu icon from react-icons
import { CiSearch } from "react-icons/ci"; // Importing search icon from react-icons
import { MdOutlineModeNight, MdOutlineLightMode } from "react-icons/md"; // Importing night and light mode icons from react-icons
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing LinkedIn and GitHub icons from react-icons
import { FaXTwitter } from "react-icons/fa6"; // Importing Twitter icon from react-icons
import PropTypes from "prop-types"


NavBar.propTypes = {
    handleShowSearchBox: PropTypes.func.isRequired
}


// NavBar component definition
export default function NavBar({ handleShowSearchBox }) {
    const [theme, setTheme] = useState(true); // State to manage theme (true for night mode, false for light mode)

    return (
        <nav className="w-full bg-blue-600 h-2/5 p-4 text-white"> {/* Navigation bar with background color, padding, and text color */}
            <div className="flex items-center justify-between cursor-pointer"> {/* Flex container for menu, search, theme toggle, and user image */}
                <IoReorderThreeOutline className="text-3xl" /> {/* Menu icon */}
                <div className="flex items-center gap-2"> {/* Container for search icon, theme toggle, and user image */}
                    <CiSearch className="text-3xl" onClick={() => handleShowSearchBox(true)} /> {/* Search icon */}
                    <span className='text-3xl' onClick={() => setTheme(!theme)}> {/* Theme toggle icon */}
                        {theme ? <MdOutlineModeNight /> : <MdOutlineLightMode />} {/* Conditional rendering of night or light mode icon */}
                    </span>
                    <span className='rounded-full overflow-hidden border-none'> {/* Container for user image */}
                        <img src={defultUseImage} className="w-12 border-none bg-cover" /> {/* User image */}
                    </span>
                </div>
            </div>
            <div>
                <h1 className='text-center text-3xl font-semibold font-sans'>Codezaki Blog</h1> {/* Blog title */}
            </div>
            <div className='flex justify-center items-center mt-3 cursor-pointer text-md gap-2'> {/* Container for social media icons */}
                <FaLinkedin /> {/* LinkedIn icon */}
                <FaXTwitter /> {/* Twitter icon */}
                <FaGithub /> {/* GitHub icon */}
            </div>

        </nav>
    );
}
