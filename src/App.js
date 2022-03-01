import React, {Component} from 'react'


class Calc extends Component{

  // State vem aqui
  state = {
    n1: '',
    n2: '',
    result: ''
  }


  handleChangeUm = (event) =>{
    this.setState({
      n1: event.target.value
    })
  }
  handleChangeDois = (event) =>{
    this.setState({
      n2: event.target.value
    })
  }

  mult = () =>{
    const{n1, n2} = this.state
    this.setState({
      result: Number(n1) * Number(n2)
    })
  }
  soma = () =>{
    const{n1, n2} = this.state
    this.setState({
      result: Number(n1) + Number(n2)
    })
  }
  sub = () =>{
    const{n1, n2} = this.state
    this.setState({
      result: Number(n1) - Number(n2)
    })
  }
  divisao = () =>{
    const{n1, n2} = this.state
    this.setState({
      result: Number(n1) / Number(n2)
    })
  }
  // lompar = () =>{
  //   const{n1, n2, result} = this.state
  //   this.setState({

  //   })
  // }



  render(){
    return(
      <div className='container'>
        <label htmlFor="numero1">Primeiro numero</label>
        <input onChange={this.handleChangeUm} type="number" />
        <label htmlFor="numero2">Segundo numero</label>
        <input onChange={this.handleChangeDois} type="number" />

      <button onClick={this.mult}>*</button>
      <button onClick={this.divisao}>/</button>
      <button onClick={this.sub}>-</button>
      <button onClick={this.soma}>+</button>
      <button onClick={this.limpar}>limpar</button>
      <h2>{this.state.result}</h2>
      </div>
    )
  }
}

export default Calc