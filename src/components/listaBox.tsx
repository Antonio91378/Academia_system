import React from 'react';

interface ListaBoxProps {
    children: React.ReactNode
}

const ListaBox: React.FC<ListaBoxProps> = ({ children }) => {
    return (
       <div className="listaBox">
           <p>listaBox</p>
           {children}
       </div>
    );
};

export default ListaBox;
