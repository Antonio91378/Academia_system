import React from 'react';
import LinePessoa from './LinePessoa';

interface OpenProcessProps {
    children:React.ReactNode;
    number?:number;
}

const OpenProcess: React.FC<OpenProcessProps> = ({ children,number }) => {
    return (
        <div className="openProcess">
            <div>
                <p id='p-open'>{number} Processoas abertos</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default OpenProcess;
