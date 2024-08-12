import React, { useState } from 'react';
import cx from 'classnames';
import styles from "./Card.module.scss";

const Card = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false)


    return (
        <div className={cx(styles.card, { [styles.rotated]: showAnswer })} onClick={() => setShowAnswer(!showAnswer)}>
            <div className={cx(styles.cardFront, styles.cardTitle)}>
                {!showAnswer && (<h1>{question}</h1>)}
            </div>
            <div className={cx(styles.cardBack, styles.cardAnswer)}>
                {showAnswer &&
                    (
                        <div className={styles.answerContent}>{answer}</div>
                    )
                }
            </div>
        </div>
    )
}

export default Card