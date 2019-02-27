import { Injectable } from '@angular/core';
import { Divida } from "../../models/divida";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../auth/auth'
import { Usuario } from '../../models/usuario';
import { deepCopy } from 'ionic-angular/util/util';
import { Acordo } from '../../models/acordo';
import { NotificationProvider } from '../notification/notification';

@Injectable()
export class DividaServiceProvider {

  private firebaseUser: Observable<firebase.User>;
  private usuario = {} as Usuario;
  private dividas: AngularFireList<Divida> = null;
  private emprestimos: AngularFireList<Divida> = null;
  private usuarioCarregado: boolean = false;


  constructor(public db: AngularFireDatabase,
    public authProvider: AuthProvider,
    public notificacao: NotificationProvider) {
      this.authProvider.getUsuario().subscribe(user => {
        this.usuario = user as Usuario;
      })
  }

  public adicionaDividaFB(divida: Divida) {
    divida.key = this.generateRandomKey();
    console.log(divida);
    return new Promise((resolve) => {
      this.associaDividaFB(divida).then(div => {
        this.db.object("divida-list/"+divida.key).set(div).then(_ => {
          resolve();
        });
      });
    });
  }

  associaDividaFB(divida: Divida) {
    return new Promise((resolve) => {
      if (divida.usuarioDevedor != null && divida.usuarioEmprestador != null) {
        this.authProvider.getUsuarioRef(divida.usuarioEmprestador).then(usuario => {
          var usuarioAssociado = usuario as Usuario;
          if (Object.keys(usuarioAssociado).length > 0) {
            divida.usuarioEmprestador = usuarioAssociado.username;
            divida.nomeUsuarioEmprestador = usuarioAssociado.nome;
            divida.emailUsuarioEmprestador = usuarioAssociado.email;
            if (usuarioAssociado.userId != null) {
              this.notificacao.enviarNotificacao(usuarioAssociado.userId, "Novo empréstimo de " + divida.nomeUsuarioDevedor, divida.descricao + " \nR$" + this.formataValor(divida.valor))
            }
          }
          resolve(divida);
        }).catch(_ => {
          resolve(divida);
        });
      } else {
        resolve(divida);
      }
    });
  }
  

  public adicionaEmprestimoFB(emprestimo: Divida) {
    emprestimo.key = this.generateRandomKey();
    return new Promise((resolve) => {
      this.associaEmprestimoFB(emprestimo).then(emp => {
        this.db.object("divida-list/"+emprestimo.key).set(emp).then(_ => {
          resolve();
        });
      });
    });
  }



  associaEmprestimoFB(emprestimo: Divida) {
    return new Promise((resolve) => {
      if (emprestimo.usuarioDevedor != null && emprestimo.usuarioEmprestador != null) {
        this.authProvider.getUsuarioRef(emprestimo.usuarioDevedor).then(usuario => {
          var usuarioAssociado = usuario as Usuario;
          if (Object.keys(usuarioAssociado).length > 0) {
            emprestimo.usuarioDevedor = usuarioAssociado.username;
            emprestimo.nomeUsuarioDevedor = usuarioAssociado.nome;
            emprestimo.emailUsuarioDevedor = usuarioAssociado.email;
            if (usuarioAssociado.userId != null) {
              this.notificacao.enviarNotificacao(usuarioAssociado.userId, "Nova dívida de " + emprestimo.nomeUsuarioEmprestador, emprestimo.descricao + " \nR$ " + this.formataValor(emprestimo.valor));
            }
          }
          resolve(emprestimo);
        }).catch(_ => {
          resolve(emprestimo);
        });
      } else {
        resolve(emprestimo);
      }
    });
  }

  public editaDividaEmprestimoFB(divida: Divida, acordo: Acordo, tipo: string, acao: string) {
    return new Promise((resolve, reject) => {
      this.db.object("divida-list/" + divida.key).set(divida).then(_ => {
        if(acordo != null) {
          if(tipo == "emprestimo") {
            this.authProvider.getUsuarioRef(divida.usuarioDevedor).then(usuario => {
              var usuarioAssociado = usuario as Usuario;
              if (Object.keys(usuarioAssociado).length > 0) {
                if (usuarioAssociado.userId != null) {
                  this.notificacao.enviarNotificacao(usuarioAssociado.userId, divida.nomeUsuarioEmprestador + " " + acao + " um acordo.", this.getTextoData(acordo.data) + " às " + acordo.hora + " em " + acordo.local);
                }
              }
              resolve(divida);
            }).catch(_ => {
              resolve(divida);
            });
          } else {
            this.authProvider.getUsuarioRef(divida.usuarioEmprestador).then(usuario => {
              var usuarioAssociado = usuario as Usuario;
              if (Object.keys(usuarioAssociado).length > 0) {
                if (usuarioAssociado.userId != null) {
                  this.notificacao.enviarNotificacao(usuarioAssociado.userId, divida.nomeUsuarioDevedor + " " + acao + " um acordo.", this.getTextoData(acordo.data) + " às " + acordo.hora + " em " + acordo.local);
                }
              }
              resolve(divida);
            }).catch(_ => {
              resolve(divida);
            });
          }
        }
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  }

  public recebeDividasFB(username: string) {
    return this.db.list('/divida-list/', ref => ref.orderByChild('usuarioDevedor').equalTo(username));
  }

  public recebeEmprestimosFB(username: string) {
    return this.db.list('/divida-list/', ref => ref.orderByChild('usuarioEmprestador').equalTo(username));
  }

  public removeDividaFB(divida: Divida) {
    return this.db.list("divida-list/").remove(divida.key);
  }

  public removeEmprestimoFB(emprestimo: Divida) {
    return this.removeDividaFB(emprestimo);
  }

  public retornaSomaDividas() {
    return new Promise((resolve, reject) => {
      this.recebeDividasFB(this.usuario.username).valueChanges().subscribe(dividas => {
        const somaDividas = (dividas as Divida[]).reduce((acum, divida) => {
          return acum + divida.valor;
        }, 0.0);
        resolve(somaDividas);
      });
    });
  }
  
  public apagaDividasEmprestimos() {
    this.dividas = null;
    this.emprestimos = null;
  }
  

  formataValor(valor: number) {
    return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
  }

  getTextoData(data) {
    var options = { weekday: "long", month: 'long', day: '2-digit' };
    let dataSeparada = data.toString().split("-");
    console.log(dataSeparada);
    let ano = Number(dataSeparada[0]);
    let mes = Number(dataSeparada[1]) - 1;
    let dia = Number(dataSeparada[2]);
    let dataAjustada = new Date(ano, mes, dia);
    return dataAjustada.toLocaleDateString("pt-br", options);
  }

  generateRandomKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

}
