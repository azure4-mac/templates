import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h2>Construindo Sonhos, Edificando o Futuro</h2>
                <p>Qualidade, segurança e pontualidade do projeto ao acabamento.</p>
            </div>
        </section>
    );
}