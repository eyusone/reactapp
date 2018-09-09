import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './main.css';

const Mainpage = Page => {
  return props =>
    (<div className='page'>

      <ReactCSSTransitionGroup
        transitionAppear
        transitionLeave={false}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'SlideIn'}
      >

        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>);
};

export default Mainpage;
