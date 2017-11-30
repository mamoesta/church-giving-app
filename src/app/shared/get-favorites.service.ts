import { Injectable } from "@angular/core";
import {Storage} from '@ionic/storage';
import * as _ from 'lodash';
import { Events } from "ionic-angular/util/events";

@Injectable()
export class GetFavorites{
    favorites;
    favChurches;
    item;

    constructor(public storage: Storage, private events: Events){

    }


    getAllFavorites(){
        console.log('getAllFavorites method called');
        let favorites = [];
        this.storage.forEach((value,key,index)  => {
            favorites.push(key);
        });
        //console.log('the keys in storage are:',favorites);
        return favorites;
    }

    isFavorite(churchId){
        return this.storage.get(churchId.toString());
    }

    getFavoriteChurches(){
        let favChurches= [];
        console.log('getFavoriteChurches method called');
        this.storage.forEach((value,key,index) => {
            favChurches.push(value);
        });
        console.log('The data for the favorite churches are:', favChurches);
        return favChurches;
    }
    
    favoriteChurch(church){
        let item = {church: church};
        this.storage.set(church.id, item);
        this.events.publish('favorites:changed');
    }

    unfavoriteChurch(churchId){
        this.storage.remove(churchId);
        this.events.publish('favorites:changed');
    }

    placeholderMethod(){
  
    }

}