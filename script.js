/*
**Descrizione**

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const lista = document.getElementById('lista');


function addEmails(){
  let emails = [];
  let counter = 0
  for(let i = 0 ; i < 10 ; i++){
  axios.get(endpoint)
    .then (response=>{
      const email = response.data.response;
      emails.push(email); 
      counter++;
      if(counter === 10){
        addList(emails);
      }
    })
    .catch (err=>{
      console.log(err);   
    })
  }
}


function addList(emails){
  lista.innerHTML = ''
  emails.forEach(email =>{
    const element = document.createElement('li');
    element.textContent = email;
    lista.append(element)
  })
}


addEmails();
