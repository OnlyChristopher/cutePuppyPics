import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FeedPage } from '../feed/feed';
import { NewsPage } from '../news/news';
import { PopularPage } from '../popular/popular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = FeedPage;
  tab5Root: any = NewsPage;
  tab6Root: any = PopularPage;

  constructor(public navCtrl: NavController) {

  }
}
