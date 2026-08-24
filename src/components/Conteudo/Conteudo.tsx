import type { ConteudoProps } from "../../types";
import Cards from "../Cards/Cards";
import styles from "./Conteudo.module.css";

function Conteudo({ alunos }: ConteudoProps) {
  return (
    <main className={styles.conteudo}>
      <Cards alunos={alunos} />
    </main>
  );
}

export default Conteudo;