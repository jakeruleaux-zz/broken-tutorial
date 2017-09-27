import React, { Component } from "react";
import Animated_Wrapper from "./Animated_Wrapper";

class HomeComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>Home</h1>
    <p>Hello Works!</p>
   </div>
  )
 }
}
const Home = Animated_Wrapper(HomeComponent);

export default Home;
