import React from 'react';

const propTypes = {
  reblend: React.PropTypes.func
};

export default class ReBlend extends React.Component {
 constructor(props) {
   super(props);

 }

 render() {
   return(
     <div className="card__refresh"
          onClick={this.props.reblend}>

          <div className="card__refresh--text">
            <span>Reblend.</span><br/>
            <span>Keep ticked</span>
          </div>
          <div className="card__refresh--btn">
            <i className=" fa fa-refresh"></i>
          </div>
     </div>
   );
 }
};

ReBlend.propTypes = propTypes;
