class SearchBar extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.getDescription = this.getDescription.bind(this)
  }

    handleSubmit(event) {
      event.preventDefault();
      let pkmn = this.refs.pkmnSearch.value
      $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pkmn}/`,
        method: 'get'
      })
      .done((response) => {
        this.props.onSearch({name: response.name, sprite: response.sprites.front_default})
      })
      $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon-species/${pkmn}/`,
        method: 'get'
      })
      .done((response) => {
        this.props.descript(response.flavor_text_entries[1].flavor_text)
      })
    }

  render() {
    return(
      <div>
        <h1>Look up a pokemon!</h1>

        <form onSubmit={this.handleSubmit} id="create-poke" action="/" method="get">
          <input ref="pkmnSearch" type="text" name="name" placeholder="type pokemon name" />
          <input type="submit" value="Gotta catch 'em all!" />
        </form>
      </div>
    )
  }
}

