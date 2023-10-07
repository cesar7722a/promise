
document.querySelector(`button`).addEventListener(`click`, ()=>{
  window.location.replace(`pageUserLogado.html`)
})
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
  document.querySelector(`.nome h1`).innerHTML=response[JSON.parse(localStorage.getItem(`posElementoGit`))].login
  document.querySelector(`.site_admin h1`).innerHTML=response[JSON.parse(localStorage.getItem(`posElementoGit`))].site_admin;
  document.querySelector(`.node_id h1`).innerHTML=response[JSON.parse(localStorage.getItem(`posElementoGit`))].node_id;
  document.querySelector(`.id h1`).innerHTML=response[JSON.parse(localStorage.getItem(`posElementoGit`))].id
  document.querySelector(`.foto img`).src=response[JSON.parse(localStorage.getItem(`posElementoGit`))].avatar_url
})
.catch(function(error){
  let tratarErro = document.querySelector(`.card`);
  tratarErro.innerHTML=`<h1 id ="tratarErro">${error}</h1>`;
});
