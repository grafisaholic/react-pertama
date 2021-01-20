import React, {Component} from 'react'

class Api extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      data: []
    }
    
    this.state = this.initialState
  }

  componentDidMount() {
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result
        })
      })
  }

  render() {
    const {data} = this.state

    const rows = data.map((r, index) => {
      return <li key={index}>{r}</li>
    })

    return (
      <div>
        <h4>- Fetch Data Api</h4>
        <ul>{rows}</ul>
      </div>
    )
  }
}

export default Api