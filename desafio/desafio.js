import { pokemons } from "./pokemons.js";

//console.log(pokemons)


const returnByName = (name) =>{
   return pokemons.find(pokemonName => pokemonName.name == name);
}

//console.log(returnByName("venusaur"))


const returnByType = (type) =>{
    return pokemons.filter((pokemon) => pokemon.type.includes(type));
}

//console.log(returnByType("fire"))

const getAlltypes = () => {
    const allTypes=[];
pokemons.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
        if(!allTypes.includes(type)){
            allTypes.push(type);
        }
    })
})  
return allTypes
}
//console.log(getAlltypes())


const typesArray = {
    grass: "Grama",
    poison: "Venenoso",
    fire: "Fogo",     
    flying: "Voador",
    water: "Água",    
    bug: "Inseto",
    normal: "Normal",   
    electric: "Elétrico",
    ground: "Terra",   
    fairy: "Fada",
    fighting: "Lutador", 
    psychic: "Psiquico",
    rock: "Pedra",     
    steel: "Aço",
    ice: "Gelo",      
    ghost:"Fantasma"
}


const translatePokemons = () =>
    pokemons.map((pokemon) => ({
       ...pokemon,
       type: (pokemon.type = pokemon.type.map((type)=> typesArray[type])) 
    }))


console.log(translatePokemons());