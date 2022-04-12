import React, { useState } from 'react';

interface FormCadastroProps {
    função : any;
    nome:any;
    data:any;
    cpf:any;
    cargo:any;
    endereco:any;
    obs:any;
    senha:any;
    session?:Boolean;
    setSession?:Boolean;
    setnome:any;
    setdata:any;
    setcpf:any;
    setcargo:any;
    setendereco:any;
    setobs:any;
    setsenha:any;
    sex:any;
    setsex?:any;
    }

const FormCadastro: React.FC<FormCadastroProps> = ({ função, nome, data, cpf, cargo, endereco, obs, senha,setnome,setdata,setcpf,setcargo,setendereco,setobs,setsenha, sex,setsex, setSession}) => {
const [condition,setCondition]=useState(false)

    const validation = (nome: any,data: any,cpf: any,cargo: any,endereco: any ) =>{
        var erros = [4]
        //condição 1
        nome = nome;
        // data = data;
        // cpf = cpf;
        // data: any, cpf: any, cargo: any, endereco: any, sex: any

        if(nome.length === 0){
            setCondition(true)
        }

        if(data.length == ''){
            setCondition(true)
        }

        if(cpf.length === 0){
            setCondition(true)
        }

        if(cargo.length === 0){
            setCondition(true)
        }

        if(endereco.length === 0){
            setCondition(true)
        }
        console.log(erros);
    }






    return (

        <div >
            <div className="form-hero">
  
                <form className="cadastro" action="" onSubmit={(event) =>{
                    event.preventDefault();
                    função();
                    validation(nome,data,cpf,cargo,endereco);
                    }
                    }>
                    <div className="block-form ">
                        <div className='inputs' >
                            <label htmlFor="">Nome completo:</label>
                            <br />
                            <div className='oi'><input value={nome} onChange={setnome} type="text" /></div>
                            
                        </div>
                        <div className='inputs'>
                            <label htmlFor="">Data de nascimento:</label>
                            <br />
                            <div className='oi'><input id='first-input' value={data} onChange={setdata} type="date" /></div>
                            
                        </div>
                    </div>
                    <div className="block-form">
                        <div className='inputs'>
                            <label htmlFor="">CPF:</label>
                            <br />
                            <div className='oi'><input value={cpf} onChange={setcpf} type="text" /></div>
                            
                        </div>
                        <div className='inputs'>
                            <label htmlFor="">Cargo:</label>
                            <br />
                            <div className='oi'><input value={cargo} onChange={setcargo} type="text" /></div>
                            
                        </div>
                    </div>
                    <div className='inputs'> 
                        <label htmlFor="">Endereço:</label>
                        <br />
                        <div className='oi2'><textarea value={endereco} onChange={setendereco} name=""></textarea></div>
                        
                    </div>
                    <div className="block-form">
                        <div className='inputs'>
                            <label htmlFor="">Observação:</label>
                            <br />
                            <div className='oi'><input value={obs} onChange={setobs} type="text" /></div>
                            
                        </div>
                        <div className='inputs'>
                            <label htmlFor="">Senha de 6 Dígitos:</label>
                            <br />
                            <div className='oi'><input value={senha} onChange={setsenha} type="text" /></div>
                            
                        </div>
                    </div>
                    <div id='sexo'>
                        <div>
                            <label id='font'htmlFor="">Sexo:</label>
                        </div>
                        <div id='checkboxes'> 
                            <div>
                                <input type="radio" name="sexo"  className='sex' value='M' checked={sex === 'M'} onChange={setsex}/>
                                 <p className="sex">Masculino </p>
                            </div>
                            <div>
                                <input type="radio" name="sexo"  className='sex' checked={sex === 'F'} value='F' onChange={setsex}/>
                                <p className="sex">Feminino </p>
                            </div>
                            <div>
                                <input type="radio" name="sexo"  className='sex'  checked={sex === 'O'} value='O' onChange={setsex}/>
                                <p className="sex">Não declarado </p>
                            </div>

                        </div>
                    </div>
                    <div id='cadastrarbtn'>
                        <button  type='submit' id='cadastrar'>Cadastrar</button>
                    </div>
                </form>
               {condition && <div id="validation-errors">
                        <div id="validation">
                            <div id="validation-menssage">
                                <p id='p1'>Falha ao cadastrar</p>
                                <div id="a1"><button onClick={()=>{
                                    setCondition(false);
                                }} >X</button></div>
                                
                            </div>
                            <div className="errors">
                                {nome.length===0 && <div className="error"><p>preencha o campo 'Nome completo'</p></div>}
                                {cpf.length===0 && <div className="error"><p>preencha o campo 'CPF'</p></div>}
                                {cargo.length===0 && <div className="error"><p>preencha o campo 'Cargo'</p></div>} 
                                {endereco.length===0 && <div className="error"><p>preencha o campo 'Endereço'</p></div>}
                                {data=='' && <div className="error"><p>selecione o campo 'Data de nascimento'</p></div>}
                            </div>
                        </div>
                    </div>} 
            </div>
        </div>
    );
};

export default FormCadastro;
