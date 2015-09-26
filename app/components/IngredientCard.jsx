import React from 'react';

// Components ===============================================
import Button from './parts/Button.jsx';
import ListItem from './parts/ListItem.jsx';

class IngredientCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderSmoothieCard = this.renderSmoothieCard.bind(this);
  }

  renderSmoothieCard(ingredients) {
    let card = ingredients.map((ingredient, index) => {
      return (
        <ListItem item={ingredient} key={index} />
      );
    });
    return card;
  }

  // TODO Add CSS Object to style dynamic colors.
  render() {
    let { ingredientsCard } = this.props;
    let { ingredients } = ingredientsCard;

    let smoothieCard;
    if (ingredients) {
      smoothieCard = this.renderSmoothieCard(ingredients);
    }

    return (
      <div className="card">
        <h2 className="card__heading">Ingredient Card</h2>
          <ul className="card__list">
            {smoothieCard}
          </ul>
      </div>
    );
  }
}

module.exports = IngredientCard;

IngredientCard.propTypes = {
  ingredientsCard: React.PropTypes.object
};
