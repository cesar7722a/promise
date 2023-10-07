
let contID = 3;
var resultNome
var resultPassword

const userCadastrados = JSON.parse(localStorage.getItem(`user`)) || [];

function adicionarElemento(){
   contID++;
  let novoNome = document.querySelector(`#inputNome`).value;
  let novoEmali = document.querySelector(`#inputEmail`).value;
  let novaPassword = document.querySelector(`#inputPassword`).value;

 if((novoNome !="" || novoNome.trim()!="") && (novoEmali != "" || novoEmali.trim()!="") && (novaPassword != "" || novaPassword.trim() != "") && resultNome != false && resultPassword != false){
  userCadastrados.push({ nome: novoNome, email:novoEmali, password:novaPassword, id: contID});
  savePrimeiraLetraUserLogado(novoEmali.slice(0,1));
  novaPassword.value = "";
  novoEmali.value  ="";
  novoNome.value = "";
  saveUserCadastrado()
  window.location.replace("pageUserLogado.html");
 }else{
  alert("Dados incorretos!");
 }
};

document.querySelector(`.btn-voltar`).addEventListener(`click`,()=>{
  window.location.replace("index.html");
});

function validarUser(){
  let novoNome = document.querySelector(`#inputNome`).value;
   resultNome = validarNome(novoNome);
  if(resultNome) {
    document.querySelector(`#inputNome`).setAttribute(`class`,`userDadosCorretos`);
  } else {
    document.querySelector(`#inputNome`).setAttribute(`class`,`userDadosErrado`);
  }
}

function validarUserPass(){
  let novaPassword = document.querySelector(`#inputPassword`).value;
   resultPassword = validarPassword(novaPassword)
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

function savePrimeiraLetraUserLogado(priLetra) {
  localStorage.setItem(`userParaLogar`, JSON.stringify(priLetra));
}