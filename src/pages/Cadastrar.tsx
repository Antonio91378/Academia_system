import React, {  useState } from 'react';
import '../styles/styles.scss'
import Navbar from '../components/navbar';
import Section from '../components/section';
import Usuario from '../components/usuario';
import SideBar from '../components/sidebar';
import Banner from '../components/banner';
import MainHero from '../components/mainHero';
import Footer from '../components/footer';
import OptionBox from '../components/optionBox';
import FormCadastro from '../components/FormCadastro';
import {Push} from '../funtions/PushFunction'
import SuccesMensage from '../components/sucesso';

const Cadastrar:React.FC = ()=> {


  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [cpf, setCpf] = useState('')
  const [cargo, setCargo] = useState('')
  const [endereco, setEndereco] = useState('')
  const [obs, setObs] = useState('')
  const [senha,setSenha] = useState('')
  const [sex,setSex] = useState('O')
  const [session,setSession] = useState(false)
  const [succesComponent,setSuccesComponent] = useState(false)

  
  return (
    <div>
     <Navbar>
        <Usuario/>
        <Banner/>
     </Navbar>
     <Section>
        <SideBar>   
          <OptionBox classes={'box'} link={'/'} nome='Início'/>
          <OptionBox classes={'box current'} link={'/cadastrar'} nome='Cadastrar Usuário'/>
          <OptionBox classes={'box'} link={'/pesquisar'} nome='Pesquisar Usuário'/>
          <OptionBox classes={'box'} link={'/open'} nome='Processos Abertos'/>
        </SideBar>
        <MainHero>
          <FormCadastro 
            nome={nome}
            data={data}
            cpf={cpf}
            cargo={cargo}
            endereco={endereco}
            obs={obs}
            senha={senha}
            sex={sex}
            setsex={(event: { target: { value: React.SetStateAction<string>; }; }) => setSex(event.target.value)}
            setnome={(event: { target: { value: React.SetStateAction<string>; }; }) => setNome(event.target.value)}
            setdata={(event: { target: { value: React.SetStateAction<string>; }; }) => setData(event.target.value)}
            setcpf={(event: { target: { value: React.SetStateAction<string>; }; }) => setCpf(event.target.value)}
            setcargo={(event: { target: { value: React.SetStateAction<string>; }; }) => setCargo(event.target.value)}
            setendereco={(event: { target: { value: React.SetStateAction<string>; }; }) => setEndereco(event.target.value)}
            setobs={(event: { target: { value: React.SetStateAction<string>; }; }) => setObs(event.target.value)}
            setsenha={(event: { target: { value: React.SetStateAction<string>; }; }) => setSenha(event.target.value)}
            função={()=>{
              if(data !== '' && nome.length !== 0 && cpf.length !== 0 && cargo !== '' && endereco !== '' ){
                Push(nome, data, cpf, cargo, endereco, obs, senha,session, sex)
                setSex('O')
                setNome('')
                setData('')
                setCpf('')
                setCargo('')
                setEndereco('')
                setObs('')
                setSenha('')
                setSuccesComponent(true)
              }
            }}
          />
          {succesComponent && <SuccesMensage func={() =>{setSuccesComponent(false)}}/>}
        </MainHero>
     </Section>
     <Footer/>
    </div>
  );
}

export default Cadastrar