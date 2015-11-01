import React from 'react';

// Reflux ===============================================
import Actions from '../actions/SmoothieActions.js';

// Components ===============================================
import CardDisplay from './parts/CardDisplay.jsx';

const propTypes = {
  ingredientsCard: React.PropTypes.object,
  index: React.PropTypes.number,
  key: React.PropTypes.number
};

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);

    this.saveCard = this.saveCard.bind(this);
    this.trashCard = this.trashCard.bind(this);
  }

  /**
  * @desc Call Action to save current card
  */
  saveCard() {
    let card = this.props.ingredientCard;
    Actions.saveThisCard(card);
  }

  /**
  * @desc get current card. Find its index.
  * send Action to delete card based on Bool
  */
  trashCard() {
    let card = this.props.ingredientCard;
    let cardIndex = this.props.index;

    if (card.saved) {
      Actions.trashSavedCard(cardIndex);

    } else {
      Actions.trashGeneratedCard(cardIndex);
    }
  }

  // TODO Add CSS Object to style dynamic colors. Set default props?so don't ref twice.
  // TODO return diff IC based on conditions? instead of modifying one card. give diff props
  // TODO make ingredientCard Card component to separate out further
  render() {
    let { ingredientCard, index } = this.props;

    return (
      <div className="card">
        <CardDisplay
          saveCard={this.saveCard}
          trashCard={this.trashCard}
          card={ingredientCard}
          index={index}
          />
      </div>
    );
  }
}

IngredientCard.propTypes = propTypes;
