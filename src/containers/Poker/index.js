import React, { Component } from "react"
import { Welcome, WelcomeInfo, CanvaS } from "../../components/Poker/index.js";

export class PokerG extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  render() { 
  return (
    <div>
    <Welcome />
    <br></br>
    <CanvaS/>
    <WelcomeInfo />
    </div>
  )
}
}


export default PokerG
