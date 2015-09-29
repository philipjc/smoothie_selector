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
    this.trashSavedCard = this.trashSavedCard.bind(this);
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
    let card = this.props.ingredientsCard;
    Actions.saveThisCard(card);
  }

  trashSavedCard(e) {
    
  }

  // TODO Add CSS Object to style dynamic colors. Set default props?so don't ref twice.
  render() {
    console.log('card  props ', this.props);
    let { ingredientsCard, index } = this.props;
    let { ingredients } = ingredientsCard;

    let smoothieCard = smoothieCard = this.renderSmoothieIngredients(ingredients);

    let saveButton;
    let trashButton;
    if (!ingredientsCard.saved) {
      saveButton = (
        <Button type="button" name="save-card" save={this.saveCard} />
      )
    } else {
      trashButton = (
        <i className="fa fa-trash-o" onClick={this.trashSavedCard}></i>
      )
    }

    return (
      <div className="card">
        <h2 className="card__heading">Ingredient Card {trashButton}</h2>
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
