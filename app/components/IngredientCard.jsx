import React from 'react';

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // TODO Add CSS Object to style dynamic colors.

  render() {
    let { ingredients } = this.props;
    let renderIngredients;

    renderIngredients = ingredients.map((item, index) => {
      return (
        <li className={'card__list--item card__list--item-' + index}>{item}</li>
      )
    });

    return (
      <div className="card">
        <h2 className="card__heading">Ingredient Card</h2>
          <ul className="card__list">
            {renderIngredients}
          </ul>
      </div>
    );
  }
}

IngredientCard.propTypes = {

};
