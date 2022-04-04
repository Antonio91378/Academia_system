import React from 'react';

interface ListaBuscaProps {

}

const ListaBusca: React.FC<ListaBuscaProps> = ({  }) => {
    return (
        <div className="listaBusca">
            <div className="busca">
                <label htmlFor="">buscar usuário :</label>
                <input type="text" />
            </div>
        </div>
    );
};

export default ListaBusca;
