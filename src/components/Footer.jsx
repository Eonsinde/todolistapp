import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <footer style={footerStyle}>Developed by <Link to='/about'>Scrotch</Link></footer>
    );
}
 

let footerStyle = {
    background: 'rgb(46, 46, 48)',
    color: 'whitesmoke',
    padding: '8px',
    textAlign: 'center'
}

export default Footer;