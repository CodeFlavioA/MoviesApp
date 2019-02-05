import React from 'react';

function ImageMovie(props){
    return(
        <div className="ImageMovie">
            <img src={props.src} alt=""/>
        </div>
    )
}

export default ImageMovie; 