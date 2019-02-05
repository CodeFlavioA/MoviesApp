import React from 'react';

function InputHidden(props){
    const styles = {
        'display': props.displayInput,
    }
    return(
        <input ref={props.setRef} type='text' style={styles} className='newTeam' id='newTeam'/>
    )
}

export default InputHidden; 
