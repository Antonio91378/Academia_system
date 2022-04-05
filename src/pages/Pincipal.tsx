import React from 'react';
import '../styles/styles.scss'
import Navbar from '../components/navbar';
import Section from '../components/section';
import Usuario from '../components/usuario';
import SideBar from '../components/sidebar';
import Banner from '../components/banner';
import MainHero from '../components/mainHero';
import Footer from '../components/footer';
import OptionBox from '../components/optionBox';
import CheckBox from '../components/checkBox';
import ListaBox from '../components/listaBox';


function Home() {
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
          <CheckBox/>
          <ListaBox>
          </ListaBox>
        </MainHero>
     </Section>
     <Footer/>
    </div>
  );
}

export default Home;