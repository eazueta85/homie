import React from 'react';
import LogoArea from './Logo.style';

const Logo = ({src}) => {
    return (
        <LogoArea>
             {src && <img src={src} alt="Homie" />}
        </LogoArea>
    );
};

export default Logo;