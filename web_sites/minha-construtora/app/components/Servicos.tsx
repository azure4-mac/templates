import styles from './Servicos.module.css';

export default function Servicos() {
    return (
        <section id="servicos" className={styles.servicos}>
            <div className="container">
                <h3>Nossos Serviços</h3>
                <div className={styles.servicosGrid}>
                    <div className={styles.servicoItem}>
                        <h4>Projetos Residenciais</h4>
                        <p>Construção de casas e condomínios com design moderno e funcional.</p>
                    </div>
                    <div className={styles.servicoItem}>
                        <h4>Construções Comerciais</h4>
                        <p>Edifícios, lojas e galpões projetados para o sucesso do seu negócio.</p>
                    </div>
                    <div className={styles.servicoItem}>
                        <h4>Reformas e Reparos</h4>
                        <p>Modernização de espaços, ampliações e manutenções prediais completas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}