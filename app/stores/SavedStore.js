'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

// card: {
//   saved: true,
//   ingredients: []
// }
let storeData = {
  cards: []
};

const SavedStore = Reflux.createStore({
  listenables: Actions,

  onSaveThisCard(data) {
    let allCards = storeData.cards;

    let card = {};
    card.ingredients = data;
    card.saved = true;

    allCards.push(card);

    this.trigger(allCards);
  }

});

export default SavedStore;
