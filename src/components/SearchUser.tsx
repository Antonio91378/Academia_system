import React from 'react';

interface SearchUserProps {
    parameter:any;
}

const SearchUser: React.FC<SearchUserProps> = ({ parameter }) => {
    return (
        <div id='dark-bg'>
            <div className='viewUser'>
                <button onClick={parameter} id='close'>X</button>
                <div className="view1">
                    <div className="imgg">imagem</div>
                    <div className="view-info">
                        <p>nome</p>
                        <p>cpf</p>
                        <p>data</p>
                    </div>
                </div>
                <div className="view0">
                    <div className="view2">
                        informações extras:
                    </div>
                    <div className="view3">
                        situação de pagamento
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchUser;
