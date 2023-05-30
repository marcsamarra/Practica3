let url="https://pokeapi.co/api/v2/pokemon";
let json;
const view = document.querySelector('#view')


function nouPokemon()
{
    let idPokemon = getRandomInt(1110);
   
    let urlPokemon = url+"/"+idPokemon;

    fetch(urlPokemon).then(x=>{
        return (x.json())
    }).then(y=> {
        addPokemon(y)
    })
}

function addPokemon(pokemon)
{
	const template = document.querySelector('#card-template').content
	const fragment = document.createDocumentFragment()

	
    template.querySelector('.card-title').innerHTML = pokemon.name
   
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
