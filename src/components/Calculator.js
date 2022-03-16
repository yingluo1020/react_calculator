import React, { useState } from 'react'

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const updateInput = value => {

        if (
            ops.includes(value) && input === '' ||
            ops.includes(value) && ops.includes(input.slice(-1)) && input.slice(-1) == value
        ) { return; }

        else if (ops.includes(value) && ops.includes(input.slice(-1)) && input.slice(-1) != value) {
            return setInput(input.slice(0, -1) + value);
        }

        else {
            setInput(input + value);
        }

        if (!ops.includes(value)) {
            setResult(eval(input + value).toString());
        }
    }

    const creatDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateInput(i.toString())} key={i}>{i}</button>
            )
        }

        return digits;
    }

    const calculate = () => {
        setInput(eval(input).toString());
    }

    const deleteLast = () => {
        if (input == '') {
            return;
        }
        const value = input.slice(0, -1);

        setInput(value);

    }

    const allClear = () => {
        if (input == '') {
            return;
        }

        setInput('');
    }
    return (
        <div className="calculator">
            <div className="display">
                {/* {result ? <span>({result})</span> : ''}&nbsp; */}
                {input || '0'}
            </div>

            <div className="operators">
                <button onClick={() => updateInput('/')}>/</button>
                <button onClick={() => updateInput('*')}>*</button>
                <button onClick={() => updateInput('+')}>+</button>
                <button onClick={() => updateInput('-')}>-</button>

            </div>


            <div className="digits">
                <button onClick={allClear}>AC</button>
                <button onClick={deleteLast}>DEL</button>
                <button onClick={calculate}>=</button>

                {creatDigits()}
                <button onClick={() => updateInput('%')}>%</button>
                <button onClick={() => updateInput('0')}>0</button>
                <button onClick={() => updateInput('.')}>.</button>
            </div>
        </div>
    )
}

export default Calculator