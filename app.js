let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1;

    let requesting = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data = await fetch(requesting);

    let response = await data.json();
    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}` ;
    pokeName.textContent = response.name;

};
changePokemon();
button.addEventListener("click", changePokemon);