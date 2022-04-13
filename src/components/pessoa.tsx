import React, { useState } from 'react';
import SearchUser from './SearchUser';

interface PessoaProps {
    nome?:any,
    cpf?:any,
    data?:any,
    index?:number,
}

const Pessoa: React.FC<PessoaProps> = ({ nome,cpf,data,index }) => {
    const[viewinfo,setViewinfo]=useState(false)


    return (
        <div>
            <div className="usuario" onClick={()=>{
                setViewinfo(true);
                
            }}>
                <div className="img"></div>
                <div className="info">
                    <p>{nome}</p>
                    <p>{cpf}</p>
                    <p>{data}</p>
                </div>          
            </div>
            <div>
            {viewinfo && <SearchUser parameter={()=>{
                 setViewinfo(false);
            }}/>}
            </div>
        </div>
    );
};

export default Pessoa;
