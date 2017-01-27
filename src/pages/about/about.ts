import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user: any;
  userReady: boolean = false;

  constructor(public navCtrl: NavController) { }

  ionViewCanEnter(){
    let env = this;
    NativeStorage.getItem('user')
        .then(function (data){
          env.user = {
            name: data.name,
            gender: data.gender,
            picture: data.picture
          };
          env.userReady = true;
        }, function(error){
          console.log(error);
        });
  }

  doFbLogout(){
    var nav = this.navCtrl;
    Facebook.logout()
        .then(function(response) {
          //user logged out so we will remove him from the NativeStorage
          NativeStorage.remove('user');
          nav.push(HomePage);
        }, function(error){
          console.log(error);
        });
  }
}
