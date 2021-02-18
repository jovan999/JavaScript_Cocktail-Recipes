// BY ING NAME
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// BY RANDOM
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// NON ALKOHOLIC
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
//   .then(response => response.json())
//   .then(data => console.log(data));

const searchbox = document.querySelector(".search-box");
const container = document.querySelector(".container");
const name = document.querySelector(".name");
const category = document.querySelector(".category");
const instructions = document.querySelector(".instructions");

// input
searchbox.addEventListener("input", () => search(searchbox.value));

// fetch
const search = async query => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => response.json())
    .then(data => dispAll(data));
};

// render data
function dispAll(data) {
  const render = data.drinks
    .map(
      drink => `
  <div>
  <div class="help">
  <div class="name">${drink.strDrink}</div>
    <img src="${drink.strDrinkThumb}" alt="coctail img" class="coctail_img">
    <div class="under_line">
      <div class="isAlcoholic">${drink.strAlcoholic}</div>
      <div class="category">${drink.strCategory}</div>
    </div>
      <div class="instructions__head">How to prepare</div>
      <div class="instructions">${drink.strInstructions}</div>
      <div class="instructions__head">What do you need:</div>
      <div class="list">
      <li> ${drink.strIngredient1} (${drink.strMeasure1})</li>
      <li> ${drink.strIngredient2} (${drink.strMeasure2})</li>
      <li> ${drink.strIngredient3} (${drink.strMeasure3})</li>
      <li> ${drink.strIngredient4} (${drink.strMeasure4})</li>
      <li> ${drink.strIngredient5} (${drink.strMeasure5})</li>
      <li> ${drink.strIngredient6} (${drink.strMeasure6})</li>
      <li> ${drink.strIngredient7} (${drink.strMeasure7})</li>
      </div>
    </div>
  </div 
  `
    )
    .join();

  container.innerHTML = render;
}
