import styles from './Contato.module.css';

export default function Contato() {
    return (
        <section id="contato" className={styles.contato}>
            <div className="container">
                <h3>Solicite um Orçamento</h3>
                <form>
                    <input type="text" placeholder="Seu Nome" required />
                    <input type="email" placeholder="Seu E-mail" required />
                    <textarea placeholder="Descreva seu projeto" required></textarea>
                    <button type="submit">Enviar Pedido</button>
                </form>
            </div>
        </section>
    );
}