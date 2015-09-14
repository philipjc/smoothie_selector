import React from 'react';

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { ingredients } = this.props;
    let renderIngredients;

    renderIngredients = ingredients.map((item, index) => {
      return (
        <li className={'card__ingredient-' + index}>{item}</li>
      )
    });

    return (
      <div className="main-container__upper--block">
        <div className="card">
          <h2>Ingredient Card</h2>
            <ul>
              {renderIngredients}
            </ul>
        </div>
      </div>
    )
  }
}

IngredientCard.propTypes = {

};
