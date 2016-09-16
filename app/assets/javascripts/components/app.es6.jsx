class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      descriptions: ""
    }
    this.addPokemon = this.addPokemon.bind(this)
    // this.addDescription = this.addDescription.bind(this)
  }

  // componentDidMount() {
  //   // debugger
  //   let pkmn = this.state.pokemon[0].name
  //    $.ajax({
  //       url: `http://pokeapi.co/api/v2/pokemon-species/${pkmn}/`,
  //       method: 'get'
  //     })
  //     .done((response) => {
  //       this.setState({
  //         descriptions: response.flavor_text_entries[1].flavor_text
  //       })
  //     })
  // }

  addPokemon(newPkmn) {
    this.setState({
      pokemon: [newPkmn].concat(this.state.pokemon)
    })

    let pkmn = this.state.pokemon[0].name
     $.ajax({
        url: `http://pokeapi.co/api/v2/pokemon-species/${pkmn}/`,
        method: 'get'
      })
      .done((response) => {
        this.setState({
          descriptions: response.flavor_text_entries[1].flavor_text
        })
      })
  }

  // addDescription(description) {
    // debugger
    // this.setState({
    //   descriptions: description
    // })
    // // debugger
  // }

  render() {
    return (
      <div className="container">
        <SearchBar onSearch={this.addPokemon} descript={this.addDescription}/>
        <PokemonView pokemon={this.state.pokemon} descript={this.state.descriptions}/>
      </div>
    )
  }
}

