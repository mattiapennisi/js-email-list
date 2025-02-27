// Variables

const emailList = document.querySelector('#emailList')
const emailButton = document.querySelector('#emailButton')

fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
    })