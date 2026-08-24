export interface Aluno {
  id: number;
  nome: string;
  rm: string;
  avatar: string;
}

export interface CabecalhoProps {
  titulo: string;
  logo: string;
}

export interface ConteudoProps {
  alunos: Aluno[];
}

export interface CardsProps {
  alunos: Aluno[];
}

export interface RodapeProps {
  texto: string;
}