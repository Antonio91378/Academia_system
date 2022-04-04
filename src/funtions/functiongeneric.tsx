import React from 'react';

interface FunctionProps {
nome:string,
}

const Function:React.FC<FunctionProps> = ({nome}) => {

        const a = {nome}
        console.log(a)
        return null
};

export  {Function};
