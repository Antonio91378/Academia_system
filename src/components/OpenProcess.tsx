import React from 'react';
import LinePessoa from './LinePessoa';

interface OpenProcessProps {
    children:React.ReactNode;
}

const OpenProcess: React.FC<OpenProcessProps> = ({ children }) => {
    return (
        <div className="openProcess">
            <div>
                <p>X processoas abertos</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default OpenProcess;
