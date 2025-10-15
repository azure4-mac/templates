import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>&copy; 2025 Sua Construtora. Todos os direitos reservados.</p>
                <p>Telefone: (XX) XXXX-XXXX | E-mail: contato@suaconstrutora.com</p>
            </div>
        </footer>
    );
}