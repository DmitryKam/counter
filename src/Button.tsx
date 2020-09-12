import React from 'react';
import './App.css';

type ButtonPropsType = {
    title: string
    cliks: (id: number) => void
    value:number
}





function UserButton(props: ButtonPropsType) {



    return (
        <button className={'but'} onClick={()=>props.cliks(props.value)}>
            {props.title}
        </button>
    )
}


export default UserButton;