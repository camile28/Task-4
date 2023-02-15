/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((carsArray) => {
    createCarList(carsArray);
  })
  .catch((error) => {
    console.error("Error", error);
  });

function createCarList(carsArray) {
  let container = document.getElementById("output");
  carsArray.forEach((car) => {
    let contentDiv = document.createElement("div");
    contentDiv.classList.add("myStyle");
    container.appendChild(contentDiv);

    let brand = document.createElement("h3");
    brand.classList.add("brandName");
    brand.textContent = `Brand: ${car.brand}`;
    contentDiv.appendChild(brand);

    let models = document.createElement("p");
    models.textContent = `Models: ${car.models.join(", ")}`;
    contentDiv.appendChild(models);

    console.log(car);
  });
}
