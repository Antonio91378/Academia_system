import React from 'react';

interface MainHeroProps {
  children  : React.ReactNode;
}

const MainHero: React.FC<MainHeroProps> = ({ children }) => {
    return (
        <div className="MainHero">
            {children}
        </div>
    );
};

export default MainHero;
