// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"



function updateCookieCount() {
  if (sessionStorage.savedCookieNumber) {
    // Do nothing
  }
  else {
    sessionStorage.savedCookieNumber = 0
  }
  document.getElementById("answer").innerHTML = 
    "<p>Total amount of cookies: " + sessionStorage.savedCookieNumber + "</p>"
}


function myButtonClicked() {
  sessionStorage.savedCookieNumber = parseInt(sessionStorage.savedCookieNumber) + 1
  document.getElementById("answer").innerHTML = 
    "<p>Total amount of cookies: " + sessionStorage.savedCookieNumber + "</p>"
}
