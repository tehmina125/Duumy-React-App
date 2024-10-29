import React from 'react';

class Did extends React.Component {
  constructor(){
    super();
    console.warn("constructer")
    
  }
  componentDidMount(){
  console.warn("componentDidMount")
  }
  render() {
    console.warn("render")
    return (
      <div>
        <h1 className='text-2xl'>Hello, Component Did Mount!</h1>
      </div>
    );
  }
}

export default Did;
