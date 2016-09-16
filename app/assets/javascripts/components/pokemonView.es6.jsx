class PokemonView extends React.Component {


  render() {
    return(
      <div id="all-pokes">
        {
          this.props.pokemon.map((pkmn, i) => {
            return (<Pokemon key={i} data={pkmn} descript={this.props.descript}/>)
          })
        }
      </div>
    )
  }

}
