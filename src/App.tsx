import React from 'react';
import './styles/styles.scss'
import Navbar from './components/navbar';
import Section from './components/section';
import Usuario from './components/usuario';
import SideBar from './components/sidebar';
import Banner from './components/banner';
import MainHero from './components/mainHero';
import Footer from './components/footer';
import OptionBox from './components/optionBox';
import CheckBox from './components/checkBox';

function App() {
  return (
    <div className="App">
     <Navbar>
        <Usuario/>
        <Banner/>
     </Navbar>
     <Section>
        <SideBar>
          <OptionBox/>
          <OptionBox/>
          <OptionBox/>
        </SideBar>
        <MainHero>
          <CheckBox>
          </CheckBox>
        </MainHero>
     </Section>
     <Footer/>
    </div>
  );
}

export default App;
