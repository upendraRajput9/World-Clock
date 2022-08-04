import { Component } from 'react';

export default class Countdown extends Component {
  constructor(props) {
    super();
    this.state = {
      timerOn: false,
      timeforResume:false,
      timerStart: 0,
    };
  }
  setTimer = (key) => {
    let { timerStart, timerOn } = this.state;
    if (!timerOn) {
      switch (key) {
        case 'IncHour':
          this.setState({ timerStart: timerStart + 3600000 });
          break;
        case 'DecHour':
          this.setState({
            timerStart:
              timerStart >= 3600000 ? timerStart - 3600000 : timerStart,
          });
          break;
        case 'IncMin':
          this.setState({ timerStart: timerStart + 60000 });
          break;
        case 'DecMin':
          this.setState({
            timerStart: timerStart >= 60000 ? timerStart - 60000 : timerStart,
          });
          break;
        case 'IncSec':
          this.setState({ timerStart: timerStart + 1000 });
          break;
        case 'DecSec':
          this.setState({
            timerStart: timerStart >= 1000 ? timerStart - 1000 : timerStart,
          });
          break;
        default:
      }
    }
    console.log(this.state.timerOn)
  };

  start = () => {
    let { timerStart} = this.state;
    this.setState({
      timerOn:true,
      timeforResume:true,
      timerStart: timerStart,
    });
    this.watch = setInterval(() => {
      const newTime = this.state.timerStart - 10;
      if (newTime >= 0) {
        this.setState({
          timerStart: newTime,
        });
      } else {
        clearInterval(this.watch);
        this.setState({ timerOn: false,
            timeforResume:false, });
        alert('CountDown ended');
      }
    }, 10);
  };

stop=()=>{
    clearInterval(this.watch);
    this.setState({ timerOn: false });
}

reset=()=>{
    if (this.state.timerOn === false) {
        this.setState({
          timerStart: 0,
          timeforResume:false,
        });
      }
}

componentWillUnmount(){
    clearInterval(this.watch)
}
  render() {
    let { timerStart } = this.state;
    let seconds = ('0' + ((Math.floor(timerStart / 1000) % 60) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timerStart / 60000) % 60)).slice(-2);
    let hours = ('0' + (Math.floor(timerStart / 3600000) % 60)).slice(-2);

    return (
      <>
        <h2>Countdown</h2>
        <div>Hours : Minutes : Second</div>
        <div>
          <button onClick={() => this.setTimer('IncHour')}>⬆</button>
          <button onClick={() => this.setTimer('IncMin')}>⬆</button>
          <button onClick={() => this.setTimer('IncSec')}>⬆</button>
          <div className='screen-time'>
            {hours}:{minutes}:{seconds}
          </div>
          <button onClick={() => this.setTimer('DecHour')}>⬇</button>
          <button onClick={() => this.setTimer('DecMin')}>⬇</button>
          <button onClick={() => this.setTimer('DecSec')}>⬇</button>
        </div>
        {this.state.timerOn ? (
          <button onClick={() => this.stop()}>Stop</button>
        ) : (
          <div>
            <button onClick={() => this.start()}>
              {this.state.timeforResume?'Resume': 'Start'}
            </button>
            {this.state.timerStart > 0 ? (
              <button onClick={() => this.reset()}>Reset</button>
            ) : (
              ''
            )}
          </div>
        )}
      </>
    );
  }
}
