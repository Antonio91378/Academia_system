import React from 'react';

interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = ({  }) => {
    return (
        <div id='aguardando'>
        <div><h1>Aguardando</h1></div>
            <div className='loader'>
            <div className="loader-inner ball-pulse-sync">
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
        </div>
    );
};

export default Loader;
