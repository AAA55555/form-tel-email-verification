'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const tel = document.querySelectorAll('#tel'),
    email = document.querySelectorAll('#email');

  tel.forEach(tel => {
    tel.addEventListener('change', () => {
      tel = tel.value;
      if(tel !== '' && tel) {
        console.log('good');
      } else {
        console.log('err');
      }
    })
  })


























})
