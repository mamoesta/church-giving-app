import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { HomePage, TabsPage } from '../pages';
import { GetChurches } from '../../app/shared/shared';
import {Stripe} from '@ionic-native/stripe';



@IonicPage()
@Component({
  selector: 'page-give-modal',
  templateUrl: 'give-modal.html'
})
export class GiveModalPage {
  churchGive;
  cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public stripe: Stripe) {
    
    this.churchGive = navParams.get('obj');
    console.log('the church data is:', this.churchGive);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiveModalPage');
  }

  cancelModal(){
    this.viewController.dismiss();
  }
  giveClose(){
    this.navCtrl.setPages([
      {page: TabsPage}
    ]);
  }
  pay(){
    this.stripe.setPublishableKey('pk_test_VCjpSYZvlpb4hCGjLJWERGgH')
    this.stripe.createCardToken(this.cardinfo).then((token) => {
      var data  = 'stripetoken=' + token + '&amount=50';
    })
  }

}