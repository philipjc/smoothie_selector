'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';
import numberGen from './Utils.js';

import ingredients from '../constants.js';

let storeIngredients = {
  ingredients
};

let storeData = {
  ingredients: [],
  saved: false
}

const GenerateSmoothieStore = Reflux.createStore({
  listenables: Actions,

  onFindIngredients(type) {
    type === 'mixed' ? this.multiSelect() : this.singleSelect(type, 4);
  },

  // TODO put in a helper module?
  // TODO clean up.
  singleSelect(type, amount) {
    let ingredientsToSend = this.createIngredients(type, amount);

    let recipeCard = storeData;
    recipeCard.ingredients = ingredientsToSend;
    console.log('recipe card from single store ', recipeCard);
    this.trigger(recipeCard);
  },

  multiSelect() {
    let qty = 3;
    let fruitToSend = this.createIngredients('fruit', qty);
    let vegToSend = this.createIngredients('vegetable', qty);
    let ingredientsToSend = [].concat(fruitToSend, vegToSend);

    let recipeCard = storeData;
    recipeCard.ingredients = ingredientsToSend;
    console.log('recipe card from single store ', recipeCard);
    this.trigger(recipeCard);
  },

  createIngredients(type, amount) {
    let recipe = [];
    let liquid;
    let ingredients = storeIngredients.ingredients[type];
    let ingredientsLength = ingredients.length;
    console.log('length ', ingredientsLength);
    let oldNumbers = [];

    type === 'fruit' ? liquid = 'milk' : liquid = 'water';

    recipe.push(liquid);

    // loop through - use for of
    // TODO make better, start basic proceduraly. Get a random, find random(index)
    // in Array and push it. Don't comapre old numbers
    while (recipe.length < amount) {
      ingredients.forEach((ingredient, index) => {
        let number = numberGen(ingredientsLength - 1, oldNumbers);
        // find the index
        if (index === number) {
          console.log('comapare ', index + ', ' + number );
          // push useed number
          oldNumbers.push(number);
          // push to new array
          recipe.push(ingredient);
        }
      });
    }
    return recipe;
  },
});

export default GenerateSmoothieStore;
