import styles from './Topo.module.css'
import Image from 'next/image'
import Logo from '@/../public/logo.png'
import Lua from '@/../public/moon.png'
import Sol from '@/../public/sun.png'

export default function Topo(props) {
  return (
    <header className={props.estiloEscuro ? styles.topo_escuro : styles.topo}>
            <Image className={styles.topo_img} src={Logo} alt="Logo" />
            <button className={props.estiloEscuro ? styles.topo_btn_escuro : styles.topo_btn} onClick={props.clickBtn}><Image className={styles.topo_btn_img} src={props.estiloEscuro ? Sol : Lua} alt='Botão' /></button>
    </header>
  )
}