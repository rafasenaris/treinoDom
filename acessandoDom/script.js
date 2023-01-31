// acessar por tag

let titulo = document.getElementsByTagName("h1")[0];
console.log(titulo);

let lis = document.getElementsByTagName("li");
console.log(lis[3]);

//id
let paragrafo = document.getElementById("paragrafo");
console.log(paragrafo);

//class
let itensLista = document.getElementsByClassName("item");
console.log(itensLista);

//querySelectorAll
let itensQuerry = document.querySelectorAll('#lista2 li');
console.log(itensQuerry);

let itensQuerry2 = document.querySelectorAll('#lista .item');
console.log(itensQuerry2);

//querySelector
let lista = document.querySelector('#lista');
console.log(lista);