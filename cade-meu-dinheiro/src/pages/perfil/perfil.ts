import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { EditaPerfilPage } from '../edita-perfil/edita-perfil';
import { Usuario } from '../../models/usuario';
import { DividaServiceProvider } from '../../providers/divida-service/divida-service';
import { LoginCadastroPage } from '../login-cadastro/login-cadastro';
import { Divida } from '../../models/divida';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  public usuario = {} as Usuario;
  fotosrc: string;

  private somaDividas = 0 as number;
  private somaEmprestimos = 0 as number;
  private somaAcordosDividas = 0 as number;
  private somaAcordosEmprestimos = 0 as number;
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    public dividaService: DividaServiceProvider
  ) {
    this.retornaFoto(false);
    authService.getUsuario().subscribe(res =>{
      this.usuario = res as Usuario;
      this.retornaFoto(true);
    });
  }

  ionViewWillEnter() {
    this.authService.getUsername().then(username => {
      this.dividaService.recebeDividasFB(username).valueChanges().subscribe(dividas => {
        
        this.somaDividas = this.calculaSoma(dividas as Divida[], "divida");
      });
      
      this.dividaService.recebeEmprestimosFB(username).valueChanges().subscribe(emprestimos => {
        this.somaEmprestimos = this.calculaSoma(emprestimos as Divida[], "emprestimo");
      });
    });
  }

  calculaSoma(lista: Divida[], tipo: string) {
    var soma = 0.0;
    for(var i = 0; i < lista.length; i++) {
      soma += +lista[i].valor;
      if(lista[i].acordos != null) {
        if(tipo == "divida") {
          this.somaAcordosDividas += +lista[i].acordos.length;
        } else {
          this.somaAcordosEmprestimos += +lista[i].acordos.length;
        }
      }
    }
    return soma;
  }

  retornaFoto(carregado: boolean) {
    if(carregado) {
     this.fotosrc = this.authService.getGravatarUsuario(this.usuario.email, "https://cdn.pbrd.co/images/HwxHoFO.png"); 
     console.log(this.fotosrc);
    } else {
     this.fotosrc = "assets/imgs/user.png";
    }
  }

  editaPerfil(){
    this.navCtrl.push(EditaPerfilPage, this.fotosrc);
  }

  formataValor(valor: number) {
    return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
  }
}
