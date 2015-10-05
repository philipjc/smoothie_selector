'use strict';

import Reflux from 'reflux';

const Actions = Reflux.createActions([
  'findIngredients',
  'requiredType',
  'saveThisCard',
  'trashSavedCard',
  'trashGeneratedCard',
  'requiredAmount'
]);

export default Actions;
