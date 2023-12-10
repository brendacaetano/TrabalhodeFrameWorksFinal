
import React from 'react';
import styles from '../styles/Components.module.css';

function Navbar() {
    return (
       
        <div className={styles.navbar}> 
            <h2>Descrição de Times</h2> 
            <a className={styles.a2} href="/">Home</a> 
            <a className={styles.a1} href="/times">Times</a>

        </div>
    );
}

export default Navbar;
