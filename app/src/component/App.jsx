import { Component } from 'react'
import StopWatch from './StopWatch'
import Countdown from './Countdown'

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      showStopWatch: false,
      showCountdown: false,
    }
  }

  render() {
    return (
      <main className='container'>
        <header>
          <h1>🚀 Timer</h1>
        </header>
        <section>
          <article>
          {this.state.showStopWatch ? <StopWatch /> : ''}

          {this.state.showStopWatch?<p onClick={() =>
              this.setState((prevState) => ({
                showStopWatch: !prevState.showStopWatch,
              }))
            }>✖️</p>:
          <button
            onClick={() =>
              this.setState((prevState) => ({
                showStopWatch: !prevState.showStopWatch,
              }))
            }
          >
            Show StopWatch
          </button>
          }
          </article>
          <article>
          {this.state.showCountdown ? <Countdown /> : ''}

          {this.state.showCountdown?<p onClick={() =>
              this.setState((prevState) => ({
                showCountdown: !prevState.showCountdown,
              }))
            }>✖️</p>:
          <button
            onClick={() =>
              this.setState((prevState) => ({
                showCountdown: !prevState.showCountdown,
              }))
            }
          >
            Show Countdown
          </button>
  }
  </article>
        </section>
      </main>
    )
  }
}


