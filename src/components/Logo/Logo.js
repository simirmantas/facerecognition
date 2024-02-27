import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <Tilt className='ma4 mt0 br2 shadow-2 pa3 logo' tiltMaxAngleX={45} tiltMaxAngleY={45} perspective={800} scale={1.1} transitionSpeed={3000} gyroscope={true}>
            <img src='https://img.icons8.com/brain' alt='logo' />
        </Tilt>
    );
}

export default Logo;