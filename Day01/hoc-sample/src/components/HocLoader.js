import React from "react";

const HocLoader = (WrappedComponent,field) => {
  return class HocLoader extends React.Component {
    render() {
      console.log("DATA", this.props);
      return !this.props[field].length ? (
        <h1>Loading</h1>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default HocLoader;


// if(this.props[field].length==null)
// Loading
// else()
// Component


/**
 const HocLoader = (WrappedComponent, field) => {
  return function HocLoader(props) {
    console.log("DATA", props);
    return !props[field].length ? (
      <h1>Loading</h1>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};
 */