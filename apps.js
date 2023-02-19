const nombrePokemon = document.getElementById('nombrePokemon')
const tipo = document.getElementById('tipo')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const debilidad = document.getElementById('debilidad')
const busquedaNombre = document.getElementById('busquedaNombre')
const btnNombre = document.getElementById('btnNombre')
const imagenPokemon = document.getElementById('imagenPokemon')
const habilidad = document.getElementById('habilidad')
const numeroPokemon = document.getElementById('numeroPokemon')
const busquedaTipo = document.getElementById('busquedaTipo')
const btnTipo = document.getElementById('btnTipo')

btnNombre.addEventListener("click", (e) => {
  e.preventDefault()
  let busqueda = busquedaNombre.value
  infoPokedexNombreOId(busqueda)
})

const favoritos = []

function infoPokedexNombreOId(parametro) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${parametro}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(pokemon => {
      nombrePokemon.innerText = pokemon.name;
      tipo.innerText = pokemon.types[0].type.name;
      altura.innerText = pokemon.height;
      peso.innerText = pokemon.weight;
      habilidad.innerText = pokemon.abilities[0].ability.name;
      imagenPokemon.src = pokemon.sprites.front_default;
      numeroPokemon.innerText = pokemon.id;

      const botonFavoritos = document.createElement("button");
      botonFavoritos.id = "favs";
      botonFavoritos.type = "button";
      botonFavoritos.innerText = "Agregar a Favoritos";

      const pokedexContainer = document.getElementById("infoPokedex");
      const oldButton = document.getElementById("favs");
      if (oldButton) {
        pokedexContainer.replaceChild(botonFavoritos, oldButton);
      } else {
        pokedexContainer.appendChild(botonFavoritos);
      }


      botonFavoritos.addEventListener("click", function () {
        favoritos.push(pokemon);
        console.log("El pokemon ha sido agregado a favoritos:", pokemon);
        Swal.fire({
          icon: 'success',
          title: '¡Agregado a Favoritos!',
          text: `Has agregado a ${pokemon.name} a tus favoritos.`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      });

      const container = document.getElementById("infoPokedex");
      container.appendChild(botonFavoritos);
      console.log(favoritos)

    })
}



const container = document.getElementById("cardContainer");
const generateCard = (pokemon) => {
  return `
    <div class="col-12 m-5 col-md-6 col-lg-2 ">
      <div class="card text-center">
        <a href=""><img src="${pokemon.sprites.front_default}" class="card-img-top fotoCarta" alt="imagen pokemon"></a>
        <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
          <p class="card-text">N°${pokemon.id}.</p>
        </div>
      </div>
    </div>
  `;
};

async function clickPokemons(offset) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  const response = await fetch(url);
  const pokemons = await response.json();
  const pokemonDP = pokemons.results.map(pokemon => {
    return fetch(pokemon.url).then(response => response.json());
  });
  const pokemonData = await Promise.all(pokemonDP);
  const cardsHTML = pokemonData.map(generateCard).join("");
  container.innerHTML = `<div class="row g-5">${cardsHTML}</div>`;
}

clickPokemons(0);

async function clickPokemons(offset) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  const response = await fetch(url);
  const pokemons = await response.json();
  const pokemonDP = pokemons.results.map(pokemon => {
    return fetch(pokemon.url).then(response => response.json());
  });
  const datosPokemon = await Promise.all(pokemonDP);
  const cardsHTML = datosPokemon.map(resultadoGenerado).join("");
  container.innerHTML = `<div class="row g-5">${cardsHTML}</div>`;

  const aTags = document.querySelectorAll('.btnImg');
  aTags.forEach(aTag => {
    aTag.addEventListener('click', (event) => {
      event.preventDefault();
      const pokemonId = aTag.dataset.pokemonId;
      console.log(`The link with href "${aTag.href}" and pokemonId "${pokemonId}" was clicked.`);
      infoPokedexNombreOId(pokemonId)
    });
  });
}

clickPokemons(0);

const resultadoGenerado = (pokemon) => {
  return `
    <div class="col-12 m-5 col-md-6 col-lg-2">
      <div class="card text-center">
        <a href="#" class="btnImg" data-pokemon-id="${pokemon.id}">
          <img src="${pokemon.sprites.front_default}" class="card-img-top fotoCarta" alt="imagen pokemon">
        </a>
        <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
          <p class="card-text">N°${pokemon.id}.</p>
        </div>
      </div>
    </div>
  `;
};

const btnVerFavs = document.getElementById('verFavs')

btnVerFavs.addEventListener('click' ,function (){
mostrarFavoritos()
})
function mostrarFavoritos() {
  let favoritosString = '';

  favoritos.forEach(pokemon => {
    favoritosString += generateCard(pokemon);
  });

  if (favoritos.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'No hay Pokemons en Favoritos',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  } else {
    Swal.fire({
      html: favoritosString,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  }
}