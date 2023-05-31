let url="https://pokeapi.co/api/v2/pokemon";
let json;
const view = document.querySelector('#view')
const detail = document.querySelector('#detail')
const cards = document.querySelector('#cards')

function nouPokemon()
{
    let idPokemon = getRandomInt(1000); /*1110*/
   
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
    template.querySelector('.card-image').setAttribute('src', pokemon.sprites.front_default)
    let fnboto = 'mostrarDetalls('+pokemon.id+')'

    template.querySelector('.card-button').setAttribute('onclick', fnboto)
   
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
        view.innerHTML = '';
        nouPokemon();
    }

}

function mostrarDetalls(idPokemon)
{
    detail.style.display="flex";
    cards.style.display="none";

    let urlPokemon = url+"/"+idPokemon;

    fetch(urlPokemon).then(x=>{
        return (x.json())
    }).then(y=> {
        document.querySelector('#nomPokemon').innerHTML = y.name
        document.querySelector('#imgPokemon').setAttribute('src', y.sprites.front_default)
        document.querySelector('#imgPokemon2').setAttribute('src', y.sprites.back_default)
        document.querySelector('#atacPokemon').innerHTML = y.stats[1].base_stat
        document.querySelector('#defensaPokemon').innerHTML = y.stats[2].base_stat
    })


}

function mostrarLlista()
{
    detail.style.display="none";
    cards.style.display="flex";
}
