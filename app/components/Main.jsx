import React from 'react';
import Component from './Component.jsx';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  render() {
    return (
      <Component {...this.props } />
    )
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Main Title' };
