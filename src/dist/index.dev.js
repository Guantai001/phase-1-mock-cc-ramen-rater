"use strict";

var ramenMenu = document.querySelector('#ramen-menu'); // load up the dom

document.addEventListener('DOMContentLoaded', function () {
  displayRamen();
}); //fetch ramen data

function displayRamen() {
  fetch('http://localhost:3000/ramens').then(function (res) {
    return res.json();
  }).then(getAllRamen);
}

function getAllRamen(ramenArr) {
  ramenArr.forEach(getRamen);
} //display images to DOM, append images to div


function getRamen(ramenObj) {
  var ramenMenu = document.querySelector('#ramen-menu');
  var ramenImg = document.createElement('img');
  ramenImg.src = ramenObj.image;
  ramenMenu.append(ramenImg); // event listener on click for images

  ramenImg.addEventListener('click', function () {
    var img = document.querySelector('.detail-image');
    img.src = ramenObj.image; // img.alt = ramenObj.name

    var ramenName = document.querySelector('.name');
    ramenName.textContent = ramenObj.name;
    var ramenResta = document.querySelector('.restaurant');
    ramenResta.textContent = ramenObj.restaurant;
    var ratingDisplay = document.querySelector('#rating-display');
    ratingDisplay.innerText = ramenObj.rating;
    var commentDisplay = document.querySelector('#comment-display');
    commentDisplay.innerText = ramenObj.comment;
    createRamenForm();
  });
} //create from


function createRamenForm() {
  var newRamenForm = document.getElementById('new-ramen');
  newRamenForm.addEventListener('submit', function (event) {
    event.preventDefault(); // stop the page from refreshing on form submit
    // create new ramen object

    var newRamenObject = {};
    newRamenObject.name = document.querySelector('#new-name').value;
    newRamenObject.restaurant = document.querySelector('#new-restaurant').value;
    newRamenObject.image = document.querySelector('#new-image').value;
    newRamenObject.rating = document.querySelector('#new-rating').value;
    newRamenObject.comment = document.querySelector('#new-comment').value;
    console.log(newRamenObject); // display new ramen in #ramen-menu (append?)

    var newRamenItem = document.createElement('img');
    newRamenItem.src = newRamenObject.image;
    ramenMenu.append(newRamenItem);
  });
}