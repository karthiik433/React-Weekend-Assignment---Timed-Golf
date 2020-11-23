import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: 0,
      x: 0,
      y: 0,
      id : 0,
      renderBall:false
    };
      this.ballAppear=this.ballAppear.bind(this);
      this.moveBall=this.moveBall.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener("keydown",this.moveBall);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown",this.moveBall);
  }
  componentDidUpdate(){
    if(this.state.x===250 && this.state.y===250){
      //console.log("end");
      clearInterval(this.state.id);
      document.removeEventListener("keydown",this.moveBall);
    }
  }

  ballAppear() {
    //console.log(this.state.renderBall);
    this.setState({
      renderBall : true
    });
    this.state.id = setInterval(()=>{
      //console.log("karthik");
        this.setState({
          time: this.state.time + 1,
        })
    },1000);
  }
  moveBall(evnt){
    if(this.state.renderBall){
     // console.log(evnt);
      if(evnt.keyCode === 37){
        this.setState({
          x:this.state.x - 5,
        });
      }else if(evnt.keyCode === 38){
        this.setState({
          y : this.state.y - 5, 
        })
      }else if(evnt.keyCode === 39){
        this.setState({
          x : this.state.x + 5,
        })
      }else if(evnt.keyCode === 40){
        this.setState({
          y : this.state.y + 5,
        })
      }
    }
  }

  render() {
    return (
 <>
   {this.state.renderBall ? 
   <div className="ball"
   style={{
     position: "absolute",
     top: this.state.y+"px",
     left: this.state.x+"px"
   }}></div> : (<button className="start" onClick={this.ballAppear}>start</button>)
  }
    <div className="heading-timer">{this.state.time}</div>
    <div className="hole"></div>
  
</>
    );
  }
}

export default Timer;
