import React from 'react';

// Components ==============================
import Button from './parts/Button.jsx';
import ListItem from './parts/ListItem.jsx';
// =========================================

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);

    this.ingredientsRender = this.ingredientsRender.bind(this);
  }

  // TODO Add CSS Object to style dynamic colors.

  ingredientsRender() {
    // TODO create function to extract cards. can then pass into btn
    let ingredientsCards = this.props.ingredients;
    let nodes;

    ingredientsCards.forEach(card => {
      let ingredients = card.ingredients;
      let saved = card.saved;
      console.log('single card ', card);

      nodes = ingredients.map((ingredient, index) => {
        let props = {
          item: ingredient,
          saved: saved,
          key: index
        }
        return (
          <ListItem {...props} />
        )
      });
    });
    return nodes;
  }

  // TODO passing ingredietsn into btn. pass through func to extract obj?
  render() {
    console.log('ingredient card props', this.props);
    let ingredients = this.props;
    let [ card ] = this.props.ingredients;
    let { saved } = card;
    console.log('card', card);
    let renderIngredients = this.ingredientsRender();

    let renderSaveButton;
    if (saved === false) {
      renderSaveButton = (
        <Button type="button" name="save-card" ingredients={card} />
      );
    }

    return (
      <div className="card">
        <h2 className="card__heading">Ingredient Card</h2>
          <ul className="card__list">
            {renderIngredients}
          </ul>
          {renderSaveButton}
      </div>
    );
  }
}

IngredientCard.propTypes = {

};
