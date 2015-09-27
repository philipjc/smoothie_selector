import React from 'react';

// Reflux ===================================================
import Actions from '../actions/SmoothieActions.js';

// Components ===============================================
import Button from './parts/Button.jsx';
import ListItem from './parts/ListItem.jsx';

class IngredientCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderSmoothieCard = this.renderSmoothieCard.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }

  renderSmoothieCard(ingredients) {
    let card = ingredients.map((ingredient, index) => {
      return (
        <ListItem item={ingredient} key={index} />
      );
    });
    return card;
  }

  saveCard() {
    let card = this.props.ingredientsCard;
    Actions.saveThisCard(card);
  }

  // TODO Add CSS Object to style dynamic colors. Set default props?so don't ref twice.
  render() {
    console.log('card  props ', this.props);
    let { ingredientsCard } = this.props;
    let { ingredients } = ingredientsCard;

    let smoothieCard;
    if (ingredients) {
      smoothieCard = this.renderSmoothieCard(ingredients);
    }

    let saveButton;
    if (!ingredientsCard.saved) {
      saveButton = (
        <Button type="button" name="save-card" save={this.saveCard} />
      )
    }

    return (
      <div className="card">
        <h2 className="card__heading">Ingredient Card</h2>
          <ul className="card__list">
            {smoothieCard}
          </ul>
          {saveButton}
      </div>
    );
  }
}

module.exports = IngredientCard;

IngredientCard.propTypes = {
  ingredientsCard: React.PropTypes.object
};
