class PokemonView extends React.Component {


  render() {
    return(
      <div id="all-pokes">
        {
          this.props.pokemon.map((pkmn, i) => {
            return (<Pokemon key={i} name={pkmn} sprite={this.props.sprite[i]} descript={this.props.descript[i]}/>)
          })
        }
      </div>
    )
  }

}
