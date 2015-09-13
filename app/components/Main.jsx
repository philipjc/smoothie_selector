import React from 'react';

// Components ===============================
import GenerateSmoothie from './GenerateSmoothie.jsx'
import IngredientCard from './IngredientCard.jsx';

// Reflux ===================================
import SmoothieStore from '../stores/SmoothieStore.js';

// TODO Find out what is poisonous - place warning. Rhubarb leaves!!!

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      ingredients: []
    }

    this.handleSmoothieStore = this.handleSmoothieStore.bind(this);
  }

  componentWillMount() {
    this.findUnsubscribe = SmoothieStore.listen(this.handleSmoothieStore)
  }

  componentWillUnmount() {
    this.findUnsubscribe();
  }

  handleSmoothieStore(res) {
    console.log(res);
    this.setState({
      ingredients: res
    });
  }

  render() {
    let ingredients = this.state.ingredients;

    return (
      <div className="main-container">
        <div className="main-container__header">
          <h1>{this.props.title}</h1>
        <div className="main-container__header-logo">
          <img src="" alt="" />
        </div>
        </div>

        <div className="main-container__upper">
          <GenerateSmoothie />
        </div>

        <div className="main-container__mid">
          <IngredientCard ingredients={ingredients} />
        </div>
      </div>
    );
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Smoothie Selector' };
