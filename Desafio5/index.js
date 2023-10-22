
const colors = ['Orange', 'Yellow', 'Green', 'Red', 'Black', 'Purple', 'Blue', 'White' ]
const btn = document.getElementById('btn');
const nameColor = document.querySelector('.color');

function clickButton(){
  const randomColor = getRandomColor();
  document.body.style.background = colors[randomColor]; //Muda cor do background
  nameColor.textContent = colors[randomColor]; // Insere o nome da cor 
}

function getRandomColor(){
  return Math.floor(Math.random() * colors.length);
}