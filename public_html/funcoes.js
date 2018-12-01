/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

/**
 * Initializes the Functions Web quickstart app.
 */
function Simulador() {
  
  this.firstNumber = document.getElementById('first-number');
  this.secondNumber = document.getElementById('second-number');
  this.addNumbersButton = document.getElementById('send-addition-button');
  this.messageContainer = document.getElementById('message-container');

  // Add Click events to buttons.
 
  this.addGainCalButton.addEventListener('click', this.addGainCal.bind(this));
  // Listen for auth state changes.
  firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
 
}



