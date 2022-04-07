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
    // sexo:any;
    }

const FormCadastro: React.FC<FormCadastroProps> = ({ função, nome, data, cpf, cargo, endereco, obs, senha, session,setnome,setdata,setcpf,setcargo,setendereco,setobs,setsenha, setSession}) => {

    return (
        <div >
            <form className="cadastro" action="" onSubmit={(event) =>{
                event.preventDefault();
                função();
                }
                }>
                <div className='inputs' >
                    <label htmlFor="">Nome completo:</label>
                    <br />
                    <input value={nome} onChange={setnome} type="text" />
                </div>
                <div className='inputs'>
                    <label htmlFor="">Data de nascimento:</label>
                    <br />
                    <input value={data} onChange={setdata} type="text" />
                </div>
                <div className='inputs'>
                    <label htmlFor="">CPF:</label>
                    <br />
                    <input value={cpf} onChange={setcpf} type="text" />
                </div>
                <div className='inputs'>
                    <label htmlFor="">Cargo:</label>
                    <br />
                    <input value={cargo} onChange={setcargo} type="text" />
                </div>
                <div className='inputs'> 
                    <label htmlFor="">Endereço:</label>
                    <br />
                    <textarea value={endereco} onChange={setendereco} name=""></textarea>
                </div>
                <div className='inputs'>
                    <label htmlFor="">Observação:</label>
                    <br />
                    <input value={obs} onChange={setobs} type="text" />
                </div>
                <div className='inputs'>
                    <label htmlFor="">Senha de 6 Dígitos:</label>
                    <br />
                    <input value={senha} onChange={setsenha} type="text" />
                </div>
                <div id='sexo'>
                    <div>
                        <label id='font'htmlFor="">Sexo:</label>
                    </div>
                    <div>
                        <input className='minSpace' type="checkbox" name="" id="" />
                        <label className='minSpace' htmlFor="">Masculino</label>
                        <input className='minSpace' type="checkbox" name="" id="" />            
                        <label className='minSpace' htmlFor="">Feminino</label>
                    </div>
                </div>
                <div>
                    <button  type='submit' id='cadastrar'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default FormCadastro;
