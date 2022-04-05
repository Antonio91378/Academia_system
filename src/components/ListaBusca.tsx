import { onValue, ref } from 'firebase/database';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { database } from '../services/firebase';
import Pessoa from './pessoa';
import Pessoas from './Pessoas';
type Pessoass ={
    chave: string,
    nome: string,
    data : string,
    cpf:string,
    cargo : string,
    endereco: string,
    obs: string,
    senha: string,
  }


const ListaBusca: React.FC = () => {
    const[estaBuscando,setEstaBuscando] = useState(false)
    const[busca, setBusca] = useState<Pessoass[]>()
    const[pessoas,setPessoas]=useState<Pessoass[]>()


    useEffect(()=>{
      return onValue(ref(database,'usuários'),(snapshot =>{
        const nomee = (snapshot.val()) || 'anonimo'
        
        const resultadoPessoas = Object.entries<Pessoass>(nomee ?? {}).map(([chave, valor]) =>{
            return{
                // apenas coloque os dados do objeto do banco de dados 
                'chave': chave,
                'nome': valor.nome,
                'data' : valor.data,
                'cpf' : valor.cpf,
                'cargo' : valor.cargo,
                'endereco': valor.endereco,
                'obs': valor.obs,
                'senha': valor.senha,
            }
        })
    
        setPessoas(resultadoPessoas)
    
    }))
    },[])
  

    function pesquisar(event: { target: HTMLInputElement }){
        const palavra = event.target.value
        if(palavra.length > 0){
            setEstaBuscando(true)
            const dados = new Array
            pessoas?.map(pessoa =>{
                const regra = new RegExp(event.target.value, "gi")
               if( regra.test(pessoa.nome)){
                dados.push(pessoa)
               }
            })
            setBusca(dados)
        }else{
            setEstaBuscando(false)
        }
      }
      


    return (
        <div className='sectionsearch'>
            <div className="listaBusca">
                <div className="busca">
                    <label htmlFor="">buscar usuário :</label>
                    <input onChange={(event)=>{
                        pesquisar(event);
                    }}
                    type="text" />
                </div>
           </div>
           <div className="pessoas">
            {estaBuscando?
                    busca?.map(pessoa =>{
                        return(
                            
                            <Pessoa nome={pessoa.nome} cpf={pessoa.cpf} data={pessoa.data}/>
                        )
                    })
                    : pessoas?.map(pessoa =>{
                        return(
                            <Pessoa nome={pessoa.nome} cpf={pessoa.cpf} data={pessoa.data}/>
                        )
                    })
                }
           </div>
        </div>

        
    );
};

export default ListaBusca;
