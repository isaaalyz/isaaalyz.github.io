import React from "react"
import './style.css'
 
export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: this.props.val
    }
  }


  addVal = (v) => {
    this.setState({
      val: parseInt(this.state.val) + v,
    })
  }

  render() {
    return (
      <div>
        <hr />
        <button onClick={() => this.addVal(-1)} className="b">-</button>
        <h1 className="t">{this.state.val}</h1>
        <button onClick={() => this.addVal(1)} className="b">+</button>
        <hr />
      </div>
    )
  }
}