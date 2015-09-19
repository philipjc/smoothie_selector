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
    let { ingredients } = this.props;
    let nodes = ingredients.map((ingredient, index) => {
      let props = {
        item: ingredient,
        key: index
      }
      return (
        <ListItem {...props} />
      )
    });
    return nodes;
  }

  render() {
    console.log('ingre card props ', this.props);
    let ingredients = this.props;
    let renderIngredients = this.ingredientRender();

    let saved = false;
    let renderSaveButton;
    if (saved === false) {
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
