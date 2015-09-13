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
      <div className="main-container">
        <div className="main-container__header">
          <h1>{this.props.title}</h1>
        <div className="main-container__header-logo">
          <img src="" alt="" />
        </div>
        </div>

        <div className="main-container__upper">
          <Button type="generate" />
        </div>

        <div className="main-container__mid">
          <IngredientCard />
        </div>
      </div>
    );
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Smoothie Selector' };
