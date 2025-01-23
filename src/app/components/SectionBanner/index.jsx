import style from './SectionBanner.module.css';
import Image from 'next/image';
import Banner from '@/../public/banner.jpg';

export default function SectionBanner(props) {
    return (
        <section className={style.banner_container}>
            <div className={style.banner_container_img}>
                <Image className={style.img} src={Banner} alt="Banner" />
            </div>
            <div className={props.estiloEscuro ? style.banner_container_text_escuro : style.banner_container_text}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span><strong>e design digital</strong></span>
            </div>
        </section>
    );
    }