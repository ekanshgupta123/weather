import React,{ Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {field: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSumbit = this.handleSumbit.bind(this)
  }

  handleSumbit(event){
    const{ field } = this.state
    this.setState({field})

    let API_Call = `https://api.openweathermap.org/data/2.5/weather?zip=${field},us&appid=384530a26df84465ffe7e9419c8ef8db&units=imperial`

    fetch(API_Call)
      .then(response => {
        return response.json()
      })

      .then(data => {
        this.setState({
          city: data.name,
          temperature : data.main.temp
        })
      })


      event.preventDefault()


  }

  handleChange(event){
    this.setState({
        [event.target.name] : event.target.value
    })
}

render() {
  return(
    <form onSubmit={this.handleSumbit}>
      <input name = 'field'  type="text" onChange={this.handleChange} placeholder = 'zip code' value = {this.state.field} />
      <button> Submit </button>

      <div>
        <h3> City name: {this.state.city}</h3>
        <h3> Temperature: {this.state.temperature} </h3>
      </div>
    </form>

  )
}






}
export default App;
