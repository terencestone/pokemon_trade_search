class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      sprites: [],
      descriptions: []
    }
    this.addPokemon = this.addPokemon.bind(this)
    this.addDescription = this.addDescription.bind(this)
  }

  addPokemon(newPkmn) {
    this.setState({
      pokemon: [newPkmn.name].concat(this.state.pokemon),
      sprites: [newPkmn.sprite].concat(this.state.sprites)
    })
  }

  addDescription(description) {
    this.setState({
      descriptions: [description].concat(this.state.descriptions)
    })
  }


  render() {
    return (
      <div className="container">
        <SearchBar onSearch={this.addPokemon} descript={this.addDescription}/>
        <PokemonView pokemon={this.state.pokemon} sprite={this.state.sprites} descript={this.state.descriptions}/>
      </div>
    )
  }
}

