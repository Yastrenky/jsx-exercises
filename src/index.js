//
// 1) create a react app called jsx-exercises
// 2) delete src/App.* src/index.css src/logo.svg (del src/App.*)
// 3) In the index.js file, create a basic component similar to our HelloWorld component, call it whatever you like, and render some text out to the DOM.
// 4) Create a component that renders this JSX.
//
// <div className="book">
//   <div className="title">
//     The Title
//   </div>
//   <div className="author">
//     The Author
//   </div>
//   <ul className="stats">
//     <li className="rating">
//       5 stars
//     </li>
//     <li className="isbn">
//       12-345678-910
//     </li>
//   </ul>
// </div>
//
// 5) Make a copy of the the component from exercise 4, and replace the JSX with calls to React.createElement(). The output should be indentical.
//
// 6) Return the appropiate JSX from the following component so that when username is undefined or null,
// it renders 'Not logged in'.
//  When username is a string, render "Hello, username".
//
// function Greeting() {
//   // Try all of these variations
//   // var username = 'root';
//   // var username = undefined;
//   // var username = null;
//   // var username = false;
//   //
//   // Fill in the rest:
//   //
//   // return(...)
// }



import React from 'react';
import ReactDOM from 'react-dom';


function SooHappy() {
  var isHappy = true;
  return ( <
    div > {
      isHappy ? 'My first React app, soo happy!!' : 'Not soo Happy'
    } <
    /div>
  );
}

function FirstReactUsing() {
  return ( <
    span >
    <
    SooHappy / >
    <
    /span>
  );
}

function Book() {
  return(<
  div className = "book" >
    <
    div className = "title" >
    The title <
    /div> <
    div className = "author" >
    The author <
    /div> <
    ul className = "stats" >
    <
    li className = "rating" >
    5 stars <
    /li> <
    li className = "isbn" >
    12 - 345678 - 910 <
    /li> <
    /ul> <
    /div>
)
}
function Book1(){
  return(
  React.createElement('div',{className: 'book'},
       React.createElement('div',{className: 'title'},'The title'),
       React.createElement('div',{className: 'author'},'The author'),
       React.createElement('ul',{className: 'stats'},
                  React.createElement('li',{className: 'rating'},'5 stars'),
                  React.createElement('li',{className: 'rating'},'12 - 345678 - 910')

                         )

                     )
);
}

// function Greeting() {
//   // Try all of these variations
//   var username = 'root';
//   var username = undefined;
//   var username = null;
//   var username = false;
//
//   // Fill in the rest:
//
//   return(
// <span>{
// typeOf username
// }</span>
//
//
//
//   )
// }

ReactDOM.render( <
  Book1 / > ,
  document.querySelector('#CallofDuty')

)
