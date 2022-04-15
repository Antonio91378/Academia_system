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
}

const SearchUser: React.FC<SearchUserProps> = ({ parameter,nome,cpf,data,cargo,endereco,obs,sex }) => {
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
                        <p>informações extras: <button>editar</button> </p>
                        <p>Cargo: {`${cargo}`}</p>
                        <p>Endereço: {endereco}</p>
                        <p>Sexo:{sex} </p>
                        <p>Observação:{obs}</p>
                        <p></p>
                    </div>
                    <div className="view3">
                        <p>Situação de pagamento</p>
                        <div className="situacao">
                            <div className="mes-atual">
                                <p>Mês atual</p>
                                <div>
                                <p>último pagamento efetuado em:</p>
                                <button>Regularizar mês</button>
                                </div>
                                <p>=================</p>
                                <p>Último pagamento válido até</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchUser;
