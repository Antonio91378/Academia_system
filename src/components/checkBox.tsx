import { DataSnapshot,set,  equalTo, get, orderByChild, query, ref, update, onValue } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../services/firebase';


interface CheckBoxProps {
    
}

const CheckBox: React.FC<CheckBoxProps> = ({  }) => {
  const[validacao,setValidacao]=useState(true)
  const[validado,setValidado]=useState(false)
  const[naoValidado,setNaoValidado]=useState(false)
  const[valuee,setValuee]=useState('')
  const[btnClick,setBtnClick]=useState(false)
 

  useEffect(() => {


    
  }, [btnClick])
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
  // onValue(ref(database,'usuários' + `/${fistKey}`),(snapshot)=>{
  //   const data = snapshot.val();
  //   console.log(data.session);
    
  //   if(data.session === true){
  //     console.log('if1');
  //     update(ref(database,'usuários' + `/${fistKey}`),{
  //       session:false,
  //     })          
  //   }else if(data.session === false ){
  //     console.log('if2');
  //     update(ref(database,'usuários' + `/${fistKey}`),{
  //       session:true,
  //     })
  //   }
  // })
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
          {validacao && <button onClick={()=>{
            validando();
            }} >validar</button>}
          {validado && <p>Acesso permitido</p> }
          {naoValidado && <p>Acesso não permitido</p> }
        </div>
    </div>
  );
};

export default CheckBox;
