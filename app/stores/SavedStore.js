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
    console.log('after saving, card from store ', card);

    let cardToSave = JSON.parse(JSON.stringify(card));

    storeData.cards.push(cardToSave);

    let cardsCopy = JSON.parse(JSON.stringify(storeData.cards));

    console.log('cards copy ', cardsCopy);

    this.trigger(cardsCopy);
  }

});

export default SavedStore;
