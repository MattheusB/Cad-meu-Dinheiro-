import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FIREBASE_CONFIG } from './firebase.credentials';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { SobrePage } from '../pages/sobre/sobre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DividaServiceProvider } from '../providers/divida-service/divida-service';
import { AdicionaDividaPageModule } from '../pages/adiciona-divida/adiciona-divida.module';
import { AdicionaEmprestimoPageModule } from '../pages/adiciona-emprestimo/adiciona-emprestimo.module';
import { MostraDividaPageModule } from '../pages/mostra-divida/mostra-divida.module';
import { MostraEmprestimoPageModule } from '../pages/mostra-emprestimo/mostra-emprestimo.module';
import { EditaDividaPageModule } from '../pages/edita-divida/edita-divida.module';
import { EditaEmprestimoPageModule } from '../pages/edita-emprestimo/edita-emprestimo.module';
import { AuthProvider } from '../providers/auth/auth';
import { LoginCadastroPageModule } from '../pages/login-cadastro/login-cadastro.module';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { EditaPerfilPageModule } from '../pages/edita-perfil/edita-perfil.module';
import { OneSignal } from '@ionic-native/onesignal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdicionaAcordoPageModule } from '../pages/adiciona-acordo/adiciona-acordo.module';
import { AcordoServiceProvider } from '../providers/acordo-service/acordo-service';
import { EditaAcordoPageModule } from '../pages/edita-acordo/edita-acordo.module';
import { NotificationProvider } from '../providers/notification/notification';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    SobrePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AdicionaDividaPageModule,
    AdicionaEmprestimoPageModule,
    MostraDividaPageModule,
    MostraEmprestimoPageModule,
    EditaDividaPageModule,
    EditaEmprestimoPageModule,
    LoginCadastroPageModule,
    EditaPerfilPageModule,
    AngularFireAuthModule,
    AdicionaAcordoPageModule,
    EditaAcordoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File, 
    HttpClient,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DividaServiceProvider,
    AuthProvider,
    OneSignal,
    AlertController,
    AcordoServiceProvider,
    NotificationProvider,
  ]
})
export class AppModule {}
