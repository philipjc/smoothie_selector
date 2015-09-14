'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

import ingredients from '../constants.js';

let data = {
  ingredients
};

const SmoothieStore = Reflux.createStore({
  listenables: Actions,

  onFindIngredients(type) {
    type === 'mixed' ? this.multiSelect() : this.singleSelect(type, 3);
  },

  // TODO put in a helper module?
  singleSelect(type, amount) {
    let ingredientsToSend = this.createIngredients(type, amount);

    this.trigger(ingredientsToSend);
  },

  multiSelect() {
    let fruitToSend = this.createIngredients('fruit', 2);
    let vegToSend = this.createIngredients('veg', 2);

    let ingredientsToSend = [].concat(fruitToSend, vegToSend);

    this.trigger(ingredientsToSend);
  },

  createIngredients(type, amount) {
    let buildIngredients = [];
    let ingredients = data.ingredients[type];
    let length = ingredients.length;

    // loop through - use for of
    while (buildIngredients.length <= amount) {
      ingredients.forEach((ingredient, index) => {

        // generate a number between 0 and length
        let number = Math.random() * (0, length);
        number = Math.floor(number);
        // find the index
        if (index === number) {
          // push to new array
          buildIngredients.push(ingredient);
        }
      });
    }

    return buildIngredients;
  }

});

export default SmoothieStore;
