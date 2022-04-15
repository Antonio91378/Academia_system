import React, { useState } from 'react';
import SearchUser from './SearchUser';

interface PessoaProps {
    nome?:any,
    cpf?:any,
    data?:any,
    cargo?:any,
    endereco?:any,
    obs?:any,
    sex?:any,
}

const Pessoa: React.FC<PessoaProps> = ({ nome,cpf,data,cargo,endereco,obs,sex }) => {
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
            {viewinfo && <SearchUser nome={nome} cpf={cpf} data={data} cargo={cargo} endereco={endereco} obs={obs} sex={sex} parameter={()=>{
                 setViewinfo(false);
            }}/>}
            </div>
        </div>
    );
};

export default Pessoa;
