import React, {Component, useEffect} from 'react'
import '../assets/css/index.css';
import reactDom from 'react-dom';


class ClockTime extends Component{

   constructor(props){
      super(props);
      this.state={date:new Date()};
   }

   componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
               
          <p class="white-font-clock">{this.state.date.toLocaleTimeString()}</p>
        
      );
    }
}

reactDom.render(
   <ClockTime/>, document.getElementById('clocktime')
);

//export default AlertUsers;
