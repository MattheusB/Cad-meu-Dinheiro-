import { Acordo } from "./acordo";

export class Divida {
    key: string;
    emailUsuarioEmprestador: string;
    usuarioEmprestador: string;
    nomeUsuarioEmprestador: string;
    data: Date;
    descricao: string;
    emailUsuarioDevedor: string;
    usuarioDevedor: string;
    nomeUsuarioDevedor: string;
    valor: number;
    fotosrc: string;
    aberta: boolean;
    acordos: Acordo[];
}
