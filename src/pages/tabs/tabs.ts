import { Component, ViewChild } from '@angular/core';

import { HomePage,SearchPage,SettingsPage } from '../../pages/pages'
import { Nav } from 'ionic-angular';
import { GetChurches } from '../../app/shared/shared';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabToShow : number = 1;
  
  @ViewChild(Nav) nav: Nav;
  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = SettingsPage;

  

  constructor() {
  }
}
