import React from 'react';

// Components ===============================
import GenerateSmoothie from './GenerateSmoothie.jsx'
import IngredientCard from './IngredientCard.jsx';

// Reflux ===================================
import CreateSmoothieStore from '../stores/CreateSmoothieStore.js';

// TODO Find out what is poisonous - place warning. Rhubarb leaves!!!

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      ingredients: []
    }

    this.handleCreateSmoothie = this.handleCreateSmoothie.bind(this);
  }

  componentWillMount() {
    this.findUnsubscribe = CreateSmoothieStore.listen(this.handleCreateSmoothie)
  }

  componentWillUnmount() {
    this.findUnsubscribe();
  }

  handleCreateSmoothie(res) {
    console.log(res);
    this.setState({
      ingredients: res
    });
  }

  render() {
    let ingredients = this.state.ingredients;

    return (
      <div className="main-container">
        <div className="section-upper">
          <div className="section-upper__header">
            <h1 className="section-upper__header--title">{this.props.title}</h1>
            <div className="section-upper__header--logo">
              <img src="" alt="" />
            </div>
          </div>

          <div className="section-upper__intro">
            <div className="section-upper__intro--heading">
              <h3>What Do you fancy Today?</h3>
            </div>
          </div>
        </div>

        <div className="section-mid">
          <GenerateSmoothie />

          <div className="section-mid__block">
            <IngredientCard ingredients={ingredients} />
          </div>
        </div>

      </div>
    );
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Smoothie Selector' };
