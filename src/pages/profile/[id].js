import styles from '../../styles/Detalhes.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Profile({ user = {} }) {
    return (
        <div className={styles.bodyp}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.profile}>
                    <p>Time: {user.nome}</p>
                    <p>Usuario: {user.usuario}</p>
                    <p>Descrição: {user.descricao}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol');
    const repo = await res.json();
    const user = await repo[context.params.id];
    return {
        props: { user },
    };
}

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol');
    const repo = await res.json();
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Profile;
