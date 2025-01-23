import style from './Card.module.css';

export default function Card({ data, titulo, subtitulo, texto, estiloEscuro }) {
    return (
        <section className={estiloEscuro ? style.card_escuro : style.card}>
            <div className={style.card_topo}>
                <span>{data}</span>
                <h3>{titulo}</h3>
                <small>{subtitulo}</small>
            </div>
            <div className={style.card_texto}>
                <p>{texto}</p>
            </div>
        </section>
    )
}