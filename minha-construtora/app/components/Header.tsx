import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <h1>Sua Construtora</h1>
                <nav>
                    <ul>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Nossos Serviços</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}