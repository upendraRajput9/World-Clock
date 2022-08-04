import { Component } from "react";

export default class StopWatch extends Component {
    constructor(props) {
      super()
      this.state = {
        timeOn: false,
        timeStart: 0,
      }
    }
    start = () => {
      this.watch = setInterval(() => {
        this.setState((prevState) => ({ timeStart: prevState.timeStart + 1 }))
      }, 10)
      this.setState({
        timeOn: true,
      })
    }
    stop = () => {
      this.setState({
        timeOn: false,
      })
      clearInterval(this.watch)
    }
    reset = () => {
      this.setState({
        timeStart: 0,
      })
    }
    componentWillUnmount() {
      clearInterval(this.watch)
    }
    render() {
      let { timeStart } = this.state
      let centiseconds = ('0' + (Math.floor(timeStart / 10) % 100)).slice(-2)
      let seconds = ('0' + (Math.floor(timeStart / 1000) % 60)).slice(-2)
      let minutes = ('0' + (Math.floor(timeStart / 60000) % 60)).slice(-2)
      let hours = ('0' + Math.floor(timeStart / 3600000)).slice(-2)
      return (
        <>
          <h2>Stopwatch</h2>
          <span>{`${hours}:${minutes}:${seconds}:${centiseconds}`}</span>
          {this.state.timeOn ? (
            <button onClick={() => this.stop()}>Stop</button>
          ) : (
            <div>
              <button onClick={() => this.start()}>
                {this.state.timeStart <= 0 ? 'Start' : 'Resume'}
              </button>
              {this.state.timeStart > 0 ? (
                <button onClick={() => this.reset()}>Reset</button>
              ) : (
                ''
              )}
            </div>
          )}
        </>
      )
    }
  }
  