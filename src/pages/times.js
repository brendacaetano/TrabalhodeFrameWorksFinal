import React from 'react';
import styles from '../styles/Times.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
function Users({ users }) {
    return (
        <div className={styles.corpo}>
            <Navbar/>
            <h1 className={styles.h1}> Banco de Times </h1>
            {users.map((user, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={user.id}>
                        <div className={styles.times}>
                            <p>{user.nome}</p>
                            <p>{user.usuario}</p>
                        </div>
                    </div>
                </Link>
            ))}
            <Footer/>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;
