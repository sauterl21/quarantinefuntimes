import React, { Component } from "react"
import { Welcome, WelcomeInfo } from "../../components/Home/index.js";
import { PCard, RCard } from "../../components/Cards/index.js";
import Description from "../../components/Cards/styles.js"

export class Home extends Component {

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
    <br/>
    <PCard/> <Description>3 - 8 Players</Description>
    <br/>
    <br/>
    <RCard/> <Description>2 - 4 Players</Description>
    <WelcomeInfo />
    </div>
  )
}
}


export default Home
