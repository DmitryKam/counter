import React from 'react';
import './App.css';


type DisplayPropsType={
    totalClick:number
    error: string|null
}



function Display(props:DisplayPropsType) {

    const errors = props.error?'error':'display';

    return(
        <div className={errors}>
            {props.totalClick}
        </div>
    )
}

export default Display;