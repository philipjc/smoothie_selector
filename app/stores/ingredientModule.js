// import numberGen from './Utils.js';
// import ingredients from '../constants.js';

let ingredientMaker = ((type, amount, numberGen, ingredients) => {

  let storeIngredients = {
    ingredients
  };

  function createIngredients(type, amount) {
    let recipe = [];
    let liquid;
    let ingredients = storeIngredients.ingredients[type];
    let ingredientsLength = ingredients.length;
    let oldNumbers = [];

    type === 'fruit' ? liquid = 'milk' : liquid = 'water';

    recipe.push(liquid);

    while (recipe.length < amount) {
      let number = numberGen(ingredientsLength - 1, oldNumbers);
      let ingredient = ingredients[number];
      recipe.push(ingredient);
    }

    return recipe;
  };

  function singleSelect(type, amount) {
    console.log('type from single ', type);
    let ingredientsToSend = createIngredients(type, amount);

    let recipeCard = {};
    recipeCard.saved = false;
    recipeCard.ingredients = ingredientsToSend;

    return recipeCard;
  };

  function multiSelect() {
    let qty = 3;
    let fruitToSend = createIngredients('fruit', qty);
    let vegToSend = createIngredients('vegetable', qty);
    let ingredientsToSend = [].concat(fruitToSend, vegToSend);

    let recipeCard = {};
    recipeCard.saved = false;
    recipeCard.ingredients = ingredientsToSend;

    return recipeCard;
  };

  return {
    single: singleSelect,
    multi: multiSelect
  }

})();

export default ingredientMaker;
