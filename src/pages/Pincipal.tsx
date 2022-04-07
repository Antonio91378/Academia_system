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
          <OptionBox classes={'box current'} link={'/'} nome='Início'/>
          <OptionBox classes={'box'} link={'/cadastrar'} nome='Cadastrar Usuário'/>
          <OptionBox classes={'box'} link={'/pesquisar'} nome='Pesquisar Usuário'/>
          <OptionBox classes={'box'} link={'/open'} nome='Processos Abertos'/>
        </SideBar>
        <MainHero>
          <CheckBox/>
        </MainHero>
     </Section>
     <Footer/>
    </div>
  );
}

export default Home;