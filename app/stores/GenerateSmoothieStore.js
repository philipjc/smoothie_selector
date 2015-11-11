'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';
import numberGen from './Utils.js';

import ingredients from '../constants.js';


const GenerateSmoothieStore = Reflux.createStore({
  listenables: Actions,

  init() {
    this.storeIngredients = {
      ingredients
    };
    this.storeData = {
      cards: []
    };
  },

  /**
  *
  */
  onTrashGeneratedCard(card) {
    this.storeData.cards.splice(card, 1);
    this.sendCards();
  },

  // TODO Abstract ingredients array into a npm module. Use random array to find ingredients
  // like starwars names
  /**
  *
  */
  onFindIngredients(type, numCards, liquidType, extras) {
    this.ingredientSelector(type, numCards, liquidType, extras);
  },

  /**
  *
  */
  onReplaceIngredients(type, amountToReplace, cardIndex, keepThese) {
    let newItems = this.gatherIngredients(type, amountToReplace);
    newItems = this.replaceIngredients(newItems, keepThese);
    this.storeData.cards[cardIndex].ingredients = newItems;

    this.sendCards();
  },

  replaceIngredients(newItems, keepItems) {
    let items = newItems.concat(keepItems);
    return items;
  },

  /**
  *
  */
  makeRecipeCard(type, liquidType, ingredientsToSend) {
    let recipeCard = {};
    recipeCard.saved = false;
    recipeCard.type = type;
    recipeCard.liquid = liquidType;
    recipeCard.ingredients = ingredientsToSend;

    this.storeData.cards.push(recipeCard);
  },

  /**
  *
  */
  ingredientSelector(type, numCards, liquidType, extras) {
    let qty;
    while (numCards > 0) {
      if (type === 'mixed') {
        qty = 2;
        let fruitToSend = this.gatherIngredients('fruit', qty);
        let vegToSend = this.gatherIngredients('vegetable', qty);
        let ingredientsToSend = [].concat(fruitToSend, vegToSend);

        this.makeRecipeCard(type, liquidType, ingredientsToSend);
      } else {
        qty = 4;
        let ingredientsToSend = this.gatherIngredients(type, qty);
        this.makeRecipeCard(type, liquidType, ingredientsToSend);
      }
      numCards--;
    }
    this.sendCards();
  },

  /**
  *
  */
  gatherIngredients(type, amountOfIngredients) {
    let recipe = [];
    let ingredients = this.storeIngredients.ingredients[type];
    let ingredientsLength = ingredients.length;

    while (recipe.length < amountOfIngredients) {
      let number = numberGen(ingredientsLength - 1);
      let ingredient = ingredients[number];
      recipe.push(ingredient);
    }

    return recipe;
  },

  sendCards() {
    let cardsCopy = JSON.parse(JSON.stringify(this.storeData.cards));
    this.trigger(cardsCopy);
  }
});

export default GenerateSmoothieStore;
