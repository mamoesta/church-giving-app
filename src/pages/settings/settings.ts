import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navpParams: NavParams, private platform: Platform,
  private alertController: AlertController) {

  }

  showPlatform(){
    let text = 'I run on' + this.platform.platforms();
    let alert = this.alertController.create({
      title: 'My Home',
      subTitle: 'text',
      buttons: ['Ok']
    });
    alert.present();
  }


}
