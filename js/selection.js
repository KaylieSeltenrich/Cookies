var selectedPokemon = Cookies.get("Pokemon");
var selection = document.getElementById("pokemonSelection");
selection.innerHTML = selectedPokemon; 

if(selectedPokemon == "Litten"){
pokemonSelection.innerHTML = "<img src='../images/Litten.png' alt='Litten'> <p> You have selected Litten! </p>";
} else if (selectedPokemon == "Popplio"){
    pokemonSelection.innerHTML = "<img src='../images/Popplio.png' alt='Popplio'> <p> You have selected Popplio! </p>";
} else if (selectedPokemon == "Rowlet") {
    pokemonSelection.innerHTML = "<img src='../images/Rowlet.png' alt='Litten'> <p> You have selected Rowlet! </p>"; 
}

function removeCookie() {
    Cookies.remove("Pokemon");
    window.open ("index.html");
}