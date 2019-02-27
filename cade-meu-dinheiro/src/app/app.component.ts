import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { SobrePage } from '../pages/sobre/sobre';
import { AuthProvider } from '../providers/auth/auth';
import { LoginCadastroPage } from '../pages/login-cadastro/login-cadastro';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { NotificationProvider } from '../providers/notification/notification';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public autenticacao: AuthProvider,
    public notification: NotificationProvider,
    public oneSignal: OneSignal) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Sobre', component: SobrePage }
    ];

    this.platform.ready().then(() => {
      this.autenticacao.retornaUserObservable().subscribe(
        user => {
          if (user) {
            if(this.platform.is("cordova")) {
              this.notification.iniciarOneSignal().then(result => {
                this.autenticacao.salvarOneSignalInfo(result.userId, result.pushToken);
              });
            }  
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginCadastroPage;
          }
        },
        () => {
          this.rootPage = LoginCadastroPage;
        }
       );
        statusBar.backgroundColorByHexString("#006400");
        splashScreen.hide();
    });


  }

  logout() {
    this.autenticacao.logout();
    this.rootPage = LoginCadastroPage;
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
