import styles from './Sobre.module.css';

export default function Sobre() {
    return (
        <section id="sobre" className={styles.sobre}>
            <div className="container">
                <h3>Sobre Nossa Empresa</h3>
                <p>Com vasta experiência no mercado da construção civil, nossa empresa é especializada em transformar projetos em realidade. Priorizamos o uso de materiais de alta qualidade, a segurança em todas as etapas da obra e o compromisso com os prazos estabelecidos, garantindo a satisfação total de nossos clientes.</p>
            </div>
        </section>
    );
}