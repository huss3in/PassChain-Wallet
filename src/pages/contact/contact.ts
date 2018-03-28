import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { App,NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public app: App, public storage: Storage) {
    console.log('logout loaded')
    this.storage.set('user', null)
    this.navCtrl.push(SignupPage, {})
    this.app.getRootNav().setRoot(SignupPage);
  }

}
