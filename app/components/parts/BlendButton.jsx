import React from 'react';

const propTypes = {
  name: React.PropTypes.string,
  blend: React.PropTypes.func
};

export default class BlendButton extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   return(
     <div className={'button-' + this.props.name}
          onClick={this.props.blend}>
       Blend!!!!
     </div>
   );
 }
};

BlendButton.propTypes = propTypes;
