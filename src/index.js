import './style.css';
import moviesimg from './movies_img.png';
import likeimg from './like_img.png';
import * as api from './home_page/display.js';

// Declare variables

const logo = document.querySelector('header img');
const section = document.querySelector('.moviediv');
const movies = document.querySelector('#movietotal');

// Store movies api

const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';

logo.src = moviesimg;
let imgurl;
let itemscounter;

// Getting data from Api if promise status resolve
const myPromise = new Promise((resolve) => {
  resolve(api.getdata(apiurl));
});

myPromise.then((result) => {
  imgurl = api.getimg(result);
  itemscounter = api.totalitems(result);
  movies.textContent = `Movies(${itemscounter})`;
  imgurl.forEach((element, index) => {
    section.innerHTML += `<div class="item">
        <img class="poster" src="${element}" alt="${result[index].name}">
        <div class="title"><p>${result[index].name}</p>
        <div>
        <img class="like" src="${likeimg}">
        <p class="like-text"> </p>
        </div>
        </div>
       <button><p class="comments" id="commentid" >Comments</p></button>
        <p class="reservations">Reservations</p>  
        </div>`;
  });
});
