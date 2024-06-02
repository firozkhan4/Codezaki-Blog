import { useState, useEffect, useContext } from 'react'; // Importing useState and useEffect hooks from React
import defaultUserImage from "/images/defaultUserImage.jpg"; // Importing default user image
import { IoReorderThreeOutline } from "react-icons/io5"; // Importing menu icon from react-icons
import { CiSearch } from "react-icons/ci"; // Importing search icon from react-icons
import { MdOutlineModeNight, MdOutlineLightMode } from "react-icons/md"; // Importing night and light mode icons from react-icons
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing LinkedIn and GitHub icons from react-icons
import { FaXTwitter } from "react-icons/fa6"; // Importing Twitter icon from react-icons
import SearchBox from './SearchBox';
import DarkModeContext from '../context/DarkModeContext';

// NavBar component definition
export default function NavBar() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchBox, setShowSearchBox] = useState(false);


    const handleSearchTerm = (data) => {
        setSearchTerm(data);
    };

    return (
        <nav className="w-full bg-blue-600 h-2/5 p-4 text-white"> {/* Navigation bar with background color, padding, and text color */}
            <div className={`fixed w-full bottom-0 left-0 h-full bg-[#00000054] ${showSearchBox ? 'block' : 'hidden'}`}>
                <SearchBox handleSearchTerm={handleSearchTerm} />
            </div>
            <div className="flex items-center justify-between cursor-pointer"> {/* Flex container for menu, search, theme toggle, and user image */}
                <IoReorderThreeOutline className="text-3xl" /> {/* Menu icon */}
                <div className="flex items-center gap-2"> {/* Container for search icon, theme toggle, and user image */}
                    <CiSearch className="text-3xl" onClick={() => setShowSearchBox(true)} /> {/* Search icon */}
                    <span className='text-3xl' onClick={() => toggleDarkMode()}> {/* Theme toggle icon */}
                        {darkMode ? <MdOutlineLightMode /> : <MdOutlineModeNight />} {/* Conditional rendering of night or light mode icon */}
                    </span>
                    <span className='rounded-full overflow-hidden border-none'> {/* Container for user image */}
                        <img src={defaultUserImage} className="w-12 border-none bg-cover" /> {/* User image */}
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
