import React, { useEffect, useState } from 'react';
import '../styles/styles.scss'
import Navbar from '../components/navbar';
import Section from '../components/section';
import Usuario from '../components/usuario';
import SideBar from '../components/sidebar';
import Banner from '../components/banner';
import MainHero from '../components/mainHero';
import Footer from '../components/footer';
import OptionBox from '../components/optionBox';
import OpenProcess from '../components/OpenProcess';
import { onValue, ref } from 'firebase/database';
import { database } from '../services/firebase';
import LinePessoa from '../components/LinePessoa';

type Pessoass ={
    chave: string,
    nome: string,
    data : string,
    cpf:string,
    cargo : string,
    endereco: string,
    obs: string,
    senha: string,
    session:Boolean,
  }


interface ProcessoosAtivosProps {

}

const ProcessoosAtivos: React.FC<ProcessoosAtivosProps> = ({  }) => {

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
                  'session': valor.session,
              }
          })
          setPessoas(resultadoPessoas)
      }))
      },[])


    return (
        <div>
        <Navbar>
           <Usuario/>
           <Banner/>
        </Navbar>
        <Section>
           <SideBar>   
             <OptionBox classes={'box'} link={'/'} nome='Início'/>
             <OptionBox classes={'box'} link={'/cadastrar'} nome='Cadastrar Usuário'/>
             <OptionBox classes={'box'} link={'/pesquisar'} nome='Pesquisar Usuário'/>
             <OptionBox classes={'box current'} link={'/open'} nome='Processos Abertos'/>
           </SideBar>
           <MainHero>
               <OpenProcess>
                   {pessoas?.map(pessoa =>{
                       if(pessoa.session === true){
                            return(
                                <LinePessoa nome={pessoa.nome} />
                            )                           
                       }
                   })}
               </OpenProcess>
           </MainHero>
        </Section>
        <Footer/>
       </div>
    );
};

export default ProcessoosAtivos;
