import React, { Component } from 'react';

const Header = () => {
    return ( 
        <header style={headerStyles}>Todo List Application</header>
    );
}


let headerStyles = {
    color: "whitesmoke",
    background: "rgb(46, 46, 48)",
    padding: '12px 10px',
    textAlign: 'center',
}
 
export default Header;