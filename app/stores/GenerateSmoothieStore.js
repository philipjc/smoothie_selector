'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';
import numberGen from './Utils.js';

import ingredients from '../constants.js';

let storeIngredients = {
  ingredients
};

let storeData = {
  cards: []
}

const GenerateSmoothieStore = Reflux.createStore({
  listenables: Actions,

  onTrashGeneratedCard(card) {
    storeData.cards.splice(card, 1);
    this.sendCards();
  },

  onFindIngredients(type, numCards) {
    type === 'mixed' ? this.multiSelect() : this.singleSelect(type, 4, numCards);
  },

  onReplaceIngredients(type, amount, cardIndex, keepThese) {
    console.log('before change', storeData.cards[cardIndex]);
    let newItems = this.createIngredients(type, amount);
    newItems = newItems.concat(keepThese);
    storeData.cards[cardIndex].ingredients = newItems;
    console.log('after change', storeData.cards[cardIndex]);

    this.sendCards();
  },

  replaceIngredients(items) {
    // TODO Stop liquid being added twice. Keep original items order.
    // TODO make a system where liquid, is selected.
  },

  singleSelect(type, amount, numCards) {
    let numCardsCopy = numCards;

    while (numCardsCopy > 0) {
      let ingredientsToSend = this.createIngredients(type, amount);

      let recipeCard = {};
      recipeCard.saved = false;
      recipeCard.type = type;
      recipeCard.ingredients = ingredientsToSend;

      storeData.cards.push(recipeCard);
      numCardsCopy--;
    }

    this.sendCards();
  },

  multiSelect() {
    let qty = 2;
    let fruitToSend = this.createIngredients('fruit', qty);
    let vegToSend = this.createIngredients('vegetable', qty);
    let ingredientsToSend = [].concat(fruitToSend, vegToSend);

    let recipeCard = {};
    recipeCard.saved = false;
    recipeCard.type = "mixed";
    recipeCard.ingredients = ingredientsToSend;

    storeData.cards.push(recipeCard);

    this.sendCards();
  },

  createIngredients(type, amount) {
    let recipe = [];
    let liquid;
    let ingredients = storeIngredients.ingredients[type];
    let ingredientsLength = ingredients.length;
    // let oldNumbers = [];

    type === 'fruit' ? liquid = 'milk' : liquid = 'water';

    recipe.push(liquid);

    while (recipe.length < amount) {
      let number = numberGen(ingredientsLength - 1);
      let ingredient = ingredients[number];
      recipe.push(ingredient);
    }

    return recipe;
  },

  sendCards() {
    let cardsCopy = JSON.parse(JSON.stringify(storeData.cards));
    this.trigger(cardsCopy);
  }
});

export default GenerateSmoothieStore;
