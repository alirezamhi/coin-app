import React from 'react';
//gift
import Spinner from '../gift/Loader.gif';

const Loader = () => {
    return (
        <div>
            <h2>Loading...</h2>
            <img src={Spinner}/>
        </div>
    );
};

export default Loader;