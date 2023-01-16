import { SubTipo } from './SubTipo';
import { Tipo } from './Tipo';

export interface Lancamento {
  id: string;
  dataHora: Date;
  valor: number;
  tipo: Tipo;
  subTipo: SubTipo;
  detalhes: string;
  usuario: Usuario;
}

export interface Usuario { id:string }
