import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import forge from 'node-forge';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }
  newUser = {}

  generateKePair() {
    var promise = new Promise((resolve, reject) => {
      let rsa = forge.pki.rsa;
      rsa.generateKeyPair({ bits: 2048, workers: 2 }, function (err, keypair) {
        // keypair.privateKey, keypair.publicKey
        resolve({
          publicKey: forge.pki.publicKeyToPem(keypair.publicKey),
          privateKey: forge.pki.privateKeyToPem(keypair.privateKey)
        })
      });
    });
    return promise
  }

  logForm() {
    console.log(this.newUser);
    console.log(this.storage)
    this.generateKePair().then((keyPair)=>{
      console.log(keyPair)
      this.storage.set('publicKey', keyPair.publicKey);
      this.storage.set('privateKey', keyPair.privateKey);
      this.storage.get('publicKey').then((val) => {
        console.log('Your age is', val);
      });
    })
    

    
  }
}
