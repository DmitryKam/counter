import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Buttons from './Buttons';


function App() {

    let [click, setClick] = useState<number>(0);
    let [error, setError] = useState<string | null>(null);


    const maximum = 5;
    const minimum = 0;

    function addClick(id: number) { // ф-ция добовления
        if (id < maximum) {
            setClick(click + 1);
        }
        else setError('error')
    }


    function resetClick(id: number) { // ф-ция сброса
        setClick(click = id);
        setError(null);
    }


    return (
        <div className={'counter'}>
            <Display totalClick={click}
                     error={error}/>
            <Buttons
                addClick={addClick}
                value={click}
                resetClick={resetClick}
                minimum = {minimum}
            />
        </div>
    );
}

export default App;
