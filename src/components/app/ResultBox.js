import { useRef } from "react";
import { factorial } from "../../utils";
import styles from "./resultItemStyle.module.css";

const ResultBox = ({ num }) => {

    const factorialNumber = useRef(factorial(num));

    const copyToClipboardHandler = () => {
        navigator.clipboard.writeText(factorialNumber.current)
    }

    return (
        <li className={styles.listItem}>
            <strong>Result of {num}! is:</strong>
            <br />
            <code>{factorialNumber.current.slice(0, 200)}...</code>
            <button 
                className={styles.smallButton} 
                onClick={copyToClipboardHandler}
            >
                Copy
            </button>
        </li>
    )
}

export default ResultBox;