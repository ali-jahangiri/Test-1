import { useEffect, useState } from "react";
import { factorial, promisify } from "../../utils";
import styles from "./resultItemStyle.module.css";

const ResultBox = ({ num }) => {

    const [factorialNumber, setFactorialNumber] = useState("")
    const [loading, setLoading] = useState(true);

    const copyToClipboardHandler = () => {
        navigator.clipboard.writeText(factorialNumber)
    }

    useEffect(() => {
        const p = new Promise((res) => {
            factorial(num , res)
        })

        p.then(data => {
            setFactorialNumber(data);
            setLoading(false);
        })
        
    } , []);

    return (
        <li className={styles.listItem}>
            <strong>Result of {num}! is:</strong>
            <br />
            {
                loading ? <div className={styles.progress} /> : <>
                    <code>{factorialNumber.slice(0, 200)}...</code>
                    <button 
                        className={styles.smallButton} 
                        onClick={copyToClipboardHandler}
                    >
                        Copy
                    </button>
                </>
            }
        </li>
    )
}

export default ResultBox;