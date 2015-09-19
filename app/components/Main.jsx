import React from 'react';

// Reflux ============================================
import CreateSmoothieStore from '../stores/CreateSmoothieStore.js';
import SavedStore from '../stores/SavedStore.js';
// ===================================================

// Components ========================================
import GenerateSmoothie from './GenerateSmoothie.jsx'
import IngredientCard from './IngredientCard.jsx';
import SavedSmoothies from './SavedSmoothies.jsx';
// ===================================================

// TODO Find out what is poisonous - place warning. Rhubarb leaves!!!

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      ingredients: [],
      storedCards: []
    }

    this.handleCreateSmoothie = this.handleCreateSmoothie.bind(this);
    // this.handleSavedSmoothie = this.handleSavedSmoothie.bind(this);
  }

  componentWillMount() {
    this.createUnsubscribe = CreateSmoothieStore.listen(this.handleCreateSmoothie);
    // this.saveUnsubscribe = SavedStore.listen(this.handleSavedSmoothie);
  }

  componentWillUnmount() {
    this.createUnsubscribe();
    // this.saveUnsubscribe();
  }

  // TODO make state.ingredients array of strings again. add saved prop if saving?
  handleCreateSmoothie(res) {
    let state = this.state.ingredients;
    state.pop();
    state.push(res);

    this.setState({
      ingredients: state
    });
  }

  // handleSavedSmoothie(res) {
  //
  // }

// TODO Use props? expect an Array for save and create.
  render() {
    let cards = this.state.storedCards;
    let ingredients = this.state.ingredients;
    console.log('main render ', ingredients);

    return (
      <div className="main-container">

        <div className="section-upper">
          <div className="row">
            <div className="section-upper__header">
              <h1 className="section-upper__header--title">{this.props.title}</h1>
              <div className="section-upper__header--logo">
                <img src="" alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="section-upper__intro">
              <div className="section-upper__intro--heading">
                <h3>What Do you fancy Today?</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="section-mid">

          <div className="row">
            <GenerateSmoothie />
          </div>

          <div className="row">
            <div className="section-mid__block">
              <IngredientCard ingredients={ingredients} />
            </div>
          </div>

          <div className="row">
            <SavedSmoothies cards={cards} />
          </div>


        </div>

      </div>
    );
  }
}

Main.propTypes = {
  title: React.PropTypes.string,
  ingredients: React.PropTypes.array,
  storedCards: React.PropTypes.array
};
Main.defaultProps = {
  title: 'Smoothie Selector'
};
