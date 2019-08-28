import React, { Component } from 'react';
import './time_unit.css';

class TimeUnit extends Component {
    state = {
    deadline: "September,1, 2019",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };
  gameTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }
  componentDidMount() {
    setInterval(() => this.gameTimeUntil(this.state.deadline), 1000);
  }
    render(){
        return (
        <div className="contianer">
            <div className="sunday ">
                <h1>Sunday Service: Join Us this sunday</h1>
                <h3>At 10:00AM </h3>
                <div className="row timing">
                    <div className="col-3">
                        <h3>{this.state.days}</h3>
                        <h3>Days</h3>
                    </div>
                    <div className="col-3">
                        <h3>{this.state.hours}</h3>
                        <h3>hrs</h3>
                    </div>
                    <div className="col-3">
                        <h3>{this.state.minutes}</h3>
                        <h3>mins</h3>
                    </div>
                    <div className="col-3">
                        <h3>{this.state.seconds}</h3>
                        <h3>sec</h3>
                    </div>
               </div>
            </div>
        </div>
        );
    }
}

export default TimeUnit;
