import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Divida } from '../../models/divida';
import { DividaServiceProvider } from '../../providers/divida-service/divida-service';
import { AdicionaDividaPage } from '../adiciona-divida/adiciona-divida';
import { AdicionaEmprestimoPage } from '../adiciona-emprestimo/adiciona-emprestimo';
import { MostraDividaPage } from '../mostra-divida/mostra-divida';
import { MostraEmprestimoPage } from '../mostra-emprestimo/mostra-emprestimo';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../../providers/auth/auth'
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('fab') fab;

  public dividas: Divida[] = [];
  public emprestimos: Divida[] = [];

  constructor(public navCtrl: NavController, 
    public authProvider: AuthProvider,
    public statusBar: StatusBar,
    public dividaService: DividaServiceProvider,
  ) {
    this.authProvider.getUsername().then(username => {
      this.dividaService.recebeDividasFB(username).valueChanges().subscribe(dividas => {
        console.log(dividas);
        this.dividas = this.filtraAbertos(dividas as Divida[]);
      });
      
      this.dividaService.recebeEmprestimosFB(username).valueChanges().subscribe(emprestimos => {
        console.log(emprestimos);
        this.emprestimos = this.filtraAbertos(emprestimos as Divida[]);
      });
    })

  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString("#006400");
  }

  retornaFoto(tipo, divida_emprestimo: Divida) {
    console.log("entrei");
    console.log(divida_emprestimo);
    if(tipo == "divida") {
      if(divida_emprestimo.emailUsuarioEmprestador == null) {
        return "https://cdn.pbrd.co/images/HwxEQ8k.png";
      }
      return this.authProvider.getGravatarUsuario(divida_emprestimo.emailUsuarioEmprestador, "https://cdn.pbrd.co/images/HwxEQ8k.png");
    } else {
      if(divida_emprestimo.emailUsuarioDevedor == null) {
        return "https://cdn.pbrd.co/images/HwxHdA7.png";
      }
      return this.authProvider.getGravatarUsuario(divida_emprestimo.emailUsuarioDevedor, "https://cdn.pbrd.co/images/HwxHdA7.png");
    }
  }

  public retornaSoma(lista) {
    var soma = 0.0;
    for(var i = 0; i < lista.length; i++) {
      soma += +lista[i].valor;
    }
    return this.formataValor(soma);
  }

  filtraAbertos(lista) {
    return lista.filter(x => x.aberta == true);
  }

  formataValor(valor: number) {
    return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
  }


//Dividas
  modalAdicionaDivida() {
    this.navCtrl.push(AdicionaDividaPage);
    this.fab.close();
  }

  modalMostraDivida(divida: Divida){
    this.navCtrl.push(MostraDividaPage, divida);
  }
  
  existeDivida() {
    return this.dividas.length > 0;
  }

//Empréstimos
  modalAdicionaEmprestimo(){
    this.navCtrl.push(AdicionaEmprestimoPage);
    this.fab.close();
  }

  existeEmprestimo() {
    return this.emprestimos.length > 0;
  }

  modalMostraEmprestimo(emprestimo: Divida){
    this.navCtrl.push(MostraEmprestimoPage, emprestimo);
  }

}
