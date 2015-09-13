import React from 'react';

// Components ===============================
import GenerateSmoothie from './GenerateSmoothie.jsx'
import IngredientCard from './IngredientCard.jsx';

// Reflux ===================================
import SmoothieStore from '../stores/SmoothieStore.js';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      ingredients: [],
      type: ''
    }
    this.handleSmoothieStore = this.handleSmoothieStore.bind(this);
  }

  componentWillMount() {
    this.findUnsubscribe = SmoothieStore.listen(this.handleSmoothieStore)
  }

  componentWillUnmount() {
    this.findUnsubscribe();
  }

  // TODO - How to listen for different Store Actions?
  handleSmoothieStore(res) {
    if (Array.isArray(res)) {
      this.setState({
        ingredients: res
      });
    } else {
      this.setState({
        type: res
      });
    }
    console.log(res);
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

        <GenerateSmoothie find={this.state.type} />

        <div className="main-container__mid">
          <IngredientCard />
        </div>
      </div>
    );
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Smoothie Selector' };
