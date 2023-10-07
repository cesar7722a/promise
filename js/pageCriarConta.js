
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

function validarUser(){
  let novoNome = document.querySelector(`#inputNome`).value;
  var resultNome = validarNome(novoNome);
  if(resultNome) {
    document.querySelector(`#inputNome`).setAttribute(`class`,`userDadosCorretos`);
  } else {
    document.querySelector(`#inputNome`).setAttribute(`class`,`userDadosErrado`);
  }
}

function validarUserPass(){
  let novaPassword = document.querySelector(`#inputPassword`).value;
  var resultPassword = validarPassword(novaPassword)
   if(resultPassword) {
    document.querySelector(`#inputPassword`).setAttribute(`class`,`userDadosCorretos`);                    
   } else{
    document.querySelector(`#inputPassword`).setAttribute(`class`,`userDadosErrado`);
   }
}

function validarNome(nome){
return /^[a-zA-Z]{5,}$/.test(nome);
}
function validarPassword(password){
  return /^[a-zA-Z0-9]{6,}$/.test(password);
}

function saveUserCadastrado() {
  localStorage.setItem(`user`, JSON.stringify(userCadastrados));
}