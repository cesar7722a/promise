// const array=[
//   {nome:"césar0", id:0},
//   {nome:"césar1", id:1,},
//   {nome:"césar2", id:2,},
//   {nome:"césar3", id:3,},
//   {nome:"césar4", id:4,},
//   {nome:"césar5", id:5,},
//   {nome:"césar6", id:6,},
//   {nome:"césar7", id:7,},
//   {nome:"césar8", id:8,}
// ]
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
    array.map((element)=>{
      let li = ce("li");
      let img =ce("img");
      img.setAttribute(`src`,`${element.avatar_url}`)
      let sectionNome = ce("section");
      let sectionId = ce("section");
      sectionNome.innerHTML=`Nome: <h1>${element.login}</h1>`;
      sectionId.innerHTML=`Id: <h1>${element.id}</h1>`
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
    const retorneArray = response.filter((element) => element.nome.toLowerCase().includes(search.toLowerCase()));
    if (search == "") {
        array = response;
    } else {
        array = retorneArray;
    }

  renderElmento()
});
})
.catch(function(error){
  console.log(error)
  let tratarErro = document.querySelector(`.card`);
  tratarErro.innerHTML=`<h1 id ="tratarErro">${error}</h1>`;
})

