import React, { Component } from 'react';



function Situation(props){
  if(props.money >= 50000){
  return <p>Votre revenu est modeste</p>;
}
return <p>votre revenu est faible</p>
}

class Simulateur extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {money: ""};
  }
  handleChange(e){
    this.setState({money: e.target.value});
  }
  render(){
    const money = this.state.money;
    return (
    <div>
      <fieldset>
        <legend>Simulateur de situation financiere</legend>
        <input value={money} onChange= {this.handleChange}/>
      </fieldset>
      <Situation money={money}/>
    </div>
    );
  }
}

export default Simulateur ;
