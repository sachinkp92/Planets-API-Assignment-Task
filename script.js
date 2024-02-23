let cardWrapper = document.getElementById("cardWrapper");
const planetsPreviousBtn = document.getElementById("planetsPreviousBtn");
const planetsNextBtn = document.getElementById("planetsNextBtn");
const getPlanets = document.getElementById("getPlanets");
const residentsPreviousBtn = document.getElementById("residentsPreviousBtn");
const residentsNextBtn = document.getElementById("residentsNextBtn");
const getResidents = document.getElementById("getResidents");

let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let previousPlanets;
let nextPlanets;

let URL_Residents = "https://swapi.dev/api/people/?page=1";
let nextResidents;
let previousResidents;

getPlanets.addEventListener("click", () => {
  //fetch data
  const fetchPlanets = async () => {
    const response = await fetch(URL_Planets);
    const data = await response.json();
    previousPlanets = data.previous;
    nextPlanets = data.next;
    let planets = data.results;
    let output = " ";

    planets.forEach((item) => {
      output += `<div class="card">
                    <h2>${item.name}</h2>
                    <p>Climate: ${item.climate}</p>
                    <p>Terrain: ${item.terrain}</p>
                    <p>Population: ${item.population}</p>
                </div>`;
    });
    cardWrapper.innerHTML = output;
  };

  fetchPlanets();

  planetsNextBtn.addEventListener("click", () => {
    URL_Planets = nextPlanets;
    fetchPlanets();
  });

  planetsPreviousBtn.addEventListener("click", () => {
    URL_Planets = previousPlanets;
    fetchPlanets();
  });
});

getResidents.addEventListener("click", () => {
  //fetch data
  const fetchResidents = async () => {
    const response = await fetch(URL_Residents);
    const data = await response.json();
    nextResidents = data.next;
    previousResidents = data.previous;
    let residents = data.results;
    let output = " ";
    residents.forEach((item) => {
      output += `<div class="card">
                    <h2>${item.name}</h2>
                    <h5>Height: ${item.height}</h5>
                    <h5>Mass: ${item.mass}</h5>
                    <h5>Gender: ${item.gender}</h5>
                </div>`;
    });
    cardWrapper.innerHTML = output;
  };

  fetchResidents();

  residentsNextBtn.addEventListener("click", () => {
    URL_Residents = nextResidents;
    fetchResidents();
  });

  residentsPreviousBtn.addEventListener("click", () => {
    URL_Residents = previousResidents;
    fetchResidents();
  });
});
