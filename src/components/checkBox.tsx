import { DataSnapshot,set,  equalTo, get, orderByChild, query, ref, update, onValue, runTransaction } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../services/firebase';


interface CheckBoxProps {
    
}

const CheckBox: React.FC<CheckBoxProps> = ({  }) => {


  const[validacao,setValidacao]=useState(true)
  const[validado,setValidado]=useState(false)
  const[naoValidado,setNaoValidado]=useState(false)
  const[valuee,setValuee]=useState('')
  const[userFound,setUserFound]=useState(false)
  const[nomeSnapshot,setNomeSnapshot]=useState('')
  const[aguardando,setAguardando]=useState(true)
 


const validando = async ()=>{
console.log('validando');

const dbRef = ref(database,'usuários')
const pesquisa = [orderByChild('cpf'), equalTo(valuee)]
const Pessoaa = await get(query(dbRef, ...pesquisa));

if (Pessoaa.exists()) {

  console.log("found by name", Pessoaa.val());
  const fistKey = Object.keys(Pessoaa.val())
  
  setValidacao(false)
  setValidado(true)

  const userRef1 = ref(database, `/usuários/${fistKey}/session`);
  const userRef2 = ref(database, `/usuários/${fistKey}/nome`);
 onValue(userRef2, (snapshot) =>{
   const data = snapshot.val();
   console.log(data);
   setNomeSnapshot(data);
   setUserFound(true);
   setAguardando(false)
   setTimeout(()=>{
     setUserFound(false);
     setAguardando(true)
    setNomeSnapshot('');
   },3000)
 }) 
  

runTransaction(userRef1, (session) => {
  if (session) {
    return !session
  }

  
  return true; // 👈 default value
});




  setTimeout(()=>{
    setValidacao(true)
    setValidado(false)
  },3000)
  setValuee('')
} else {
  setValidacao(false)
  setNaoValidado(true)
  setTimeout(()=>{
    setNaoValidado(false)
    setValidacao(true)
  },3000)
  setValuee('')
  console.log("No data available");
  return null;
}  
}

  return (
    <div className="checkBox">
      <div className="bem-vindo1">
        <div className="imgUser"></div>
        {aguardando && <h1>Aguardando ...</h1>}
        {userFound && <h1>Bem-Vindo {nomeSnapshot}</h1>}
        
      </div>
      <div className="bem-vindo2"></div>
        <div className='bem-vindoInput'>
          <input  value={valuee} onChange={(event)=>setValuee(event?.target.value)} placeholder='Digite seu cpf' type="text" />
          <div className="estadoCheck">
            {validacao && <button id='btnInput' onClick={()=>
              validando()} >validar</button>}
            {validado && <p>Acesso permitido</p> }
            {naoValidado && <p>Acesso não permitido</p> }
          </div>
        </div>
    </div>
  );
};

export default CheckBox;
