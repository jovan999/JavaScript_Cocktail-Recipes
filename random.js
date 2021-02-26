const image = document.querySelector(".image");
const nameRandom = document.querySelector(".name_random");
const coctailImg = document.querySelector(".coctail_img-random");
const isAlcoholic = document.querySelector(".isAlcoholic-random");
const categoryRandom = document.querySelector(".category-random");
const instructionsRandom = document.querySelector(".instructions-random");
const ing1Random = document.querySelector(".ing1-random");
const ing2Random = document.querySelector(".ing2-random");
const ing3Random = document.querySelector(".ing3-random");
const ing4Random = document.querySelector(".ing4-random");
const ing5Random = document.querySelector(".ing5-random");
const ing6Random = document.querySelector(".ing6-random");
const ing7Random = document.querySelector(".ing7-random");

const random = async () => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => {
      (nameRandom.innerHTML = data.drinks[0].strDrink),
        (isAlcoholic.innerHTML = data.drinks[0].strAlcoholic),
        (categoryRandom.innerHTML = data.drinks[0].strCategory),
        (instructionsRandom.innerHTML = data.drinks[0].strInstructions),
        (ing1Random.innerHTML = data.drinks[0].strIngredient1),
        (ing2Random.innerHTML = data.drinks[0].strIngredient2),
        (ing3Random.innerHTML = data.drinks[0].strIngredient3),
        (ing4Random.innerHTML = data.drinks[0].strIngredient4),
        (ing5Random.innerHTML = data.drinks[0].strIngredient5),
        (ing6Random.innerHTML = data.drinks[0].strIngredient6),
        (ing7Random.innerHTML = data.drinks[0].strIngredient7);

      const renderRandom = `<img src="${data.drinks[0].strDrinkThumb}"class="coctail_img"/>`;
      image.innerHTML = renderRandom;
    })
    .catch(error => {
      console.error(error);
    });
};
random();

const image1 = document.querySelector(".image-1");
const nameRandom1 = document.querySelector(".name_random-1");
const coctailImg1 = document.querySelector(".coctail_img-random-1");
const isAlcoholic1 = document.querySelector(".isAlcoholic-random-1");
const categoryRandom1 = document.querySelector(".category-random-1");
const instructionsRandom1 = document.querySelector(".instructions-random-1");
const ing1Random1 = document.querySelector(".ing1-random-1");
const ing2Random1 = document.querySelector(".ing2-random-1");
const ing3Random1 = document.querySelector(".ing3-random-1");
const ing4Random1 = document.querySelector(".ing4-random-1");
const ing5Random1 = document.querySelector(".ing5-random-1");
const ing6Random1 = document.querySelector(".ing6-random-1");
const ing7Random1 = document.querySelector(".ing7-random-1");

const random1 = async () => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => {
      (nameRandom1.innerHTML = data.drinks[0].strDrink),
        (isAlcoholic1.innerHTML = data.drinks[0].strAlcoholic),
        (categoryRandom1.innerHTML = data.drinks[0].strCategory),
        (instructionsRandom1.innerHTML = data.drinks[0].strInstructions),
        (ing1Random1.innerHTML = data.drinks[0].strIngredient1),
        (ing2Random1.innerHTML = data.drinks[0].strIngredient2),
        (ing3Random1.innerHTML = data.drinks[0].strIngredient3),
        (ing4Random1.innerHTML = data.drinks[0].strIngredient4),
        (ing5Random1.innerHTML = data.drinks[0].strIngredient5),
        (ing6Random1.innerHTML = data.drinks[0].strIngredient6),
        (ing7Random1.innerHTML = data.drinks[0].strIngredient7);

      const renderRandom = `<img src="${data.drinks[0].strDrinkThumb}"class="coctail_img"/>`;
      image1.innerHTML = renderRandom;
    })
    .catch(error => {
      console.error(error);
    });
};
random1();

const image2 = document.querySelector(".image-2");
const nameRandom2 = document.querySelector(".name_random-2");
const coctailImg2 = document.querySelector(".coctail_img-random-2");
const isAlcoholic2 = document.querySelector(".isAlcoholic-random-2");
const categoryRandom2 = document.querySelector(".category-random-2");
const instructionsRandom2 = document.querySelector(".instructions-random-2");
const ing1Random2 = document.querySelector(".ing1-random-2");
const ing2Random2 = document.querySelector(".ing2-random-2");
const ing3Random2 = document.querySelector(".ing3-random-2");
const ing4Random2 = document.querySelector(".ing4-random-2");
const ing5Random2 = document.querySelector(".ing5-random-2");
const ing6Random2 = document.querySelector(".ing6-random-2");
const ing7Random2 = document.querySelector(".ing7-random-2");

const random2 = async () => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => {
      (nameRandom2.innerHTML = data.drinks[0].strDrink),
        (isAlcoholic2.innerHTML = data.drinks[0].strAlcoholic),
        (categoryRandom2.innerHTML = data.drinks[0].strCategory),
        (instructionsRandom2.innerHTML = data.drinks[0].strInstructions),
        (ing1Random2.innerHTML = data.drinks[0].strIngredient1),
        (ing2Random2.innerHTML = data.drinks[0].strIngredient2),
        (ing3Random2.innerHTML = data.drinks[0].strIngredient3),
        (ing4Random2.innerHTML = data.drinks[0].strIngredient4),
        (ing5Random2.innerHTML = data.drinks[0].strIngredient5),
        (ing6Random2.innerHTML = data.drinks[0].strIngredient6),
        (ing7Random2.innerHTML = data.drinks[0].strIngredient7);

      const renderRandom = `<img src="${data.drinks[0].strDrinkThumb}"class="coctail_img"/>`;
      image2.innerHTML = renderRandom;
    })
    .catch(error => {
      console.error(error);
    });
};
random2();
