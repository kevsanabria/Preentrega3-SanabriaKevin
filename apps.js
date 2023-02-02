class Pokemon {
    constructor(imagen, id, nombre, habilidad, peso, tipo, debilidad) {
        this.imagen = imagen
        this.id = id
        this.nombre = nombre;
        this.habilidad = habilidad;
        this.peso = peso;
        this.tipo = tipo;
        this.debilidad = debilidad;
    }
}

    const pokemons = [
    new Pokemon("./img/025.png", "001", "Pikachu", ["Lightning Rod", "Static"], 6.0, "Electric", ["Ground"]),
    new Pokemon("./img/006.png", "002", "Charizard", ["Blaze", "Dragon Slayer"], 90.5, "Fire/Flying", ["Water", "Electric", "Rock"]),
    new Pokemon("./img/007.png", "003", "Squirtle", ["Torrent", "Rain Dish"], 19.8, "Water", ["Grass"]),
    new Pokemon("./img/001.png", "004", "Bulbasaur", ["Overgrow", "Chlorophyll"], 15.2, "Grass/Poison", ["Fire", "Ice", "Flying", "Psychic"]),
    new Pokemon("./img/150.png", "005", "Mewtwo", ["Pressure", "Unnerve"], 122.0, "Psychic", ["Bug", "Ghost", "Dark"]),
    new Pokemon("./img/144.png", "006", "Articuno", ["Pressure", "Snow Cloak"], 122.0, "Ice/Flying", ["Rock", "Steel", "Fire"]),
    new Pokemon("./img/145.png", "007", "Zapdos", ["Pressure", "Static"], 52.6, "Electric/Flying", ["Ice", "Rock"]),
    new Pokemon("./img/146.png", "008", "Moltres", ["Flame Body", "Pressure"], 60.0, "Fire/Flying", ["Water", "Rock", "Electric"]),
    new Pokemon("./img/149.png", "009", "Dragonite", ["Inner Focus", "Multiscale"], 210.0, "Dragon/Flying", ["Ice", "Dragon", "Fairy"]),
    new Pokemon("./img/143.png", "010", "Snorlax", ["Immunity", "Thick Fat"], 460.0, "Normal", ["Fighting"]),
    new Pokemon("./img/131.png", "011", "Lapras", ["Water Absorb", "Shell Armor"], 220.0, "Water/Ice", ["Electric", "Grass", "Fighting", "Rock"]),
    new Pokemon("./img/133.png", "012", "Eevee", ["Adaptability", "Run Away"], 14.0, "Normal", []),
    new Pokemon("./img/134.png", "013", "Vaporeon", ["Water Absorb", "Hydration"], 29.0, "Water", ["Electric"]),
    new Pokemon("./img/135.png", "014", "Jolteon", ["Volt Absorb", "Quick Feet"], 24.5, "Electric", ["Ground"]),
    new Pokemon("./img/136.png", "015", "Flareon", ["Flash Fire", "Guts"], 25.0, "Fire", ["Water", "Rock", "Dragon"]),
    new Pokemon("./img/077.png", "016", "Ponyta", ["Run Away", "Flame Body"], 66.1, "Fire", ["Water", "Ground", "Rock"]),
    new Pokemon("./img/078.png", "017", "Rapidash", ["Run Away", "Flame Body"], 95.0, "Fire", ["Water", "Ground", "Rock"]),
    new Pokemon("./img/027.png", "018", "Sandshrew", ["Sand Veil", "Sand Rush"], 12.0, "Ground", ["Water", "Grass", "Ice"]),
    new Pokemon("./img/028.png", "019", "Sandslash", ["Sand Veil", "Sand Rush"], 29.5, "Ground", ["Water", "Grass", "Ice"]),
    new Pokemon("./img/002.png", "021", "Ivysaur", ["Overgrow"], 28.7, "Grass", "Fire"),
    new Pokemon("./img/003.png", "022", "Venusaur", ["Overgrow"], 100.0, "Grass", "Fire"),
    new Pokemon("./img/004.png", "023", "Charmander", ["Blaze"], 8.5, "Fire", "Water"),
    new Pokemon("./img/005.png", "024", "Charmeleon", ["Blaze"], 19.0, "Fire", "Water"),
    new Pokemon("./img/008.png", "027", "Wartortle", ["Torrent"], 22.5, "Water", "Electric"),
    new Pokemon("./img/009.png", "028", "Blastoise", ["Torrent"], 85.5, "Water", "Electric"),
    new Pokemon("./img/010.png", "029", "Caterpie", ["Shield Dust"], 2.9, "Bug", "Fire"),
    new Pokemon("./img/011.png", "030", "Metapod", ["Shed Skin"], 9.9, "Bug", "Fire"),
    new Pokemon("./img/012.png", "031", "Butterfree", ["Compound Eyes"], 32.0, "Bug", "Fire"),
    new Pokemon("./img/013.png", "032", "Weedle", ["Shield Dust"], 3.2, "Bug", "Fire"),
    new Pokemon("./img/014.png", "033", "Kakuna", ["Shed Skin"], 10.0, "Bug", "Fire"),
    new Pokemon("./img/015.png", "034", "Beedrill", ["Swarm"], 29.5, "Bug", "Fire"),
    new Pokemon("./img/016.png", "035", "Pidgey", ["Keen Eye"], 1.8, "Normal", "Electric"),
    new Pokemon("./img/017.png", "036", "Pidgeotto", ["Keen Eye"], 30.0, "Normal", "Electric"),
    new Pokemon("./img/018.png", "037", "Pidgeot", ["Keen Eye"], 39.5, "Normal", "Electric"),
    new Pokemon("./img/019.png", "038", "Rattata", ["Run Away"], 3.5, "Normal", "Fighting"),
    new Pokemon("./img/020.png", "039", "Raticate", ["Run Away"], 18.5, "Normal", "Fighting"),
    new Pokemon("./img/021.png", "040", "Spearow", ["Keen Eye"], 2.0, "Normal", "Electric"),
    new Pokemon("./img/022.png", "041", "Fearow", ["Keen Eye"], 38.0, "Normal", "Electric"),
    new Pokemon("./img/023.png", "042", "Ekans", ["Intimidate"], 6.9, "Poison", "Ground"),
    new Pokemon("./img/024.png", "043", "Arbok", ["Intimidate"], 65.0, "Poison", "Ground"),
    new Pokemon("./img/026.png", "045", "Raichu", ["Static"], 30.0, "Electric", "Ground"),
]

// json y localStorage

const arrayToJason = JSON.stringify(pokemons);
localStorage.setItem("pokemons", arrayToJason);
storedArrayToJason = localStorage.getItem("arrayToJason")
storedArray = JSON.parse(storedArrayToJason)

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

btnNombre.addEventListener("click" , (e)=> {
    e.preventDefault()
    let busqueda = pokemons.findIndex((pokemons) =>{
        return pokemons.nombre == busquedaNombre.value
    
})
    infoPokedex(busqueda)
})

function infoPokedex(i){
    nombrePokemon.innerText= pokemons[i].nombre
    tipo.innerText= pokemons[i].tipo
    altura.innerText= pokemons[i].altura
    peso.innerText= pokemons[i].peso
    debilidad.innerText= pokemons[i].debilidad
    imagenPokemon.src= pokemons[i].imagen
    habilidad.innerText= pokemons[i].habilidad
    numeroPokemon.innerText= pokemons[i].id
}

btnTipo.addEventListener("click" , (e)=> {
    e.preventDefault()
    let busqueda = storedArray.findIndex((storedArray) =>{
        return storedArray.tipo == busquedaTipo.value
})
    
})

const container = document.getElementById("card-container");
const generateCard = (storedArray) => {
    return `
      <div class="col-12 col-md-6 col-lg-2 ">
        <div class="card text-center">
          <a href=""><img src= ${storedArray.imagen} class="card-img-top fotoCarta" alt="imagen pokemon"></a>
          <div class="card-body">
            <h5 class="card-title">${storedArray.nombre}</h5>
            <p class="card-text">N°${storedArray.id}.</p>
          </div>
        </div>
      </div>
    `;
  };
const cardsHTML = pokemons.map(generateCard).join("");

container.innerHTML = `<div class="row g-5">${cardsHTML}</div>`;

