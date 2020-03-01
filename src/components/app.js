import { h, Component } from 'preact'

// TODO: Replace all of this
export default class App extends Component {
  async componentWillMount() {
    const eventResponse = await fetch('api/events')
    const events = await eventResponse.json()

    this.setState({
      events: events.events
    })
  }

  render() {
    const { events } = this.state
    if(!events) {
      return null
    } 

    return (
      <div id="app">
        <h1>Tree Tree Six</h1>
        { events.map((event, index) => (
          <div class="event">
            <h2>{event.summary}</h2>
            <h3>{event.description}</h3>
            <h4>{event.start.dateTime}</h4>
            <h4>{event.end.dateTime}</h4>
          </div>
        ))}
      </div>
    )
  }
}
