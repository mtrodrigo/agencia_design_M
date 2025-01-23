'use client';
import styles from "./page.module.css";
import Topo from "./components/Topo";
import SectionBanner from "./components/SectionBanner";
import SectionExperienciaTrabalho from "./components/SectionExperienciaTrabalho";
import Rodape from "./components/Rodape";
import { useState } from "react";


export default function Home() {
  const [estilo, setEstilo] = useState(false)

  const alterarEstilo = () => {
    setEstilo(!estilo) 
  }
  
  

  return (
    <main className={styles.main}>
      <Topo 
        clickBtn={alterarEstilo} 
        estiloEscuro={estilo} />
      <SectionBanner />
      <SectionExperienciaTrabalho />
      <Rodape />
    </main>
  );
}
