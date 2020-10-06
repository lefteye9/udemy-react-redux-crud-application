import React, { Component } from 'react';

//function App() {
  //return (
   //<div><h1>Hello World!</h1></div>
  //);
//}

// class App extends Component{
//   render(){
//     const greeting = "Hi!TOM!";
//   const dom = <h1 className="foo">{greeting}</h1>;
//     return dom;
//   }
// }

// class App extends Component{
//   render(){
//     return <input type="text" onChange={()=>{console.log("clicked");}}></input>
//   }
// }

class App extends Component{
  render(){
    return(
      <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={()=>{console.log("clicked");}} />
      </div>
    )
  }
}

// class App extends Component{
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello,World!!!"
//     );
//   }
// }

export default App;
