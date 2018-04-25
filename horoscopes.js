let btnSubmit = document.querySelector('button');
let userInput = document.querySelector('select');
let linkGet = "https://node-horoscopes.herokuapp.com/api/horoscopes/today/" ;

btnSubmit.addEventListener('click', function() {
  let newInfo = linkGet + userInput.value;
  axios.get(newInfo)
  .then(function (response) {
    console.log(response);
    document.querySelector('.sign').innerText = response.data.sign;
    document.querySelector('.date').innerText = response.data.date;
    document.querySelector('.HInfo').innerHTML = response.data.horoscope;
})
})

let loveLink = 'https://node-horoscopes.herokuapp.com/api/horoscopes/dating/';
let btnSubmit2 = document.querySelector('.secondButton');
let userInput2 = document.querySelector('.select2');
let userInput3 = document.querySelector('.select3');

btnSubmit2.addEventListener('click', function(){
  let newInfo2 = loveLink + userInput2.value + "/" + userInput3.value;
  axios.get(newInfo2).then(function(response){
    console.log(response);
    document.querySelector(".compatible").innerHTML = response.data.text;
  })
})
