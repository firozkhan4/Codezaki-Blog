import React, { useState } from 'react'
import DarkModeContext from './DarkModeContext';


const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContextProvider;