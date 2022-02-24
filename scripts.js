var quantidade = document.getElementById('quantidade')
quantidade.addEventListener('keyup', ()=>{
    pegarPokemons(quantidade.value)
})



pegarPokemons(2)

function pegarPokemons(quantidade){
fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
.then(response => response.json())
.then(allpokemon => {

    var pokemons = [];

    allpokemon.results.map((val) => {

    fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push({ 
                nome: val.name,
                imagem: pokemonSingle.sprites.front_default
            });

            if(pokemons.length == quantidade){

                var pokemonBoxes = document.querySelector('.pokemon-boxes')
                pokemonBoxes.innerHTML = "";

                pokemons.map((val)=>{
                    pokemonBoxes.innerHTML+=`
                    <div class="pokemon-box">
                        <img src="`+val.imagem+`">
                        <p>`+val.nome+`</p>
                    </div><!--pokemon-box-->
            `
                })
                
            }
        })


    })

    pokemons.map((val) => {
        console.log(val.nome)
    })

})

}

