import React from 'react';
import { Link } from 'react-router-dom';

interface OptionBoxProps {
    nome: string;
    link: any;
}

const OptionBox: React.FC<OptionBoxProps> = ({ nome, link}) => {
    return (
        <div className="box">
            <Link to={link} >{nome}</Link>
        </div>
    );
};

export default OptionBox;
