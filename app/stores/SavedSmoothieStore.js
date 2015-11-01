'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';


const SavedStore = Reflux.createStore({
  listenables: Actions,

  init() {
    this.storeData = {
      cards: []
    }
  },

  /**
  *
  */
  onSaveThisCard(card) {
    let cardsLength = this.storeData.cards.length;

    let cardToSave = JSON.parse(JSON.stringify(card));

    cardToSave.saved = true;

    cardToSave.name = "saved-card__" + (cardsLength + 1);

    this.storeData.cards.push(cardToSave);

    let cardsCopy = JSON.parse(JSON.stringify(this.storeData.cards));

    this.trigger(cardsCopy);
  },

  /**
  *
  */
  onTrashSavedCard(card) {
    this.storeData.cards.splice(card, 1);
    this.trigger(this.storeData.cards);
  }

});

export default SavedStore;
