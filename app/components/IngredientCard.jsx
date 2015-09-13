import React from 'react';

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('ingredients card', this.props);
    return (
      <div>
        <h2>Ingredient Card</h2>
      </div>
    )
  }
}

IngredientCard.propTypes = {

};
