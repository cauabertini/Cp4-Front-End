import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";
import type { Aluno } from "./types";

import aluno01 from "./assets/img/aluno01.png";
import aluno02 from "./assets/img/aluno02.png";
import aluno03 from "./assets/img/aluno03.png";
import aluno04 from "./assets/img/aluno04.png";
import aluno05 from "./assets/img/aluno05.png";

import styles from "./App.module.css";

const TITULO_PAGINA = "Alunos da Turma 1TDSPI";

const alunos: Aluno[] = [
  { id: 1, nome: "Caua Bertini", rm: "RM570451", avatar: aluno01 },
  { id: 2, nome: "Henrique Soares", rm: "RM573618", avatar: aluno02 },
  { id: 3, nome: "Lucas Costa", rm: "RM571016", avatar: aluno03 },
  { id: 4, nome: "Lucas Fortunato", rm: "RM572860", avatar: aluno04 },
  { id: 5, nome: "Nicolas Frazao", rm: "RM568780", avatar: aluno05 },
];

function App() {
  return (
    <div className={styles.app}>
      <Cabecalho titulo={TITULO_PAGINA} logo="/logo.svg" />
      <Conteudo alunos={alunos} />
      <Rodape texto="© 2026 Turma 1TDSPI - Front-End Design Engineering" />
    </div>
  );
}

export default App;