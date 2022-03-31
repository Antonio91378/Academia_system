import React from 'react';

interface BannerProps {
   children? : string;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
    return (
        <div className="banner">
            {children}
            <p>banner</p>
        </div>
    );
};

export default Banner;
