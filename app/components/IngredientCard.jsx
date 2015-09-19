import React from 'react';

// Components ==============================
import Button from './parts/Button.jsx';
import ListItem from './parts/ListItem.jsx';
// =========================================

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);

    this.ingredientRender = this.ingredientRender.bind(this);
  }

  // TODO Add CSS Object to style dynamic colors.

  ingredientRender() {
    // TODO create function to extract cards. can then pass into btn
    let ingredientsCards = this.props.ingredients;
    let nodes;

    ingredientsCards.forEach(ingredientsCard => {
      let ingredients = ingredientsCard.ingredients;

      nodes = ingredients.map((ingredient, index) => {
        let props = {
          item: ingredient,
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
    let ingredients = this.props.ingredients;
    let renderIngredients = this.ingredientRender();

    let savedd = false;
    let renderSaveButton;
    if (savedd === false) {
      renderSaveButton = (
        <Button type="button" name="save-card" ingredients={ingredients} />
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
