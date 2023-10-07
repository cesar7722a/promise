
const userCadastrados = JSON.parse(localStorage.getItem(`user`)) || [];
let ul = document.querySelector(`ul`);
const ce = (el)=>document.createElement(el);

var minhaPronise = function() {
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();

    xhr.open('get', 'https://api.github.com/users')
    xhr.send(null)
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){ 
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))     
         } else {
        reject(`Dados Não Encontrados!`)
     }
    }
    }
   })  
}

function Cancel() {
  document.querySelector('.modal').style.opacity = 1;
  setTimeout(() => {
    document.querySelector(`.modal`).style.display = "none";
    document.querySelector('.modal').style.opacity = 0;
  }, 200);
  document.querySelector(`#inputEmail`).value = "";
  document.querySelector(`#inputPassword`).value = "";
};
function savePrimeiraLetraUserLogado(priLetra) {
  localStorage.setItem(`letra`, JSON.stringify(priLetra));
}
   
function criarConta () {
  window.location.replace("pageCriarConta.html");
}


 minhaPronise()
 .then(function(response){
  
  let array= response;
   console.log(array)
   
   function renderElmento(){
     ul.innerHTML=""
     array.map((element)=>{
     
   
       let li = ce("li");
       let img =ce("img");
       img.setAttribute(`src`,`${element.avatar_url}`)
       let sectionNome = ce("section");
       let sectionId = ce("section");
       sectionNome.innerHTML=`Nome: <h1>${element.login}</h1>`;
       sectionId.innerHTML=`Id: <h1>${element.id}</h1>`
   
       li.addEventListener(`click`, ()=>{
         mostraMoodal ();
       })
       li.appendChild(img)
       li.appendChild(sectionId)
       li.appendChild(sectionNome);
       ul.appendChild(li)
     });
   }
   renderElmento();
   
     /*area pesquisa*/
     inputPesquisa.addEventListener(`keyup`, (event) => {
       const search = event.target.value;
       const retorneArray = response.filter((element) => element.login.toLowerCase().includes(search.toLowerCase()));
       if (search == "" || search.trim()=="") {
           array = response;
       } else {
           array = retorneArray;
         //  let tratarErro = document.querySelector(`.card`);
         //  tratarErro.innerHTML=`<h1 id ="tratarErro">Nome Não Encontrado!</h1>`;
       }
   
     renderElmento();
   });
   
   // Modal
   
   function mostraMoodal () {
     document.querySelector('.modal').style.opacity = 0;
     document.querySelector(`.modal`).style.display = "flex";
     setTimeout(() => {
       document.querySelector('.modal').style.opacity = 1;
     }, 200);
   }

   document.querySelector(`.btn-sign-up`).addEventListener(`click`,()=>{
     let valorEmali =  document.querySelector(`#inputEmail`).value;
     let valorPassword = document.querySelector(`#inputPassword`).value;
   
     let verifacar_Emai_Existencia = userCadastrados.findIndex((item) => item.email == valorEmali);
     let verifacar_password_Existencia = userCadastrados.findIndex((item)=> item.password == valorPassword)
       if(verifacar_Emai_Existencia > 0 && verifacar_password_Existencia > 0 ){
         window.location.replace("pageUserLogado.html");
       }else{
         alert("Dados incorretos");
       }
   });

})
.catch(function(error){
  let tratarErro = document.querySelector(`.card`);
  tratarErro.innerHTML=`<h1 id ="tratarErro">${error}</h1>`;
})

