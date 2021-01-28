import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return ( 
        <React.Fragment>
            <article className='text-center p-5 bg-danger text-white'>
                This application was developed by 
                scrotch for testing and development
                <br/>Go back <Link to='/'>Home</Link>
            </article>
        </React.Fragment>
    );
}
 
 
export default About;