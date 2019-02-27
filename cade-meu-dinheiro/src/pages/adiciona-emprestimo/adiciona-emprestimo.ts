import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { DividaServiceProvider } from '../../providers/divida-service/divida-service';
import { Divida } from '../../models/divida';
import { StatusBar } from '@ionic-native/status-bar';
import { Usuario } from '../../models/usuario';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-adiciona-emprestimo',
  templateUrl: 'adiciona-emprestimo.html',
})
export class AdicionaEmprestimoPage {

  public usuario = {} as Usuario;
  public emprestimo = {} as Divida;

  nomeVazio = false;
  valorInvalido = false;
  valorVazio = false;
  dataVazia = false;
  descricaoVazia = false;
  usuarioNaoEncontrado: boolean = false;
  usuarioInvalido = false;

  data: Date;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public emprestimoService: DividaServiceProvider,
    public statusBar: StatusBar,
    public authService: AuthProvider,
    public alertCtrl: AlertController
  ) {
    authService.getUsuario().subscribe(res => {
      console.log(res);
      this.usuario = res as Usuario;
    });
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString("#00006b");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaEmprestimoPage');
  }

  private abrirToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  adicionaEmprestimo() {
    if (!this.confirmaDados()) {
      this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
    } else {
      if (!this.usuarioNaoEncontrado) {
        this.authService.getUsuarioRef(this.emprestimo.usuarioDevedor).then(result => {
          this.adicionaEmprestimoAux();
        }).catch(error => {
          console.log("entrei");
          let alert = this.alertCtrl.create({
            title: "Usuário não encontrado",
            message: "Deseja adicionar o empréstimo localmente?"
            + "\n\n" + "Você deverá adicionar um nome para identificação.",
            buttons: [{
              text: 'Cancelar',
              handler: () => {
                console.log('Clicou em cancelar');
              }
            },
            {
              text: 'Adicionar',
              handler: () => {
                this.usuarioNaoEncontrado = true;
                this.emprestimo.usuarioDevedor = null;
              }
            }

            ]
          });
          alert.present();
        })
      } else {
        this.adicionaEmprestimoAux();
      }
    }
  }

  adicionaEmprestimoAux() {
    console.log(this.emprestimo.data);
    this.emprestimo.aberta = true;
    this.emprestimo.usuarioEmprestador = this.usuario.username;
    this.emprestimo.nomeUsuarioEmprestador = this.usuario.nome;
    this.emprestimo.emailUsuarioEmprestador = this.usuario.email;
    this.emprestimo.data = this.data;
    this.emprestimoService.adicionaEmprestimoFB(this.emprestimo);
    this.navCtrl.pop();
    this.abrirToast("Empréstimo adicionado.");
  }

  /*  private ajustaData() {
      let dataSeparada = this.data.split("-");
      console.log(dataSeparada);
      let ano = Number(dataSeparada[0]);
      let mes = Number(dataSeparada[1]) - 1;
      let dia = Number(dataSeparada[2]);
      console.log(new Date(ano, mes, dia));
      this.emprestimo.data = new Date(ano, mes, dia);
    } */

  private confirmaDados() {
    if(this.usuarioNaoEncontrado) {
      this.nomeVazio = this.emprestimo.nomeUsuarioDevedor == "" || this.emprestimo.nomeUsuarioDevedor == null;
    } else {
      this.usuarioInvalido = this.emprestimo.usuarioDevedor == "" || this.emprestimo.usuarioDevedor == null;
    }
    this.valorInvalido = this.emprestimo.valor <= 0;
    this.valorVazio = this.emprestimo.valor == null;
    this.dataVazia = this.data == null;
    this.descricaoVazia = this.emprestimo.descricao == "" || this.emprestimo.descricao == null;
    return !this.valorInvalido && !this.nomeVazio && !this.valorVazio &&
      !this.dataVazia && !this.descricaoVazia;
  }

}
