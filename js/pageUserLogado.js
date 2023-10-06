
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

minhaPronise()
.then(function(response){

  let array= response;
  console.log(array)

function renderElmento(){
  ul.innerHTML=""
   array.map((element)=>{

    var posicao = array.indexOf(element);
    let li = ce("li");
    let img =ce("img");
    img.setAttribute(`src`,`${element.avatar_url}`)
    let sectionNome = ce("section");
    let sectionId = ce("section");
    sectionNome.innerHTML=`Nome: <h1>${element.login}</h1>`;
    sectionId.innerHTML=`Id: <h1>${element.id}</h1>`

    li.addEventListener(`click`, ()=>{
      savePosicao(posicao);
      window.location.replace(`perfilUser.html`)
    });
    li.appendChild(img)
    li.appendChild(sectionId)
    li.appendChild(sectionNome);
    ul.appendChild(li)
  });
}
renderElmento()

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

  renderElmento()
});

 })

.catch(function(error){
  console.log(error)
  let tratarErro = document.querySelector(`.card`);
  tratarErro.innerHTML=`<h1 id ="tratarErro">${error}</h1>`;
})

function savePosicao(posicao) {
  localStorage.setItem(`posElementoGit`, JSON.stringify(posicao));
}
