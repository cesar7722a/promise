
let contID = 3;

const userCadastrados = JSON.parse(localStorage.getItem(`user`)) || [];

function adicionarElemento(){
   contID++;
  let novoNome = document.querySelector(`#inputNome`).value;
  let novoEmali = document.querySelector(`#inputEmail`).value;
  let novaPassword = document.querySelector(`#inputPassword`).value;
  userCadastrados.push({ nome: novoNome, email:novoEmali, password:novaPassword, id: contID});
  novaPassword.value = "";
  novoEmali.value  ="";
  novoNome.value = "";
  saveUserCadastrado()
  window.location.replace("pageUserLogado.html");
  console.log(userCadastrados)
}

document.querySelector(`.btn-voltar`).addEventListener(`click`,()=>{
  window.location.replace("index.html");
});
function saveUserCadastrado() {
  localStorage.setItem(`user`, JSON.stringify(userCadastrados));
}