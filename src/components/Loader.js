import React from 'react';
import '../assets/css/loader.css';

const Loader = () => {
    return (
        <div className="text-center my-24">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;
