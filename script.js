let url="https://pokeapi.co/api/v2/pokemon";
let json;
let llistaPokemons = await getPokemons();


function getJson()
{
    fetch(json)
    .then(x=> {console.dir(x);
    return x.json}).
    then(y=> {
        console.dir(y);
        document.getElementById("").innerHTML=y.nom;
    })
}

function fecthPockemonByNumber(numero)
{
    let urlPokemon = url+"/"+numero;

    fetch(urlPokemon).then(X=>{
        console.dir(x);
        return x.json();
    }).then(y=>{
        console.dir(y);
        document.getElementById("nom").innerHTML=y.name;
    })

}


function NouPokemon()
{
    let idPokemon = getRandomInt(1110);
    let pokemon = fecthPockemonByNumber(idPokemon);
    addPokemon(pokemon);

}

function addPokemon(pokemon)
{
	const template = document.querySelector('#card-template').content
	const fragment = document.createDocumentFragment()

	
		template.querySelector('.card-title').innerHTML = gif.title
		template.querySelector('.card-image').setAttribute('src', gif.url)
		template.querySelector('.card-image').setAttribute('alt', gif.title)
		const clone = template.cloneNode(true)
		fragment.appendChild(clone)
	

	view.appendChild(fragment)
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function obtenirPokemons()
{
    for (let i=0;i<10;i++)
    {
        let num= Math.random() * 100;
    }

}
