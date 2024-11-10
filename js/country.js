import {countriesTempelate} from "./templates.mjs";

const baseUrl = "https://restcountries.com/v3.1/";

async function getJson(url) {
  const options = {
    method: "GET",
  };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  if (response.ok) {
    data = await response.json();
  } 
  else 
  {
    /*
    ADD a message that informs the user that no such country was found
    */
    throw new Error("response not ok");
  }
  return data;
}

async function searchCountry()
{
    let search = document.querySelector("#search").value;
    const results = await getJson(`name/${search}`);
    console.log(results);
    setContries(results);
}

function setContries(data)
{
    let flexbox = document.querySelector(".country-flex");
    let htmlToInsert = data.map(countriesTempelate);
    flexbox.innerHTML = htmlToInsert.join("");
}

document.getElementById("search-btn").addEventListener("click", searchCountry)

/*
ITEMS TO IMPLEMENT/THINK ABOUT

Have the country results turn into a drop-down that then transitions to a region.
Make each country element a fake button that glows when hovered and then pulls up a seperate region page
    where the animals to be hunted in that region are stored. If there is time, add subregions

Do we make the regions a dropdown in the header menu and thus solve our region problem?

*/