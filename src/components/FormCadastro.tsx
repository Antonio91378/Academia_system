import React from 'react';

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
    return (
        <div >
            <div className="form-hero">
                <form className="cadastro" action="" onSubmit={(event) =>{
                    event.preventDefault();
                    função();
                    }
                    }>
                    <div className="block-form">
                        <div className='inputs' >
                            <label htmlFor="">Nome completo:</label>
                            <br />
                            <div className='oi'><input value={nome} onChange={setnome} type="text" /></div>
                            
                        </div>
                        <div className='inputs'>
                            <label htmlFor="">Data de nascimento:</label>
                            <br />
                            <div className='oi'><input value={data} onChange={setdata} type="text" /></div>
                            
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
                                <input type="radio" name="sexo"  className='sex'  checked={sex === 'O'} value='F' onChange={setsex}/>
                                <p className="sex">Não declarado </p>
                            </div>

                        </div>
                    </div>
                    <div id='cadastrarbtn'>
                        <button  type='submit' id='cadastrar'>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormCadastro;
