import React from 'react';

// Components ===============================
import Button from './Button';
import IngredientCard from './IngredientCard';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  render() {
    return (
      <div className="main__container">
        <h1>{this.props.title}</h1>
        <Button type="generate" />
        <IngredientCard />
      </div>
    );
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Smoothie Selector' };
