class Pokemon extends React.Component {



  render() {
    return(
      <div id="poke-info">
        <table>
          <tbody>
            <tr>
              <th colSpan="2">{this.props.data.name}</th>
            </tr>
            <tr>
              <td><img src={this.props.data.sprites.front_default} /></td>
              <td>{this.props.descript}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
