import React from 'react';

interface SearchUserProps {
    parameter:any;
    nome:string;
    cpf:any;
    data:string;
    cargo?:any,
    endereco?:any,
    obs?:any,
    sex?:any,
    payment?:any,
}

const SearchUser: React.FC<SearchUserProps> = ({ parameter,nome,cpf,data,cargo,endereco,obs,sex,payment }) => {
    const pendencias = (payment:string)=>{
        if (payment == 'sem pendencias'){
            return (true)
        }else if (payment == 'com pendencias'){
            return (false)
        }
    }
    return (
        <div id='dark-bg'>
            <div className='viewUser'>
                <button onClick={parameter} id='close'>X</button>
                <div className="view1">
                    <div className="imgg">imagem</div>
                    <div className="view-info">
                        <p>{nome}</p>
                        <p>{cpf}</p>
                        <p>{data}</p>
                    </div>
                </div>
                <div className="view0">
                    <div className="view2">
                        <p>informações adicionais <button>editar</button> </p>
                        <div>
                            <p>Cargo: {`${cargo}`}</p>
                            <p>Endereço: {endereco}</p>
                            <p>Sexo: {sex} </p>
                            <p>Mensalidade: {pendencias(payment) && <span id='sem-pendencias'>sem pendências</span>}</p>
                            <p>Observação: {obs}</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="view3">
                        <p>Situação de pagamento</p>
                        <div className="situacao">
                            <div className="mes-atual">
                                <div>
                                <p>último pagamento efetuado em:</p>
                                </div>
                                <p>Último pagamento válido até:</p>
                                <button>Atualizar pagamento</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchUser;
