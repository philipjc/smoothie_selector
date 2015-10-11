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

  onSaveThisCard(card) {
    let cardsLength = storeData.cards.length;

    let cardToSave = JSON.parse(JSON.stringify(card));

    cardToSave.saved = true;

    cardToSave.name = "saved-card__" + (cardsLength + 1);

    storeData.cards.push(cardToSave);

    let cardsCopy = JSON.parse(JSON.stringify(storeData.cards));

    this.trigger(cardsCopy);
  },

  onTrashSavedCard(card) {
    storeData.cards.splice(card, 1);

    this.trigger(storeData.cards);
  }

});

export default SavedStore;
