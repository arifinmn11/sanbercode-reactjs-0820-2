import React, { Component } from "react";

class UseUnmount extends Component {
  componentWillUnmount() {
    console.log("remove");
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 5%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Sekarang jam : {this.props.date}
        </h1>
        <h1 style={{ textAlign: "center" }}>
          Hitung Mundur : {this.props.time}
        </h1>
      </div>
    );
  }
}

class Tugas11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100,
      date: this.timenow(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  timenow() {
    let hours = new Date().getHours();
    let h = "";
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let stat = "flex";
    hours >= 12 ? (h = hours - 12) : (h = hours);
    hours >= 12 ? (stat = "AM") : (stat = "PM");

    return `${h}:${min}:${sec} ${stat}`;
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: this.timenow(),
    });
  }

  render() {
    return (
      <>
        {this.state.time >= 0 ? (
          <UseUnmount date={this.state.date} time={this.state.time} />
        ) : null}
      </>
    );
  }
}

export default Tugas11;
