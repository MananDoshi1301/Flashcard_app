import React from 'react';
import styles from "./Admin.module.scss"

const Admin = () => {
    return (
        <div>
            <div className={styles.title}>Admin Page</div>
            <div>
                <div>
                    <label htmlFor="question"></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Admin