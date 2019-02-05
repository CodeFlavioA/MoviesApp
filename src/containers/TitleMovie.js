import React from 'react'

function TitleMovie(props){
    return(
        <div className="TitleMovie">
            <h2>{props.movie.title}
                <br/>
                <small>
                {props.movie.original_title}
                </small>
            </h2>
            {props.children}
        </div>
    )
}

export default TitleMovie;