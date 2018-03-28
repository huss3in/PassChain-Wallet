import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
// import forge from 'node-forge';
import { Storage } from '@ionic/storage';
import wallet from 'ethereumjs-wallet'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage.get('user').then((loggedUser) => {
      console.log('ussss is')
      console.log(loggedUser)
      if (loggedUser != null) {
        this.navCtrl.push(TabsPage, {})
      }
    })
  }
  newUser = {
    username: '',
    password: ''
  }

  logForm() {
    let myWallet = wallet.generate();
    let user = {
      userName: this.newUser.username,
      password: this.newUser.password,
      address: myWallet.getAddressString(),
      publicKey: myWallet.getPublicKeyString(),
      privateKey: myWallet.getPrivateKeyString()
    };
    this.storage.set('user', user)
    this.navCtrl.push(TabsPage, {})
  }
}
