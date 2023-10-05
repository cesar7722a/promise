
let contID = 3;
const userCadastrados = [
  {nome:"Franciso", email:"francisco@gmail.com",password:"123fra" , id:0},
  {nome:"Ana", email:"ana@gmail.com",password:"123ana", id:1},
  {nome:"Pedro", email:"pedro@gmail.com",password:"123ped", id:2 },
  {nome:"Petra", email:"petra@gmail.com",password:"123pet", id:3}
]

function adicionarElemento(){
  let novoNome = document.querySelector(`#inputNome`).value;
  let novoEmali = document.querySelector(`#inputEmail`).value;
  let novaPassword = document.querySelector(`#inputPassword`).value;
  userCadastrados.push({ nome: novoNome, email:novoEmali, password:novaPassword, id: (contID++)});
  novaPassword.value = "";
  novoEmali.value  ="";
  novoNome.value = "";
  saveUserCadastrado()
  console.log(userCadastrados)
}

document.querySelector(`.btn-voltar`).addEventListener(`click`,()=>{
  window.location.replace("index.html");
});

function saveUserCadastrado() {
  localStorage.setItem(`user`, JSON.stringify(userCadastrados));
}