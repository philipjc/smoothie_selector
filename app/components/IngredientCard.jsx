import React from 'react';

// Reflux ===================================================
import Actions from '../actions/SmoothieActions.js';

// Components ===============================================
import ReBlendButton from './parts/ReBlendButton.jsx';
import Card from './parts/Card.jsx';

const propTypes = {
  ingredientsCard: React.PropTypes.object,
  index: React.PropTypes.number,
  key: React.PropTypes.number
};

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: []
    }

    this.saveCard = this.saveCard.bind(this);
    this.trashCard = this.trashCard.bind(this);
    this.handleCheckedItem = this.handleCheckedItem.bind(this);
    this.handleReplaceIngredients = this.handleReplaceIngredients.bind(this);
  }

  saveCard() {
    let card = this.props.ingredientCard;
    Actions.saveThisCard(card);
  }

  trashCard() {
    let card = this.props.ingredientCard;
    let cardIndex = this.props.index;

    if (card.saved) {
      Actions.trashSavedCard(cardIndex);

    } else {
      Actions.trashGeneratedCard(cardIndex);
    }
  }

  handleCheckedItem(item, state) {
    let itemStr = item.trim();

    if (state) {
      let checkedItemsCopy = this.state.checkedItems;
      checkedItemsCopy.push(itemStr);
      this.setState({
        checkedItems: checkedItemsCopy
      });

    } else {
      let checkedItemsCopy = this.state.checkedItems;
      let idx = checkedItemsCopy.indexOf(itemStr);
      checkedItemsCopy.splice(idx, 1);
      this.setState({
        checkedItems: checkedItemsCopy
      });
    }
  }

  handleReplaceIngredients() {
    // reblend will need to remove the card array and replace with new.
    // Put all logic in Store? set checked items as property?
    let checkedItems = this.state.checkedItems;
    if (checkedItems.length === 4) {
      return;
    }
    let { ingredientCard, index } = this.props;
    let { type } = ingredientCard;
    let amount = 4 - (checkedItems.length);

    Actions.replaceIngredients(type, amount, index, checkedItems);
  }


  // TODO Add CSS Object to style dynamic colors. Set default props?so don't ref twice.
  // TODO return diff IC based on conditions? instead of modifying one card.
  // TODO make ingredientCard Card component to separate out further
  render() {
    let { ingredientCard, index } = this.props;

    return (
      <div className="card">
        <Card
          saveCard={this.saveCard}
          trashCard={this.trashCard}
          card={ingredientCard}
          checkedLength={this.state.checkedItems.length}/>
      </div>
    );
  }
}

IngredientCard.propTypes = propTypes;
