import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams, ModalController, AlertController, Platform} from 'ionic-angular';
import { GiveModalPage} from '../pages';
import {GetFavorites} from '../../app/shared/shared';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  favArray;
  myChurches;
  
  hardcodedChurches = [
   {
     church: {id:1, name: 'CityLight Church', address: '123 Main Avenue', pastor: 'Tim Smith', 
     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV"}
    },
    {
     church: {id:'apartment',name:'Christ Presbyterian Church', address: '161 Leverington Avenue', pastor: 'Craig Luekens',
     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV"}
     }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, 
    public getFavorites: GetFavorites, public storage:Storage, private alertController: AlertController,
  private platform: Platform) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter HomePage');
    this.myChurches = this.getFavorites.getFavoriteChurches()
    this.favArray = this.getFavorites.getAllFavorites();
    //var testMyChurches = myChurches[0];
    console.log('myChurches are:', this.myChurches);
    console.log('hardcoded churches are:', this.hardcodedChurches)
  }

    
  openModal(item){
    let myModal = this.modalController.create(GiveModalPage,{'obj': item})
    myModal.present();
  }

  unfollowFromHome(churchId){
    this.getFavorites.unfavoriteChurch(churchId);
    this.ionViewWillEnter();
  }

  areFavorites(){
    if(this.storage.keys){
      return true;
    }else{
      return false;
    }
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
