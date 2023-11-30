export interface IEspecialista {
  especialistaId: string;
  nome: string;
  sobrenome: string;
  atendimentos: any;
  descricaoCurta: string;
  fotoPerfil: string;
  imagemsPublicidade:ImagemPublicidade[];
  descricaoDetalhada: string;
  especialidade: string;
}

interface ImagemPublicidade {
  urlImage: string;
}