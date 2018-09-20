import React from 'react';
import birds from '../assets/images/birds.jpeg';

export default () =>{

    const birdStyles = {
        color: 'red',
        backgroundColor: 'blue',
        backgroundImage: `url(${birds})`,
        height: '500px'
    }

    return(
        <div>
        
        <h1>Hello Birds</h1>
        <div style={birdStyles}></div>
        </div>

    );
}