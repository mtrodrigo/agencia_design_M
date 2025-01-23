import styles from './Topo.module.css'
import Image from 'next/image'
import Logo from '@/../public/logo.png'
import Lua from '@/../public/moon.png'

export default function Topo() {
  return (
    <header className={styles.topo}>
            <Image className={styles.topo_img} src={Logo} alt="Logo" />
            <button className={styles.topo_btn}><Image className={styles.topo_btn_img} src={Lua} alt='Lua' /></button>
    </header>
  )
}