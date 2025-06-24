import React from "react"

class Welcome extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          message : "Olá mundo", 
         
        }
    }
    render(){
        return <h1 style={{color: this.props.cor}}>{this.props.text}</h1>
    }
}

export default Welcome //(exportar so uma coisa)


