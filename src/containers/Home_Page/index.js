import React, { Component } from "react"
import { Welcome, WelcomeInfo } from "../../components/Home/index.js";
import { MCard, SCard } from "../../components/Cards/index.js";

class Form extends Component {

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
    <MCard/>
    <SCard/>
    <WelcomeInfo />
    </div>
  )
}
}


export default Form
