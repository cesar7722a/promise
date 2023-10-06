const array=[
  {nome:"césar0", id:0},
  {nome:"Domingos", id:1,},
  {nome:"André", id:2,},
  {nome:"Pessela", id:3,},
  {nome:"Adão", id:4,},
  {nome:"Francisco", id:5,},
  {nome:"sar6", id:6,},
  {nome:"Telma", id:7,},
  {nome:"Mira", id:8,}
]

document.querySelector(`.nome h1`).innerHTML=array[JSON.parse(localStorage.getItem(`posição`))].nome
document.querySelector(`.email h1`).innerHTML=array[JSON.parse(localStorage.getItem(`posição`))].emmail
document.querySelector(`.password h1`).innerHTML=array[JSON.parse(localStorage.getItem(`posição`))].password
document.querySelector(`.id h1`).innerHTML=array[JSON.parse(localStorage.getItem(`posição`))].id
document.querySelector(`.foto img`).src=array[JSON.parse(localStorage.getItem(`posição`))].image