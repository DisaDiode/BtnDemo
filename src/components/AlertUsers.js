import React, {Component, useEffect} from 'react'
import '../assets/css/index.css';
import reactDom from 'react-dom';
import alersound from '../assets/sounds/alertsound.wav'

class AlertUsers extends Component{

   constructor(props){
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
        
      }; 
   }

   componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        5000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
 
      fetch("http://192.168.0.200:9099/api/TbBtncartelera")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        },
        )
       
      
    }
  
    render() {
    //  var ChirpChirp = new Audio (alersound);
     
      const { error, isLoaded, items } = this.state;
      
      
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       
        <div>
          
         {items.map((item,i)=>{
                   
                    console.log(item.nameClient)
                    return(
                        <div class="divalert blink_me" key={i} >
                          <div class="texttitlealert">
                            {item.nameClient}
                          </div>
                          <div class="textbodyalert">
                            <br></br>
                            epa
                           Dirección:  {item.address}  <br></br>
                           Teléfono:  {item.phoneNumber} <br></br>
                           Ciudad: {item.info}<br></br>
                           <br></br>
                           ¡ALERTA! 
                          </div>
                        </div>
                    )
                })}
         
       
      </div>
      
      );
     
    }
    
    }
}

reactDom.render(
   <AlertUsers/>, document.getElementById('alerttext')
);

//export default AlertUsers;
