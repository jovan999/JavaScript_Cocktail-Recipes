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

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml9 .letters");
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

// ScrollReveal().reveal(".container");

const searchbox = document.querySelector(".search-box");
const container = document.querySelector(".container");
const name = document.querySelector(".name");
const category = document.querySelector(".category");
const instructions = document.querySelector(".instructions");
const ing7 = document.querySelector(".ing7");
const ing1 = document.querySelector(".ing1");

const checkbox = document.querySelector(".checkbox");

// input
searchbox.addEventListener("input", () => search(searchbox.value));

// fetch
const search = async query => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => response.json())
    .then(data => dispAll(data))
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
      <li class="ing1"> ${drink.strIngredient1} - ${drink.strMeasure1}</li>
      <li> ${drink.strIngredient2} - ${drink.strMeasure2}</li>
      <li> ${drink.strIngredient3} - ${drink.strMeasure3}</li>
      <li> ${drink.strIngredient4} - ${drink.strMeasure4}</li>
      <li> ${drink.strIngredient5} - ${drink.strMeasure5}</li>
      <li> ${drink.strIngredient6} - ${drink.strMeasure6}</li>
      <li class="ing7"> ${drink.strIngredient7} - ${drink.strMeasure7}</li>
    </div>
    </div>
  </div>
</div
  `
    )
    .join();
  container.innerHTML = render;
}

// const image = document.querySelector(".image");
// const nameRandom = document.querySelector(".name_random");
// const coctailImg = document.querySelector(".coctail_img-random");
// const isAlcoholic = document.querySelector(".isAlcoholic-random");
// const categoryRandom = document.querySelector(".category-random");
// const instructionsRandom = document.querySelector(".instructions-random");
// const ing1Random = document.querySelector(".ing1-random");
// const ing2Random = document.querySelector(".ing2-random");
// const ing3Random = document.querySelector(".ing3-random");
// const ing4Random = document.querySelector(".ing4-random");
// const ing5Random = document.querySelector(".ing5-random");
// const ing6Random = document.querySelector(".ing6-random");
// const ing7Random = document.querySelector(".ing7-random");

// const randomE = async () => {
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
//     .then(response => response.json())
//     .then(data => {
//       (nameRandom.innerHTML = data.drinks[0].strDrink),
//         (isAlcoholic.innerHTML = data.drinks[0].strAlcoholic),
//         (categoryRandom.innerHTML = data.drinks[0].strCategory),
//         (instructionsRandom.innerHTML = data.drinks[0].strInstructions),
//         (ing1Random.innerHTML = data.drinks[0].strIngredient1),
//         (ing2Random.innerHTML = data.drinks[0].strIngredient2),
//         (ing3Random.innerHTML = data.drinks[0].strIngredient3),
//         (ing4Random.innerHTML = data.drinks[0].strIngredient4),
//         (ing5Random.innerHTML = data.drinks[0].strIngredient5),
//         (ing6Random.innerHTML = data.drinks[0].strIngredient6),
//         (ing7Random.innerHTML = data.drinks[0].strIngredient7);

//       const renderRandom = `<img src="${data.drinks[0].strDrinkThumb}"class="coctail_img"/>`;
//       image.innerHTML = renderRandom;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
// randomE();

// const checkboxes = document.querySelectorAll('input[name="color"]:checked');

// let colors = [];
// checkboxes.forEach(checkbox => {
//   colors.push(checkbox.value);
// });

// function getSelectedCheckboxValues(name) {
//   const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
//   let values = [];
//   checkboxes.forEach(checkbox => {
//     values.push(checkbox.value);
//   });
//   return values;
// }

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", event => {
//   alert(getSelectedCheckboxValues("color"));
// });
