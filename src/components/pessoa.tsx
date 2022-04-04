import React from 'react';

interface AppProps {
    nome:string,
    cpf:string,
    data:string,
}

const App: React.FC<AppProps> = ({ nome,cpf,data }) => {
    return (
        <div className="usuario">
            <div className="img"></div>
            <div className="info">
                <p>{nome}</p>
                <p>{cpf}</p>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default App;
