import React from 'react';

interface SuccesMensageProps {
func:any;
}

const SuccesMensage: React.FC<SuccesMensageProps> = ({ func }) => {
    return (
        <div className="modalBackground">
             <div>
                <p>usuário cadastrado com sucesso </p>
            </div>
            <div>
            <button onClick={func} >continuar</button>
            </div>
        </div>
       
    );
};

export default SuccesMensage;
