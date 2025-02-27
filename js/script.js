// Variables

const emailList = document.querySelector('#emailList')
const emailButton = document.querySelector('#emailButton')
let randomEmailValue = null

for (let i = 0; i < 10; i++) {
    
}
fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
        randomEmailValue = data.response
    })