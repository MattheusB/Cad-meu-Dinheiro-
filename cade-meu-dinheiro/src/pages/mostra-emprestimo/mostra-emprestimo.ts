import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Divida } from '../../models/divida';
import { DividaServiceProvider } from '../../providers/divida-service/divida-service';
import { EditaEmprestimoPage } from '../edita-emprestimo/edita-emprestimo';
import { StatusBar } from '@ionic-native/status-bar';
import { AdicionaAcordoPage } from '../adiciona-acordo/adiciona-acordo';
import { Acordo } from '../../models/acordo';
import { AcordoServiceProvider } from '../../providers/acordo-service/acordo-service';
import { EditaAcordoPage } from '../edita-acordo/edita-acordo';


@IonicPage()
@Component({
  selector: 'page-mostra-emprestimo',
  templateUrl: 'mostra-emprestimo.html',
})
export class MostraEmprestimoPage {
    
  public emprestimo = {} as Divida;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public emprestimoService: DividaServiceProvider,
    public toastController: ToastController,
    public alertController: AlertController,
    public statusBar: StatusBar,
    public acordoService: AcordoServiceProvider
  ) {
    this.emprestimo = this.navParams.data;
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString("#00006b");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostraEmprestimoPage');
  }

  formataValor(valor: number) {
    return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
  }

  existeAcordo() {
    return this.emprestimo.acordos !== undefined && this.emprestimo.acordos.length > 0;
  }

  editarAcordo(acordo: Acordo){
    this.navCtrl.push(EditaAcordoPage, [this.emprestimo, acordo, "emprestimo"]);
  }  

  fechaEmprestimo(emprestimo: Divida) {
    this.emprestimo.aberta = false;
    this.emprestimoService.editaDividaEmprestimoFB(this.emprestimo, null, null, null).then(_ => {
      this.navCtrl.pop();
      this.abreToast("Empréstimo concluído.");
    }).catch(err => {
      this.abreToast("Erro ao tentar fechar empréstimo.");
      this.emprestimo.aberta = true;
    });
  }

  private abreToast(text) {
    let toast = this.toastController.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  deletaEmprestimo(emprestimo: Divida) {
    let alert = this.alertController.create({
      title: "Excluir empréstimo",
      message: "Você tem certeza que deseja excluir este empréstimo?"
        + "\n\n" + "Todas as informações serão deletadas.",
      buttons: [{
        text: 'Cancelar',
        handler: () => {
          console.log('Clicou em cancelar');
        }
      },
      {
        text: 'Excluir',
        handler: () => {
          this.emprestimoService.removeEmprestimoFB(emprestimo);
          this.navCtrl.pop();
          this.abreToast("Empréstimo removido.");
        }
      }

      ]
    });
    alert.present();
}

modalAdicionaAcordo() {
  this.navCtrl.push(AdicionaAcordoPage, [this.emprestimo, "emprestimo"]);
}

fecharAcordo(acordo: Acordo) {
  this.acordoService.fechaAcordo(this.emprestimo, acordo, "emprestimo");
}

modalEditaEmprestimo(emprestimo: Divida){
  this.navCtrl.push(EditaEmprestimoPage, emprestimo);
}

getTextoData() {
  var options = { weekday: "long", month: 'long', day: '2-digit' };
  let dataSeparada = this.emprestimo.data.toString().split("-");
  let ano = Number(dataSeparada[0]);
  let mes = Number(dataSeparada[1]) - 1;
  let dia = Number(dataSeparada[2]);
  let dataAjustada = new Date(ano, mes, dia);
  return dataAjustada.toLocaleDateString("pt-br", options);
}

getTextoDataAcordo(dataAcordo) {
  console.log(dataAcordo.toString());
  var options = { weekday: "long", month: 'long', day: '2-digit' };
  let dataSeparada = dataAcordo.toString().split("-");
  console.log(dataSeparada);
  let ano = Number(dataSeparada[0]);
  let mes = Number(dataSeparada[1]) - 1;
  let dia = Number(dataSeparada[2]);
  let dataAjustada = new Date(ano, mes, dia);
  return dataAjustada.toLocaleDateString("pt-br", options);
}


}
