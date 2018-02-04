// DARTH VADER SHIT //
const personFour = new XMLHttpRequest();
personFour.addEventListener("load", darthVader);
personFour.open("GET", "https://swapi.co/api/people/4/");
personFour.send();

function darthVader() {
  console.log("darthVader callback fired");
  const person = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = person.name;

  const personFourWorld = new XMLHttpRequest();
  personFourWorld.addEventListener("load", darthVaderHome);
  personFourWorld.open("GET", "https://swapi.co/api/planets/1/");
  personFourWorld.send();
}

function darthVaderHome() {
  console.log("darthVaderHome callback fired");
  const homeworld = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML = homeworld.name;
}

// HAN SOLO SHIT //
const person14 = new XMLHttpRequest();
person14.addEventListener("load", hanSolo);
person14.open("GET", "https://swapi.co/api/people/14/");
person14.send();

function hanSolo() {
  console.log("hanSolo callback fired");
  const person2 = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = person2.name;

  const personSpecies = new XMLHttpRequest();
  personSpecies.addEventListener("load", hanSoloSpecies);
  personSpecies.open("GET", "https://swapi.co/api/species/1/");
  personSpecies.send();
}

function hanSoloSpecies() {
  console.log("hanSoloSpecies callback fired");
  const species = JSON.parse(this.responseText);
  document.getElementById("person14Species").innerHTML = species.name;
}

// FILM SHIT LIST //
const movies = new XMLHttpRequest();
movies.addEventListener("load", SWFilms);
movies.open("GET", "https://swapi.co/api/films/");
movies.send();

function SWFilms() {
  console.log("SWFilms callback fired");
  const films = JSON.parse(this.responseText);
  const filmsList = films.results;

  filmsList.forEach(function(movie) {
    const list = document.createElement("li");
    list.className = "film";
    document.getElementById("filmList").appendChild(list);
    const filmTitle = document.createElement("h2");
    filmTitle.className = "filmTitle";
    list.appendChild(filmTitle);
    filmTitle.innerHTML = movie.title;
    const planetsTitle = document.createElement("h3");
    planetsTitle.className = "planets";
    list.appendChild(planetsTitle);
    planetsTitle.innerHTML = "Planets";
    const filmPlanets = movie.planets;

    filmPlanets.forEach(function(movie) {
      const planetList = new XMLHttpRequest();
      planetList.addEventListener("load", getPlanets);
      planetList.open("GET", movie);
      planetList.send();
      //   const filmPlanets = document.createElement("ul");
      //   filmPlanets.className = "filmPlanets";
      //   list.appendChild(filmPlanets);
      //   const planetNames = document.createElement("h4");
      //   filmPlanets.appendChild(planetNames);
      //   planetNames.innerHTML = planetName;

      function getPlanets() {
        console.log("getPlanets callback fired");
        const planets = JSON.parse(this.responseText);
        const planetName = planets.name;
        const filmPlanets = document.createElement("ul");
        filmPlanets.className = "filmPlanets";
        list.appendChild(filmPlanets);
        const planetNames = document.createElement("h4");
        filmPlanets.appendChild(planetNames);
        planetNames.innerHTML = planetName;
      }
    });
  });
}
