import { DataSnapshot, equalTo, get, orderByChild, query, ref } from 'firebase/database';
import React, { useState } from 'react';
import { database } from '../services/firebase';


interface CheckBoxProps {
    
}

const CheckBox: React.FC<CheckBoxProps> = ({  }) => {
  const[validacao,setValidacao]=useState(true)
  const[validado,setValidado]=useState(false)
  const[naoValidado,setNaoValidado]=useState(false)
  const[valuee,setValuee]=useState('')

  const validando = async ()=>{
    const dbRef = ref(database,'usuários')
    const pesquisa = [orderByChild('cpf'), equalTo(valuee)]
    const Pessoaa = await get(query(dbRef, ...pesquisa));

    if (Pessoaa.exists()) {
      console.log("found by name", Pessoaa.val());
      setValidacao(false)
      setValidado(true)
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
        <input value={valuee} onChange={(event)=>setValuee(event?.target.value)} placeholder='Digite seu cpf' type="text" />
        <div className="estadoCheck">
          {validacao && <button onClick={()=>{validando();}} >validar</button>}
          {validado && <p>Acesso permitido</p> }
          {naoValidado && <p>Acesso não permitido</p> }
        </div>
    </div>
  );
};

export default CheckBox;
