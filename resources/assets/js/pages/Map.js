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
        mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZW9mamFja2llIiwiYSI6ImNqaDc2dXE5OTA0OWEycXMwNHkxbzRhbjUifQ.dJofzeR0LJuNLOAEA_28Dw';
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [114.45, 30.57],
            zoom: 10.7
        });

        map.addControl(new mapboxgl.NavigationControl());//添加缩放控制器件

        var url = 'https://wanderdrone.appspot.com/';
        
        map.on('load', function () {
            window.setInterval(function() {
                map.getSource('drone').setData(url);
            }, 10000);

            map.addSource('drone', { type: 'geojson', data: url });
            map.addLayer({
                "id": "drone",
                "type": "symbol",
                "source": "drone",
                "layout": {
                    "icon-image": "rocket-15"
                }
            });

            map.on('click', 'drone', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                //var description = e.features[0].properties.description;
                var description = "这个点的坐标是"+coordinates[0]+" "+coordinates[1];

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'drone', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'drone', function () {
                map.getCanvas().style.cursor = '';
            });
        });
    }

    render() {
      return <div ref={el => this.mapContainer = el} style={mapstyle}></div>;
    }
}