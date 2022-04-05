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
import ListaBusca from '../components/ListaBusca';
import Pessoa from '../components/pessoa'
import Pessoas from '../components/Pessoas'
import { push, ref, onValue, remove, update, child} from "firebase/database";
import { database } from '../services/firebase'

// apenas coloque a tipagem do objeto do banco de dados 
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



const Cadastrar = ()=> {





  return (
    <div>
     <Navbar> 
        <Usuario/>
        <Banner/>
     </Navbar>
     <Section>
        <SideBar>   
          <OptionBox link={'/'} nome='Início'/>
          <OptionBox link={'/cadastrar'} nome='Cadastrar Usuário'/>
          <OptionBox link={'/pesquisar'} nome='Pesquisar Usuário'/>
          <OptionBox link={'/open'} nome='Ver Processoas em aberto'/>
        </SideBar>
        <MainHero>
          <ListaBusca/>
        </MainHero>
     </Section>
     <Footer/>
    </div>
  );
}

export default Cadastrar