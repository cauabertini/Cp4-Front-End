import type { CabecalhoProps } from "../../types";
import styles from "./Cabecalho.module.css";

function Cabecalho({ titulo, logo }: CabecalhoProps) {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo da aplicação" className={styles.logo} />
      <h1 className={styles.titulo}>{titulo}</h1>
    </header>
  );
}

export default Cabecalho;