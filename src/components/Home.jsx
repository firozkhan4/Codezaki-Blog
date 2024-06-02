import { useContext, useEffect } from 'react'
import NavBar from "./NavBar"; // Importing NavBar component
import BlogPost from "./BlogPost"; // Importing BlogPost component
import DarkModeContext from '../context/DarkModeContext';


export default function Home() {
    const { darkMode } = useContext(DarkModeContext)


    // Update the class on the document element when theme changes
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);


    return (
        <>
            <div className=" dark:bg-gray-900 dark:text-white">
                <NavBar /> {/* Render the NavBar component */}
                <BlogPost /> {/* Render the BlogPost component with the fetched posts */}
            </div >
        </>
    );
}
