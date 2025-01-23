import styles from './ExperienciaTrabalho.module.css';
import Card from '@/app/components/Card';

export default function SectionExperienciaTrabalho() {
    return (
        <section className={styles.experienciaTrabalho}>
            <div className={styles.texto_container}>
                <h2>Experiências De Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar o melhor resultado para nossos clientes.</p>
            </div>
            <div className={styles.cards_container}>
                <Card 
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    subtitulo="Pied Piper StartUp."
                    texto="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card 
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    subtitulo="E Corp."
                    texto="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card 
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    subtitulo="Arasaka Inc."
                    texto="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>    
    )
}