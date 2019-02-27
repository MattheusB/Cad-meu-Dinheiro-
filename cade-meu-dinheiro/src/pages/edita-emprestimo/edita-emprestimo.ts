import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DividaServiceProvider } from '../../providers/divida-service/divida-service';
import { Divida } from '../../models/divida';

@IonicPage()
@Component({
  selector: 'page-edita-emprestimo',
  templateUrl: 'edita-emprestimo.html',
})
export class EditaEmprestimoPage {

  public emprestimo = {} as Divida;

  data: string; 
  
  nomeVazio = false;
  valorInvalido = false;
  valorVazio = false;
  dataVazia = false;
  descricaoVazia = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    public emprestimoService: DividaServiceProvider,
    
  ) {
    this.emprestimo = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaEmprestimoPage');
  }
  private abrirToast(text) {
    let toast = this.toastController.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  editaEmprestimo(emprestimo: Divida) {
    if (!this.confirmaDados()) {
      this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
    } else {
      this.atualizaEmprestimoFB();
    }
  }

  atualizaEmprestimoFB() {
    this.emprestimoService.editaDividaEmprestimoFB(this.emprestimo, null, null, null).then(_ => {
      this.navCtrl.pop();
      this.abrirToast("Empréstimo editado.");
    }).catch(err => {
      this.abrirToast("Ops... Ocorreu algum erro!");
    })
  }

  private ajustaData() {
    let dataSeparada = this.data.split("-");
    console.log(dataSeparada);
    let ano = Number(dataSeparada[0]);
    let mes = Number(dataSeparada[1]) - 1;
    let dia = Number(dataSeparada[2]);
    console.log(new Date(ano, mes, dia))
    this.emprestimo.data = new Date(ano, mes, dia);
  }

  private confirmaDados() {
    this.nomeVazio = this.emprestimo.nomeUsuarioDevedor == "" || this.emprestimo.nomeUsuarioDevedor == null;
    this.valorInvalido = this.emprestimo.valor <= 0;
    this.valorVazio = this.emprestimo.valor == null;
    this.dataVazia = this.data == null;
    this.descricaoVazia = this.emprestimo.descricao == "" || this.emprestimo.descricao == null;
    return !this.valorInvalido && !this.nomeVazio && !this.valorVazio &&
      !this.dataVazia && !this.descricaoVazia;
  }

}
