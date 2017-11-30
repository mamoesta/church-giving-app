import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Tabs, AlertController, ToastController} from 'ionic-angular';
import {  GetChurches, GetFavorites} from "../../app/shared/shared";
import {GiveModalPage, TabsPage, HomePage} from "../pages";
import * as _ from 'lodash';
import { Storage } from '@ionic/storage/dist/src/storage';


@IonicPage()
@Component({
  selector: 'page-church-detail',
  templateUrl: 'church-detail.html',
})
export class ChurchDetailPage {
  transactions;
  data;
  userId;
  churchId;
  isFollowing = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getChurches: GetChurches, public modalCtrl: ModalController, 
    public alertController: AlertController, public toastController: ToastController, public storage: Storage, public getFavorites: GetFavorites ) {
    
    this.data = navParams.get('data');
    console.log('the data is:', this.data);

    this.churchId = this.data.church.id;
    console.log('The id is:', this.churchId);

    //hard-coded in until authentication is set up GREAT PRACTICE I AM GOOD AT PROGRAMMING
    this.userId = 7;

   
    this.getFavorites.isFavorite(this.churchId).then(value => this.isFollowing = value);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChurchDetailPage');
    this.transactions = this.getUserTransactions(this.getChurches.initializeTransactions(),this.userId, this.churchId);
    console.log('the transactions are:', this.transactions);
  }

  getUserTransactions(trans, userId, churchId){
    console.log('getUserTransactions method called');
    //console.log('the userId is:', this.userId);
    //console.log('The transactions to filter are:', trans);
    return _.filter(trans, {'userId':this.userId,'churchId':this.churchId});
  }

  openModal(){
    let obj = this.data;
    let myModal = this.modalCtrl.create(GiveModalPage, {'obj': obj});
    myModal.present();
  }

  goHome(index: number){
    this.navCtrl.pop();
    var t: Tabs = this.navCtrl.parent;
    t.select(index);
  }

  toggleFollow(){
    if(this.isFollowing){
      let confirm = this.alertController.create({
        title: "Unfollow?",
        message: "Are you sure you want to unfollow?",
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.isFollowing=false;
              this.getFavorites.unfavoriteChurch(this.churchId);
              console.log('The church with id #', this.churchId, 'has been removed from favorites');
              let toast = this.toastController.create({
                message: 'You have unfollowed this church',
                duration: 1000,
                position: 'bottom'
              });
              toast.present();
            }
          },
          {text: 'No'}
        ]
      });
      confirm.present();
    } else {
      this.isFollowing = true;
      this.getFavorites.favoriteChurch(this.data.church);
      let toast = this.toastController.create({
        message: 'You are following this church',
        duration: 1000,
        position: 'bottom'
      });
      toast.present();
      console.log('The church with id #', this.churchId, 'has been added to favorites');
    }
  }

}
