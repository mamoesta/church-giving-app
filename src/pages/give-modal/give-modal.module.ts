import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiveModalPage } from './give-modal';

@NgModule({
  declarations: [
    GiveModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GiveModalPage),
  ],
})
export class GiveModalPageModule {}
