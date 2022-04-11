import { getDatabase, push, ref, set } from "firebase/database";
import React, { useState,useEffect } from "react";
import { database } from '../services/firebase'




export const Push = (nome: string,data: string,cpf: string,cargo: string,endereco: string,obs: string,senha: string,session:any,sex:any) => {
 

  const dados = {
    nome :nome,
    data: data,
    cpf:cpf,
    cargo:cargo,
    endereco:endereco,
    obs:obs,
    senha:senha,
    session:session,
    sex:sex,
  }
  
  push(ref(database,'usuários'), dados)
  console.log(dados)
}
