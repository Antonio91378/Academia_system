import React from 'react';
import { Link } from 'react-router-dom';

interface OptionBoxProps {
    nome: string;
    link: any;
    classes:any;
}

const OptionBox: React.FC<OptionBoxProps> = ({ nome, link, classes}) => {
    return (
        <div className={classes}>
            <Link to={link} >{nome}</Link>
        </div>
    );
};

export default OptionBox;
