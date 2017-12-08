import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage,HomePage,TabsPage,SearchPage, ChurchDetailPage, GiveModalPage } from '../pages/pages';
import { GetChurches, GetFavorites } from './shared/shared';
import {IonicStorageModule} from '@ionic/storage';
import {Stripe} from '@ionic-native/stripe';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SettingsPage,
    HomePage,
    ChurchDetailPage,
    TabsPage,
    GiveModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SettingsPage,
    HomePage,
    ChurchDetailPage,
    TabsPage,
    GiveModalPage
  ],
  providers: [
    GetChurches,
    GetFavorites,
    StatusBar,
    SplashScreen,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
