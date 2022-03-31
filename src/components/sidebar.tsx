import React from 'react';

interface SideBarProps {
   children : React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
    return (
        <div className="sidebar">
            {children}
        </div>
    );
};

export default SideBar;
