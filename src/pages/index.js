import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Users({ users }) {
  return (
    <div className={styles.corpo}>
      <Navbar />
      <div className={styles.home}>
        <h1>Audio Descrição de Times</h1>
        <p>
          Estamos dedicados a criar uma experiência inclusiva para indivíduos com deficiência visual, disponibilizando um extenso banco de dados de descrições de áudio para imagens. Reconhecemos a vitalidade da acessibilidade e estamos empenhados em tornar o ambiente digital acessível a todas as pessoas.
        </p>
        <p><a href="/times">Veja nossos times!</a></p>
      </div>

      <Footer />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol');
  const repo = await res.json();
  const users = await repo;
  return {
    props: { users }
  };
};

export default Users;
