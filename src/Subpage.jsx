import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

class SubpageComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>Subpage</h1>
    <p>Subpage works!</p>
   </div>
  )
 }
}
const Subpage = AnimatedWrapper(SubpageComponent);

export default Subpage;
