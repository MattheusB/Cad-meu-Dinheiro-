import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { DividaServiceProvider } from '../../providers/divida-service/divida-service';
import { Divida } from '../../models/divida';
import { EditaDividaPage } from '../edita-divida/edita-divida';
import { StatusBar } from '@ionic-native/status-bar';
import { AdicionaAcordoPage } from '../adiciona-acordo/adiciona-acordo';
import { Acordo } from '../../models/acordo';
import { AcordoServiceProvider } from '../../providers/acordo-service/acordo-service';
import { EditaAcordoPage } from '../edita-acordo/edita-acordo';

@IonicPage()
@Component({
  selector: 'page-mostra-divida',
  templateUrl: 'mostra-divida.html',
})
export class MostraDividaPage {

  public divida = {} as Divida;
  dividaLocal: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dividaService: DividaServiceProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public acordoService: AcordoServiceProvider
  ) {
    this.divida = this.navParams.data;
    this.dividaLocal = this.divida.usuarioEmprestador == null;
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString("#d30000");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostraDividaPage');
  
  }

  private abreToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  existeAcordo() {
    return this.divida.acordos !== undefined && this.divida.acordos.length > 0;
  }

  editarAcordo(acordo: Acordo){
    this.navCtrl.push(EditaAcordoPage, [this.divida, acordo, "divida"]);
  }  

  fechaDivida(divida: Divida) {
      this.divida.aberta = false;
      this.dividaService.editaDividaEmprestimoFB(this.divida, null, null, null).then(_ => {
        this.navCtrl.pop();
        this.abreToast("Dívida concluída.");
      }).catch(err => {
        this.abreToast("Erro ao tentar fechar dívida.");
        this.divida.aberta = true;
      });
  }

  formataValor(valor: number) {
    return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
  }

  deletaDivida(divida: Divida) {
    let alert = this.alertCtrl.create({
      title: "Excluir dívida",
      message: "Você tem certeza que deseja excluir esta dívida?"
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
          this.apagaDivida(divida);
        }
      }

      ]
    });
    alert.present();
}

apagaDivida(divida: Divida) {
  this.dividaService.removeDividaFB(divida);
  this.navCtrl.pop();
  this.abreToast("Dívida removida.");
}

fecharAcordo(acordo: Acordo) {
  this.acordoService.fechaAcordo(this.divida, acordo, "divida");
}

modalAdicionaAcordo() {
  this.navCtrl.push(AdicionaAcordoPage, [this.divida, "divida"]);
}

modalEditaDivida(divida: Divida){
  this.navCtrl.push(EditaDividaPage, divida);
}

getData(divida: Divida) {
  return divida.data.toLocaleString("pt-BR");
}

getTextoData() {
  console.log(this.divida.data.toString());
  var options = { weekday: "long", month: 'long', day: '2-digit' };
  let dataSeparada = this.divida.data.toString().split("-");
  console.log(dataSeparada);
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
