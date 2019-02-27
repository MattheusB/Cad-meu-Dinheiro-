import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { DividaServiceProvider } from '../../providers/divida-service/divida-service';
import { Divida } from '../../models/divida';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../../providers/auth/auth';
import { Usuario } from '../../models/usuario';


@IonicPage()
@Component({
  selector: 'page-adiciona-divida',
  templateUrl: 'adiciona-divida.html',
})
export class AdicionaDividaPage {

  public usuario = {} as Usuario;
  public divida = {} as Divida;

  data: Date;
  usuarioNaoEncontrado: boolean = false;
  nomeVazio = false;
  valorInvalido = false;
  valorVazio = false;
  dataVazia = false;
  descricaoVazia = false;
  usuarioInvalido = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dividaService: DividaServiceProvider,
    public toastCtrl: ToastController, 
    public statusBar: StatusBar,
    public authService: AuthProvider,
    public alertCtrl: AlertController) { 
      authService.getUsuario().subscribe(res =>{
        console.log(res);
        this.usuario = res as Usuario;
      });      
    }     

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString("#d30000");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaDividaPage');
  }


  private abrirToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  
  adicionaDivida() {
    if (!this.confirmaDados()) {
      this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
    } else {
      if(!this.usuarioNaoEncontrado) {
        this.authService.getUsuarioRef(this.divida.usuarioEmprestador).then(result => {
          this.adicionaDividaAux();
        }).catch(error => {
          console.log("entrei");
          let alert = this.alertCtrl.create({
            title: "Usuário não encontrado",
            message: "Deseja adicionar a dívida localmente?"
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
                this.divida.usuarioEmprestador = null;
                //this.adicionaDividaAux();
              }
            }
      
            ]
          });
          alert.present();
        })
      } else {
        this.adicionaDividaAux();
      } 
    }
  }

  public adicionaDividaAux() {
    this.divida.aberta = true;
    this.divida.data = this.data;
    this.divida.usuarioDevedor = this.usuario.username;
    this.divida.nomeUsuarioDevedor = this.usuario.nome;
    this.divida.emailUsuarioDevedor = this.usuario.email;
    this.dividaService.adicionaDividaFB(this.divida);
    this.navCtrl.pop();
    this.abrirToast("Dívida adicionada.");
  }

 /* private ajustaData() {
    let dataSeparada = this.data.split("-");
    console.log(dataSeparada);
    let ano = Number(dataSeparada[0]);
    let mes = Number(dataSeparada[1]) - 1;
    let dia = Number(dataSeparada[2]);
    console.log(new Date(ano, mes, dia))
    this.divida.data = new Date(ano, mes, dia);
  } */

  private confirmaDados() {
    if(this.usuarioNaoEncontrado) {
      this.nomeVazio = this.divida.nomeUsuarioEmprestador == "" || this.divida.nomeUsuarioEmprestador == null;
    } else {
      this.usuarioInvalido = this.divida.usuarioEmprestador == "" || this.divida.usuarioEmprestador == null;
    }
    this.valorInvalido = this.divida.valor <= 0;
    this.valorVazio = this.divida.valor == null;
    this.dataVazia = this.data == null;
    this.descricaoVazia = this.divida.descricao == "" || this.divida.descricao == null;
    return !this.valorInvalido && !this.nomeVazio && !this.valorVazio &&
      !this.dataVazia && !this.descricaoVazia;
  }

}
