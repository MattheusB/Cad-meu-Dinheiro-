// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acordo } from '../../models/acordo';
import { Divida } from '../../models/divida';
import { DividaServiceProvider } from '../divida-service/divida-service';


@Injectable()
export class AcordoServiceProvider {

  constructor(public dividaProvider: DividaServiceProvider) {
    console.log('Hello AcordoServiceProvider Provider');
  }

  public adicionaAcordo(divida: Divida, acordo: Acordo, tipo: string) {
    return new Promise((resolve, reject) => {
      if (divida.acordos) {
        divida.acordos.push(acordo);
        console.log(divida.acordos);
      } else {
        divida.acordos = [acordo];
        console.log(divida.acordos);
      }
      this.dividaProvider.editaDividaEmprestimoFB(divida, acordo, tipo, "adicionou").then(_ => {
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  }

  public fechaAcordo(divida: Divida, acordo: Acordo, tipo: string) {
    return new Promise((resolve, reject) => {
      var index = divida.acordos.indexOf(acordo);
      divida.acordos.splice(index, 1);
      this.dividaProvider.editaDividaEmprestimoFB(divida, acordo, tipo, "fechou").then(_ => {
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  }

  public editaAcordo(divida: Divida, acordo: Acordo, tipo: string) {
    return new Promise((resolve, reject) => {
      var index = divida.acordos.indexOf(acordo);
      divida.acordos[index] = acordo;
      this.dividaProvider.editaDividaEmprestimoFB(divida, acordo, tipo, "editou").then(_ => {
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  }

}

