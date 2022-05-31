import { useState } from 'react';
import ResultBox from './ResultBox';
import styles from './styles.module.css'

const App = () => {
    // States
    const [number, setNumber] = useState('');
    const [numberList, setNumberList] = useState([]);

    // Callbacks
    const addNumberList = () => {
        const numberToAdd = +number
        if (Number.isFinite(numberToAdd)) {
            setNumberList([...numberList, numberToAdd])
            setNumber('');
        }
    }

    const inputValueChangeHandler = e => setNumber(e.target.value.slice(0, 4));


    return (
        <div>
            <h2 className={styles.appTitle}>Factorial!</h2>
            <br />
            <label htmlFor="number">Enter a number from 0 to 9999</label>
            <input
                id='number'
                className={styles.numberInput}
                type="number"
                name="number"
                value={number}
                onChange={inputValueChangeHandler}
            />
            <br />
            <button onClick={addNumberList}>Add For Calculation</button>
            <hr />
            <h2>Output</h2>
            <ul>
                {numberList.map((num , i) => <ResultBox num={num} key={i} />)}
            </ul>
        </div>
    );
}

export default App;
