import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {increment,decrement} from '../actions'


class App extends Component {
  render(){
    const props = this.props

  return(
    <React.Fragment>
    <div>value:{props.value}</div>
    <buttorn onClick={props.increment}>+1</buttorn>
    <buttorn onClick={props.decrement}>-1</buttorn>
    </React.Fragment>
  )
  }
}

//stateを引数に変化した値を返す。countはexport default combineReducers{(count)}で設定
const mapStateToProps = state =>({value:state.count.value})

//dipatch（発信する）を引数にincrement,decrementをキーにincrement,decrement関数を返す
const mapDispatchToProps = dispatch =>( {
  increment: ()=> dispatch(increment()),
  decrement: ()=> dispatch(decrement())
} )

//ショートハンド
// const mapDispatchToProps = dispatch = ({increment,decrement})

export default connect(mapStateToProps,mapDispatchToProps)(App)


// const App2 = () => (<Counter></Counter>)

// class Counter extends Component {
//   constructor(props){
//     super(props)
//     console.log(this.state);
//     this.state = {count: 0}
//   }

  // hundlePlusButton = () => {
  //   console.log("hundlePlusButton")
  //   console.log(this.state.count);
  //   // const currentCount = this.state.count;
  //   this.setState(
  //     // {count: currentCount +1}
  //     {count: this.state.count +1}
  //   )
  // }

  // hundleMinusButton = () => {
  //   console.log('Minus');
  //   this.setState({count: this.state.count -1})
  // }
?

// const App2 = () => {
//   return(
//     <div>
//       <User name={"Taro"} age={"10"}/>
//       <User name={"Hanako"}/>
//     </div>
//   )
// }

// const App2 = () => {
// const profiles = [
//   {name:"Taro",age: 10},
//   {name:"Hanako",age: 20},
//   {name:"Himawari"}
// ]

// return(
//   <div>
//     {
//       profiles.map((profile,index) => {
//         console.log(profile); //profileは配列を順番に取り出したものが入る。
//         console.log(index); //第二引数には配列の順番が自動的に入る。
//         return <User name={profile.name} age={profile.age} key={index}/>
//       })
//     }
//   </div>
// )
//   }

// const User = (props) => {
// return <h1>Hello,I'm {props.name},{props.age}years old!</h1>
// }

// User.defaultProps = {age:1};

// User.PropTypes = {
//   name:PropTypes.string,
//   age:PropTypes.number.isRequired
// }

// const App2 = () =>{
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   )
//   }

//   const Cat = () =>{
//     return(
//       <div>Meow</div>
//     )
//   }

// class App2 extends Component{
//   render(){
//   //   const greeting = "Hello World!";
//   // const dom = <h1 className="foo">{greeting}</h1>;
//   return(
//   // <div>
//   <React.Fragment>
//   <label htmlFor="bar">bar</label>
//   <input type="text" value="aaa" onClick={()=>{console.log("I'm clicked")}} />;
//   {/* </div> */}
//   </React.Fragment>)
//   }
// }

export default App;


// const App = () => {

//   const profiles = [
//     {name:"Taro" ,age:10},
//     {name:"Hanako" ,age:5}
//   ]
//   return(
//   <div>
//     {
//     profiles.map( (profile) => {
//       console.log(profile);
//       return <User name={profile.name} age={profile.age} />
//     })
//   }
//   </div>
//   )
// }

const array1 = [1,3,5,7,9];
console.log(array1);

const array2 = array1.map( (num) => {
  console.log(num);
  return num*3;
})
console.log(array2);


// // const string1 = "あああ";

// // const string2 = string1.length( (num) => {
// //   return num * 1111;
// // })

// // console.log(string2);

// const array4 = [1,3,5,7,9];
// const MyFunc = (num) => {return num*3};

// const array5 = array4.map(MyFunc);

// console.log(array5);







{/* //   <div>
//     <User name={"Taro"} age={10} />
//     <User name={"Hanako"} age={5} />

//     </div>
//   )
// } */}



// const User = (props) =>{
//   // console.log(props);
// return <div>I"m {props.name}.{props.age}years old!</div>
// };




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

// class App extends Component{
//   render(){
//     return(
//       <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=>{console.log("clicked");}} />
//       </div>
//     )
//   }
// }

// class App extends Component{
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello,World!!!"
//     );
//   }
// }

// export default App;
