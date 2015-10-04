import numberGen from './Utiles.js';

let ingredientMaker = (() => {

  singleSelect(type, amount) {
    let ingredientsToSend = this.createIngredients(type, amount);

    let recipeCard = {};
    recipeCard.saved = false;
    recipeCard.ingredients = ingredientsToSend;

    return recipeCard;
  },

  multiSelect() {
    let qty = 3;
    let fruitToSend = this.createIngredients('fruit', qty);
    let vegToSend = this.createIngredients('vegetable', qty);
    let ingredientsToSend = [].concat(fruitToSend, vegToSend);

    let recipeCard = {};
    recipeCard.saved = false;
    recipeCard.ingredients = ingredientsToSend;

    return recipeCard;
  },

  createIngredients(type, amount) {
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
  }

  return {
    single: singleSelect,
    multi: multiSelect
  }

})(type, amount, numberGen);
