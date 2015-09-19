'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

import ingredients from '../constants.js';

let storeIngredients = {
  ingredients
};

let storeData = {
  ingredients: [],
  saved: false
}

const CreateSmoothieStore = Reflux.createStore({
  listenables: Actions,

  onFindIngredients(type) {
    type === 'mixed' ? this.multiSelect() : this.singleSelect(type, 3);
  },

  // TODO put in a helper module?
  singleSelect(type, amount) {
    let ingredientsToSend = this.createIngredients(type, amount);

    let recipeCard = storeData;
    recipeCard.ingredients = ingredientsToSend;
    console.log('recipe card from store ', recipeCard);

    this.trigger(recipeCard);
  },

  multiSelect() {
    let qty = 2;
    let fruitToSend = this.createIngredients('fruit', qty);
    let vegToSend = this.createIngredients('vegetable', qty);

    let ingredientsToSend = [].concat(fruitToSend, vegToSend);

    this.trigger(ingredientsToSend);
  },

  createIngredients(type, amount) {
    let recipe = [];
    let ingredients = storeIngredients.ingredients[type];
    let ingredientsLength = ingredients.length;
    let oldNumbers = [];

    // loop through - use for of
    while (recipe.length < amount) {

      ingredients.forEach((ingredient, index) => {

        let number = this.numberGen(ingredientsLength, oldNumbers);

        // find the index
        if (index === number) {
          // push useed number
          oldNumbers.push(number);
          // push to new array
          recipe.push(ingredient);
        }
      });
    }

    return recipe;
  },

  /**
   * Generate random number. Re-generate if the same number
   */
  numberGen(maxVal, old) {
    let number = Math.random() * (maxVal);
    number = Math.floor(number);

    if (old.indexOf(number) !== -1) {
      this.numberGen(maxVal, old);
    }

    return number;
  }

});

export default CreateSmoothieStore;
