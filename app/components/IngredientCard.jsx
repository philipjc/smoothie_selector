import React from 'react';

// Reflux ===================================================
import Actions from '../actions/SmoothieActions.js';

// Components ===============================================
import Button from './parts/Button.jsx';
import ListItem from './parts/ListItem.jsx';

class IngredientCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderSmoothieIngredients = this.renderSmoothieIngredients.bind(this);
    this.trashCard = this.trashCard.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }

  renderSmoothieIngredients(ingredients) {
    let card = ingredients.map((ingredient, index) => {
      return (
        <ListItem item={ingredient} key={index} />
      );
    });
    return card;
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

  // TODO Add CSS Object to style dynamic colors. Set default props?so don't ref twice.
  render() {
    let { ingredientCard, index } = this.props;
    let ingredients = ingredientCard.ingredients;
    let ingredientsList = this.renderSmoothieIngredients(ingredients);

    let saveButton;
    let trashButton;
    if (!ingredientCard.saved) {
      saveButton = (
        <Button type="button"
                name="save-card"
                save={this.saveCard}
                trash={this.trashCard}
                />
      )
    } else {
      trashButton = (
        <i className="fa fa-trash-o" onClick={this.trashCard}></i>
      )
    }

    return (
      <div className="card">
        <h2 className="card__heading">Ingredient Card <span>{trashButton}</span></h2>
          <ul className="card__list">
            {ingredientsList}
          </ul>
          {saveButton}
      </div>
    );
  }
}

module.exports = IngredientCard;

IngredientCard.propTypes = {
  ingredientsCard: React.PropTypes.object,
  key: React.PropTypes.number
};
