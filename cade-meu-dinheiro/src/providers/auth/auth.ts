import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import md5 from 'crypto-md5';

import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../models/usuario'
import { NotificationProvider } from '../notification/notification';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private firebaseUser: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private user = {} as Usuario;
  private usuarioLogado: Usuario;

  constructor(private firebaseAuth: AngularFireAuth, 
    public notification: NotificationProvider, 
    public db: AngularFireDatabase) {
    this.firebaseUser = this.firebaseAuth.authState;
    this.firebaseUser.subscribe(
      (firebaseUser) => {
        if (firebaseUser) {
          this.userDetails = firebaseUser;
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  carregaUsuario() {
    return new Promise((resolve, reject) => {
      this.getUsuario().subscribe(usuario => {
        console.log("carreguei")
        this.usuarioLogado = usuario as Usuario;
        resolve();
      });
    });
  }

  getUserRef() {
    return "user-list/" + this.getUID();    
  }

  public getUsuarioObject(username) {
    return this.db.list('/user-list/', ref => ref.orderByChild('username').equalTo(username));
  }

  public getUsuarioRef(username) {
    return new Promise((resolve, reject) => {
      this.db.list("user-list/").valueChanges().subscribe(users => {
        const usuario = Object.keys(users).reduce((acum, key) => {
          const user = users[key] as Usuario;
          if (user.username === username) {
            return user;
          }
          return acum;
        }, null);
        
        if (usuario != null) {
          console.log("Existe")
          console.log(usuario);
          resolve(usuario);
        } else {
          reject(null);
        }
      });
    });
  }

  registrar(email: string, senha: string, username: string, nome: string) {
    this.user = this.mountUserObject(nome, username, email);
    let promise = new Promise((resolve, reject) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, senha).then(result => {
        return this.db.object("user-list/" + result.user.uid).set(this.user).then(result => {
          resolve();
        });          
      }).catch(error => {
        reject(this.getErroRegistro(error));
      });
    });
    return promise;
  }

  login (email: string, senha: string) {
  	let promise = new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, senha).then(result => {
        this.notification.iniciarOneSignal().then(result => {
          this.salvarOneSignalInfo(result.userId, result.pushToken);
        });
        resolve(result);
      }).catch(error => {
        reject(this.getErroRegistro(error));
      })
    })
    return promise;
  }

  logout () {
    this.salvarOneSignalInfo(null, null);
  	this.firebaseAuth
  	  .auth
  	  .signOut();
  }
  
  public getUID() {
    if(this.userDetails != null) {
      return this.userDetails.uid;
    } else {
      return null;
    }
  }

  public getUsername() {
    return this.carregaUsuario().then(result => {
      return this.usuarioLogado.username;
    });
  }

  public getUsuario() {
    return this.db.object(this.getUserRef()).valueChanges();
  }

  public existeUsuario(username) {
    // fazer um metodo que retorne true se o username existe no BD e false se nao existe.
    return true;
  }

  salvarNomeUsuario(nome: string) {
    return this.db.object(this.getUserRef()).update({ nome: nome});
  }

  salvarFoto(url) {
    let promise = new Promise((resolve, reject) => {
      return firebase.storage().ref(url).getDownloadURL()
      .then(result => {
        this.db.object(this.getUserRef()).update({ fotosrc: result}).then(result => {
          resolve();
        }).catch(error => {
          reject(this.getErroRegistro(error));
        });
      });
    });
    return promise;
  }

  retornaLinkFoto() {
    firebase.storage().ref("fotosUsuarios/" + this.getUID() + ".jpg").getDownloadURL();
  }

  public retornaUserObservable() {
    return this.firebaseUser;
  }

  public getGravatarUsuario(email, imagem) {
    console.log("https://www.gravatar.com/avatar/" + md5(email.toLowerCase(), 'hex') + "?d=" + encodeURI(imagem));
    return "https://www.gravatar.com/avatar/" + md5(email.toLowerCase(), 'hex') + "?d=" + encodeURI(imagem);
  }

  resetarSenha(email: string) {
    let promise = new Promise((resolve, reject) => {
      this.firebaseAuth.auth.sendPasswordResetEmail(email).then(result => {
        resolve();
      }).catch(error => {
        reject(this.getErroRegistro(error));
      })
    })
    return promise;
  } 

  excluiFoto() {
    return this.db.object(this.getUserRef()).update({ fotosrc: null});
  }

  public salvarOneSignalInfo(oneSignalId: string, deviceId: string) {
    return this.db.object(this.getUserRef()).update({ userId: oneSignalId, deviceId: deviceId});
  }



  mountUserObject (nome: string, username: string, email: string) {
    let userInstance = {} as Usuario;
    userInstance.username = username
    userInstance.email = email
    userInstance.nome = nome
    return userInstance
  }

  private getErroRegistro(error) {
    console.log(error);
    switch (error.code) {
      case "auth/email-already-in-use": {
        return "E-mail já foi cadastrado.";
      }
      case "auth/invalid-email": {
        return "E-mail inválido.";
      }
      case "auth/wrong-password": {
        return "Senha incorreta.";
      }
      case "auth/user-not-found": {
        return "E-mail não cadastrado.";
      }
      case "auth/invalid-password": {
        return "Senha inválida.";
      }
      case "auth/weak-password": {
        return "A senha deve ter no mínimo 6 caracteres.";
      }
      case "auth/network-request-failed": {
        return "Sem conexão."
      }
      default: {
        return error;
      }
    }
  }

}
