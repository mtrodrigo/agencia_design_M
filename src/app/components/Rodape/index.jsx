import styles from './Rodape.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.png'
import Facebook from '@/../public/facebook.png'
import Twitter from '@/../public/twitter.png'
import Linkedin from '@/../public/linkedin.png'
import Dribble from '@/../public/dribble.png'
import Behance from '@/../public/behance.png'
import Google from '@/../public/google.png'

export default function Rodape(props) {
  return (
    <footer className={props.estiloEscuro ? styles.rodape_escuro : styles.rodape}>
        <section className={styles.rodape_container}>
            <div className={styles.rodape_topo}>
                <Image className={styles.rodape_topo_img} src={Logo} alt="Logo" />
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
            </div>
            <div className={styles.rodape_rs}>
                <Image className={styles.rodape_rs_img} src={Facebook} alt="Facebook" />
                <Image className={styles.rodape_rs_img} src={Twitter} alt="Twitter" />
                <Image className={styles.rodape_rs_img} src={Linkedin} alt="Linkedin" />
                <Image className={styles.rodape_rs_img} src={Dribble} alt="Dribble" />
                <Image className={styles.rodape_rs_img} src={Behance} alt="Behance" />
                <Image className={styles.rodape_rs_img} src={Google} alt="Google" />
            </div>
        </section>
        <section className={styles.criador_container}>
            <p>© 2025 - Desenvolvido por <Link className={styles.criador_link} href="https://www.linkedin.com/in/rodrigo-marques-tavares-9482b4226/" target='_blank'>Rodrigo Marques Tavares</Link></p>
        </section>
    </footer>
    )
}