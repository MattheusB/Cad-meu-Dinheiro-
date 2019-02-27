import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the EditaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-perfil',
  templateUrl: 'edita-perfil.html',
})
export class EditaPerfilPage {
  public usuario = {} as Usuario;
  fotosrc;

  nomeVazio = false;  

  constructor(
    public navCtrl: NavController, 
    public authProvider: AuthProvider,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public toastController: ToastController
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaPerfilPage');
  }

  ionViewWillEnter() {
    this.fotosrc = this.navParams.data;
  }

  editaUsuario(usuario: Usuario) {
    if (!this.confirmaDados()) {
      this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
    } else {
      this.abrirToast("Salvando...");
      this.authProvider.salvarNomeUsuario(this.usuario.nome).then(result => {
        this.navCtrl.pop();
        this.abrirToast("Dados salvos.");
      })
    }
  }

  retornaFoto() {
    console.log(this.usuario);
    this.authProvider.getGravatarUsuario(this.usuario.email, "https://cdn.pbrd.co/images/HwxHoFO.png"); 
  }

  private confirmaDados() {
    this.nomeVazio = this.usuario.nome == "" || this.usuario.nome == null;
    return !this.nomeVazio;
  }

  private abrirToast(text) {
    let toast = this.toastController.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  

}
