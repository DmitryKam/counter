import React, {useState} from 'react';
import './App.css';
import UserButton from './Button';

type ButtonsPropsType = {
    addClick: (id: number) => void
    value: number
    resetClick: (id: number) => void
    minimum: number
}


function Buttons(props: ButtonsPropsType) {

    const addClick = () => {
        props.addClick(props.value)
    }
    const resetClick = () => {
        props.resetClick(props.minimum)
    }

    return (
        <div className={'buttons'}>
            <UserButton title={'Inc'}
                        cliks={addClick}
                        value={props.value}/>
            <UserButton title={'Reset'}
                        cliks={resetClick}
                        value={props.value}
/>
        </div>
    )
}


export default Buttons;