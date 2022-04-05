import React from 'react';

interface PessoaProps {
    nome?:any,
    cpf?:any,
    data?:any,
    index?:number,
}

const Pessoa: React.FC<PessoaProps> = ({ nome,cpf,data,index }) => {
    return (
        <div className="usuario">
            <div className="img"></div>
            <div className="info">
                <p>{nome}</p>
                <p>{cpf}</p>
                <p>{data}</p>
            </div>          
        </div>
    );
};

export default Pessoa;
