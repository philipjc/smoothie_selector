import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  render() {
    let type = this.props.type;
    if (type === 'generate') {
      return (
        <div className={'button__' + this.props.type}>
          Button
        </div>
      )
    } else {
      return (
        <button type={this.props.type} className={'button__' + this.props.type}>
          Not generate
        </button>
      )
    }
  }
}

Button.propTypes = {
  type: React.PropTypes.string
}
