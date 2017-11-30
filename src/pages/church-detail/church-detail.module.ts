import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChurchDetailPage } from './church-detail';

@NgModule({
  declarations: [
    ChurchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChurchDetailPage),
  ],
})
export class ChurchDetailPageModule {}
