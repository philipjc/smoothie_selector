'use strict';

import Reflux from 'reflux';

const Actions = Reflux.createActions([
  'findIngredients',
  'requiredType',
  'requiredAmount',
  'requiredLiquid',
  'saveThisCard',
  'trashSavedCard',
  'trashGeneratedCard',
  'replaceIngredients'
]);

export default Actions;
