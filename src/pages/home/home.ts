import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Web3 from 'web3'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    var web3 = new Web3();
    web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/L5M3mbo9rfzND7URRini'));

    // Define the ABI of the contract, used to return the desired values
    var abi = [
      {
        "constant": false,
        "inputs": [
          {
            "name": "Log",
            "type": "bytes32"
          }
        ],
        "name": "addLogs",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "Pass",
            "type": "bytes32"
          },
          {
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "addPass",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "charge",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getBalance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getLogs",
        "outputs": [
          {
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getPasses",
        "outputs": [
          {
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
    // The Ethereum address of the smart contract
    var addr = "0x7c9efc8913de99800bb649cc094d834537bbbcda";

    // Build a new variable based on the web3 API including the ABI and address of the contract
    var EbolaContract = new web3.eth.Contract(abi, addr);

    // Put it all together in a call and return the result to the console
    // FUNCTION can be "getEbola", "getInfo", "tipCreator" and "kill"
    //EbolaContract.methods.getPasses().call().then(console.log);

    // create account
    let account = web3.eth.accounts.create("mohammed1")
    console.log("kkkkk")
    console.log(account)
    web3.eth.personal.unlockAccount(account.address, account.privateKey)
      .then((response) => {
        console.log('unloc succc')
        console.log(response);
      }).catch((error) => {
        console.log('unlocerrr')
        console.log(error);
      });
    /* EbolaContract.methods.addPass("0x7465737400000000000000000000000000000000000000000000000000000000", "0x6dc868f1cf4f32b10271b167b9a0f399c954c1f1").call().then(console.log);
    EbolaContract.methods.getPasses().call().then(function (res) {
      console.log('ressssult')
      console.log(res)

    }); */
  }
}
