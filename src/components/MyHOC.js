import React from 'react';

const MyHOC = (WrappedComponent) => {
  return (props) => (
    <div className="wrapper">
      <WrappedComponent name="John" {...props} />
    </div>
  );
};

export default MyHOC;
