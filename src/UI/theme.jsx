import React, { useState } from 'react';
import { IconBrightnessUp, IconMoon } from '@tabler/icons-react';
import './globals.css';

export default function ThemeToggle({ checked = false, onChange }) {

    const [darkMode, setDarkMode] = useState(checked);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        onChange(!darkMode);
    }

    return (
        <header className="flex justify-end dark:bg-gray-800">
            {darkMode ? (
                <IconBrightnessUp
                    color="white" 
                    size={24} 
                    onClick={toggleDarkMode} 
                    aria-label="Switch to light mode"
                    className="cursor-pointer"
                />
            ) : (
                <IconMoon 
                    size={24} 
                    onClick={toggleDarkMode} 
                    aria-label="Switch to dark mode"
                    className="cursor-pointer"
                />
            )}
            
        </header>
    );
}