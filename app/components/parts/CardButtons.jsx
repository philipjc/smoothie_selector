import React from 'react';

const propTypes = {
  name: React.PropTypes.string,
  save: React.PropTypes.func,
  trash: React.PropTypes.func
};

export default class CardButtons extends React.Component {
 constructor(props) {
   super(props);

 }

 render() {
   return(
     <div className="card__buttons">
       <ul className={'card__buttons--' + this.props.name}>
         <li className="btn"
             onClick={this.props.save}>
             <i className="fa fa-save"></i>
         </li>
         <li className="btn"
             onClick={this.props.trash}>
             <i className="fa fa-trash-o"></i>
         </li>
      </ul>
     </div>
   );
 }
};

CardButtons.propTypes = propTypes;
