import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams , ModalController} from 'ionic-angular';
import {GetChurches} from '../../app/shared/shared';
import { ChurchDetailPage } from '../pages';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  allChurches;
  data;

  constructor(public navCtrl: NavController, public getChurches: GetChurches, public navParams: NavParams, public modalController: ModalController) {
    this.allChurches = this.getChurches.initializeChurches();
    console.log('constructor says these are the churches:', this.allChurches);
  }
  
  updateChurches(ev){
    // Reset items back to all of the items
    this.allChurches = this.getChurches.initializeChurches();

  
    // set val to value of ev target
    var val = ev.target.value;

    //if value is '' then don't filter the items
    if (val && val.trim() != ''){
      this.allChurches = this.allChurches.filter((item) => {
        return (item.church.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  goToCD(val): void {
    console.log('goToCD method called');
    console.log("The church clicked is:", val.church.name);
    this.data = val;
    this.navCtrl.push(ChurchDetailPage,{'data': this.data});

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

    
}
