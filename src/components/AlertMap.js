import React, {PureComponent, useEffect, useRef,useState} from 'react'
import reactDom from 'react-dom';
import '../assets/css/index.css';
import mapboxgl from 'mapbox-gl';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import alersound from '../assets/sounds/alertsound.wav'
mapboxgl.accessToken = 'pk.eyJ1IjoiZGlzYXJ0ZWNoIiwiYSI6ImNrb2xqOTA0dDAwNmoyd3N5Zmp4d2lpdjEifQ.0jTOMiTvjN8TeLntYvzcaQ';

const div =null;

class AlertMap extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
    lng: -70.9,
    lat: 42.35,
    zoom: 9, 
    error: null,
    isLoaded: false,
    itemsmap: [],
   
    
    };
    this.mapContainer = React.createRef();
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
              itemsmap: result,
            
           
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          
          )
          if(this.state.itemsmap.length!=0){
          var map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.itemsmap[0].longitude, this.state.itemsmap[0].latitude],
            zoom: 15
            });
            const marker=[]
          this.state.itemsmap.forEach(element => {
   
            console.log(element.oid)
             marker[element.oid] = new mapboxgl.Marker()
            .setLngLat([element.longitude, element.latitude])
            .addTo(map);
          });
          }

      }
    
    render(){
     
      var ChirpChirp = new Audio (alersound);
      if(this.state.itemsmap.length!=0){
        ChirpChirp.play()
        return(
        
            
            <div ref={this.mapContainer} className="map-container"></div>
            
          );
      }else if(this.state.itemsmap.length==0){
     
        return(
        <img src={logo} className="App-logo" alt="logo" />
        );
      }
    }
}

reactDom.render(
<AlertMap/>, document.getElementById('rootmap')
);

