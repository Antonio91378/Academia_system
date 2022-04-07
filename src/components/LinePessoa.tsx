import React from 'react';

interface LinePessoaProps {
    nome:string;
}

const LinePessoa: React.FC<LinePessoaProps> = ({ nome }) => {
    return (
        <div className="linePessoa">
            <p>{nome}</p>
            <p>Sessão 00:00</p>
        </div>
    );
};

export default LinePessoa;
