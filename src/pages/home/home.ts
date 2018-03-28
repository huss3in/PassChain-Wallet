import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Web3 from 'web3'
import Tx from 'ethereumjs-tx'
declare const Buffer
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  sendSigned(txData, privateKey, web3, cb) {
    console.log('in ggggg')
    privateKey = new Buffer(privateKey, 'hex')
    const transaction = new Tx(txData)
    transaction.sign(privateKey)
    const serializedTx = transaction.serialize().toString('hex')
    web3.eth.sendSignedTransaction('0x' + serializedTx, cb)
  }

  constructor(public navCtrl: NavController) {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/L5M3mbo9rfzND7URRini'));

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
    var addr = "0x0e6b7b7ab6dff469b83fe6a87c857b158b9e2542";

    // Build a new variable based on the web3 API including the ABI and address of the contract
    var EbolaContract = new web3.eth.Contract(abi, addr);

    // Put it all together in a call and return the result to the console
    // FUNCTION can be "getEbola", "getInfo", "tipCreator" and "kill"
    //EbolaContract.methods.getPasses().call().then(console.log);

    // create account
    //let account = web3.eth.accounts.create("mohammed1")
    let account = {
      publicKey: '0xac7198859416d238ee5547a4486712bf6c26bf8b',
      privateKey: 'ED126374E49881BD7FB7BE98A25DA53475C81C56639F0429435EE88F1E58FDAB'
    }

    /* let payloadData = EbolaContract.methods.addPass("0x3132335000000000000000000000000000000000000000000000000000000000",
      "0xe83589c48fb4e2b972921321c25e257ecc32a0b7").encodeABI();
    web3.eth.getTransactionCount(account.publicKey).then(txCount => {
      const txData = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(250000),
        gasPrice: web3.utils.toHex(10e3), // 10 Gwei
        to: addr,
        from: account.publicKey,
        value: '0x00',
        data: payloadData
      }

      // fire away!
      this.sendSigned(txData, account.privateKey, web3, function (err, result) {
        if (err) {
          console.log('***Error ', err)

        }
        else {
          console.log('***Sent', result)

        }
      })
    }) */

    EbolaContract.methods.getPasses().call({from:"0xe83589c48fb4e2b972921321c25e257ecc32a0b7"}).then(function (res) {
      console.log('ressssult')
      console.log(res)
    });
  }
}
