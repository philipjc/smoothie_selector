import React from 'react';

import Button from './parts/Button.jsx';

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // TODO Add CSS Object to style dynamic colors.

  render() {
    let saved = false;
    let { ingredients } = this.props;
    let renderIngredients;
    let renderSaveButton;

    renderIngredients = ingredients.map((item, index) => {
      return (
        <li className={'card__list--item card__list--item-' + index}>{item}</li>
      )
    });

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
