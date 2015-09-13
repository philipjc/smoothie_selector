import React from 'react';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Webpack React</h2>
      </div>
    )
  }
}

Component.propTypes = { title: React.PropTypes.string };
