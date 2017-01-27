import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import {NativeStorage} from 'ionic-native'
import { StatusBar, Splashscreen } from 'ionic-native';
import { FeedService } from './services/feed.service';
import { Helper } from './services/helper.service'
import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home";


@Component({
  templateUrl: 'app.html',
  providers: [FeedService, Helper]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;
  tags: Array<{ title: string }>;

  constructor(platform: Platform) {
    this.tags = [
      { title: 'javascript' },
      { title: 'php' },
      { title: 'angularjs' },
      { title: 'reactjs' },
      { title: 'HTML5' },
      { title: 'JSON'},
      { title: 'jQuery'},
      { title: 'CSS3'},
      {title: 'Facebook'}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let env = this;
      NativeStorage.getItem('user')
          .then( function (data) {
            // user is previously logged and we have his data
            // we will let him access the app
            env.nav.push(HomePage);
            Splashscreen.hide();
          }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.nav.push(HomePage);
            Splashscreen.hide();
          });

      StatusBar.styleDefault();
    });
  }

  getTagData(tag) {
    localStorage.setItem('tag',tag);
    this.nav.setRoot(TabsPage,{tag: tag});

  }



}