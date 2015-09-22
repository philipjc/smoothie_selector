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
    console.log('after saving, card from store ', data);
    let allCards = storeData.cards;

    allCards.push(data);

    console.log('card added to cards array ', allCards);

    this.trigger(allCards);
  }

});

export default SavedStore;
