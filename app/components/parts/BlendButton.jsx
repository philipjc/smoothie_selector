import React from 'react';

const propTypes = {
  blend: React.PropTypes.func,
  message: React.PropTypes.string
};

export default class BlendButton extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   return (
     <div className="section-upper__form--button">
       <div className="generate-button"
            onClick={this.props.blend}>
         Blend!!!!
         <span className="generate-button__message">{this.props.message}</span>
       </div>
     </div>
   );
 }
};

BlendButton.propTypes = propTypes;
