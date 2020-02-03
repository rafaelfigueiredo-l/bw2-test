import { SWAPI_API_BASE_URL_PLANETS } from "../config/Constants";
import { HelperGetRandomInt } from "../helper/RandomNumber";

function Api() {
  const planets = SWAPI_API_BASE_URL_PLANETS;
  let countPlanets = null;


  const getPlanetsData = async () => {
    try {
      const response = await fetch(planets);
      if (response.status !== 200) return false;
      const data = await response.json();
      return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

  const getPlanetById = async (id) => {
      try {
        const response = await fetch(planets + id);
        if (response.status !== 200) return false;
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    const getPlanetData = async (id) => {
      try {
        const response = await getPlanetById(id);
        if(false === response) return false;
        const { name, population, climate, terrain, films } = response;
        return {name, population, climate, terrain, films};
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    const getCountPlanets = async () => {
      if(null === countPlanets){
        const { count } = await getPlanetsData();
        countPlanets = count;
      }
      return countPlanets;
    };

    const getRandomPlanet = async () => {
      const countPlanets = await getCountPlanets();
      const randomInt = HelperGetRandomInt(1, await countPlanets);
      const planetData = await getPlanetData(randomInt);
      if(null === planetData){
        return null;
      }
      return planetData;
    };

  return {
    getRandomPlanet: getRandomPlanet,
    getCountPlanets: getCountPlanets
  };
}

const ApiSingletonInstance = new Api();
Object.freeze(ApiSingletonInstance);

export default ApiSingletonInstance;
