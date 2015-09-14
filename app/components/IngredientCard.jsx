import React from 'react';

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ingredients;

    for (let arr in this.props) {
      console.log('array', this.props[arr]);
      ingredients = this.props[arr].map(item => {
        return (
          <li>{item}</li>
        )
      })
    }

    return (
      <div>
        <h2>Ingredient Card</h2>
      <ul>
        {ingredients}
      </ul>
      </div>
    )
  }
}

IngredientCard.propTypes = {

};
