import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { HomePage, TabsPage } from '../pages';
import { GetChurches } from '../../app/shared/shared';
import {Stripe} from '@ionic-native/stripe';
import {Http, Headers} from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-give-modal',
  templateUrl: 'give-modal.html'
})
export class GiveModalPage {
  churchGive;
  cardinfo: any = {
    number: '4242424242424242',
    expMonth: '05',
    expYear: '2020',
    cvc:'844'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, 
    public stripe: Stripe, public http: Http) {
    
    this.churchGive = navParams.get('obj');
    console.log('the church data is:', this.churchGive);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoveModalPage');
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
      var headers = new Headers();
      headers.append('Content-type' , 'application/x-www-form-urlencoded');
      this.http.post('https://stark-ravine-41679.herokuapp.com/processpay', data, {headers: headers}).subscribe((res)=>{
        if(res.json().success){
          alert('transaction successful!!');
        }
        else{
          alert('your transaction failed!');
        }
      });
    });
  }
}
