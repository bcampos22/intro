/*//Definir variable con 'var'. La variable será de ámbito global
var a = 3;
var b = "hola";
var c = 1.5;
//Definir variable con 'let'. La variable será de ámbito de bloque
let d = 3;
let e = "hola";
let f = 1.5;

//Ejemplo de sus diferencias
console.log("***************var*****************");
var musica = "Rock";
console.log("Variable musica antes del bloque",musica);
{
    var musica = "Pop";
    console.log("Variable musica dentro del bloque",musica);
}
console.log("Variable musica despues del bloque",musica);

console.log("***************let*****************");

let musica2 = "Rock";
console.log("Variable musica antes del bloque",musica2);
{
    let musica2 = "Pop";
    console.log("Variable musica dentro del bloque",musica2);
}
console.log("Variable musica despues del bloque",musica2);


function Spotify(){
    // Aquí irá todo lo que quieras que haga la función
}*/

fetch(`https://pokeapi.co/api/v2/pokemon/mudkip`)
.then(res => res.json())
.then(data => {
    let element = document.getElementById('elem');
    let element2 = document.getElementById('elem2');
    element2.innerHTML = `<p>${data.id}) ${data.name}</p> `
    element.innerHTML = `<p><img id=pokemon-image src= ${data.sprites.front_default} alt=pokemon-image /></p> <p>Tipo: ${data.types[0].type.name}</p>`
    console.log(data);
})

/*
var musica = "Rock";
let cancion = "Welcome to the jungle";
console.log(musica);
console.log(cancion); //console.log 1
{
    var musica = "Pop";
    let cancion = "Thriller";
    console.log(musica);
    console.log(cancion);//console.log 2
}
console.log(musica);
console.log(cancion);//console.log 3*/