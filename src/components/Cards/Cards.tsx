import type { CardsProps } from "../../types";
import styles from "./Cards.module.css";

function Cards({ alunos }: CardsProps) {
  return (
    <div className={styles.cards}>
      {alunos.map((aluno) => (
        <article key={aluno.id} className={styles.card}>
          <img
            src={aluno.avatar}
            alt={`Avatar de ${aluno.nome}`}
            className={styles.avatar}
          />
          <h2 className={styles.nome}>{aluno.nome}</h2>
          <p className={styles.rm}>RM: {aluno.rm}</p>
        </article>
      ))}
    </div>
  );
}

export default Cards;