import React from 'react';
import Component from './Component';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  render() {
    return (
      <div className="">
        <Component {...this.props } />
      </div>
    )
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Main Title' };
