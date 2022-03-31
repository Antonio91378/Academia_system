
import * as React from 'react';

interface NavbarProps{
    children: React.ReactNode
}

const Navbar:React.FC<NavbarProps> = ({children}) => {
    return (
        <div className="navbar">
            {children}
        </div>
    );
};


export default Navbar