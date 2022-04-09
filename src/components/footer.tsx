import React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer">
            <div id="footer1"></div>
            <div id="footer2">© Copyright 2022 Antônio Víctor Gonçalves Dias. All Rights Reserved.
            <br />
            </div>
            <div id="footer3">Powered by <a href="#">BitHelper</a></div>
        </div>
    );
};

export default Footer;
