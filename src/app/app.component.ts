import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{GetChurches, GetFavorites} from '../app/shared/shared';
import { TabsPage,SearchPage, HomePage, SettingsPage} from '../pages/pages';
import { Stripe } from "@ionic-native/stripe";

@Component({
  templateUrl: 'app.html',
  providers: [
    GetChurches,
    GetFavorites
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
