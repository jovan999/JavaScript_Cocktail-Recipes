// BY ING NAME
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=Apricot_brandy`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// NON ALKOHOLIC
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// JS animation
const textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

const searchbox = document.querySelector(".search-box");
const container = document.querySelector(".container");

// input
searchbox.addEventListener("input", () => search(searchbox.value));

// fetch
const search = async query => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => response.json())
    .then(data => {
      dispAll(data);
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  if (query == "") {
    container.style.visibility = "hidden";
  } else {
    container.style.visibility = "visible";
  }
};

// render data
function dispAll(data) {
  const render = data.drinks
    .map(
      drink => `
<div class="card__outline">
  <div class="card">
    <div class="card__side card__side--front">
      <div class="name">${drink.strDrink}</div>
      <img src="${drink.strDrinkThumb}" alt="coctail img" class="coctail_img">
    <div class="under_line">
      <div class="isAlcoholic">${drink.strAlcoholic}</div>
      <div class="category">${drink.strCategory}</div>
    </div>
    </div>
    <div class="card__side card__side--back">
      <div class="instructions__head">How to prepare</div>
      <div class="instructions">${drink.strInstructions}</div>
      <div class="instructions__head">What do you need:</div>
      <div class="list">
      <li> ${
        drink.strIngredient1 !== null
          ? drink.strIngredient1 + "-" + drink.strMeasure1
          : ""
      }</li>
      <li> ${
        drink.strIngredient2 !== null
          ? drink.strIngredient2 + "-" + drink.strMeasure2
          : ""
      }</li>
      <li> ${
        drink.strIngredient3 !== null
          ? drink.strIngredient3 + "-" + drink.strMeasure3
          : ""
      }</li>
      <li> ${
        drink.strIngredient4 !== null
          ? drink.strIngredient4 + "-" + drink.strMeasure4
          : ""
      }</li>
      <li> ${
        drink.strIngredient5 !== null
          ? drink.strIngredient5 + "-" + drink.strMeasure5
          : ""
      }</li>
      <li> ${
        drink.strIngredient6 !== null
          ? drink.strIngredient6 + "-" + drink.strMeasure6
          : ""
      }</li>
      <li> ${
        drink.strIngredient7 !== null
          ? drink.strIngredient7 + "-" + drink.strMeasure7
          : ""
      }</li>
    </div>
    </div>
  </div>
</div
  `
    )
    .join();
  container.innerHTML = render;
}
