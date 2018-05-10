import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

const mapstyle = {
  border:0,
  width :"100%",
  height:"100%",
}

export default class Map extends Component {  

    constructor(props, context) {
        super(props, context);
        this.print = this.print.bind(this);
        this.state = {
    
        };
    }

    componentDidMount() {
        this.print();
    }

    print(){
      mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2lqbmpqazdlMDBsdnRva284cWd3bm11byJ9.V6Hg2oYJwMAxeoR9GEzkAA'
      var map = new mapboxgl.Map({
          container: 'themap',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [114.45, 30.57],
          zoom: 10.7
      });
    }

    render() {
      return <div id="themap" ref="themap" style={mapstyle}></div>;
    }
}