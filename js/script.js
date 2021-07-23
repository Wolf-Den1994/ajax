'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

const showUsd = () => {
  const request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass);
  request.open('GET', '/js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  const requestIsReady = () => {
    // след строчка для readystatechange
    // if (request.readyState === 4 && request.status === 200) {
    // след строчка для load 
    if (request.status === 200) {
      // console.log(request.response);
      const data = JSON.parse(request.response)
      // console.log(data.current.usd)
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2)
    } else {
      inputUsd.value = 'Что-то пошло не так'
    }
  }

  // request.addEventListener('readystatechange', requestIsReady)
  request.addEventListener('load', requestIsReady)

  // status, statusText, response, readyState
};

inputRub.addEventListener('input', showUsd);
