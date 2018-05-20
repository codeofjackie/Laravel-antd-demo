import React from 'react';
import ReactDOM from 'react-dom';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet } from  'bizcharts';


var data = [];
let chart;
const scale = {
    time: {
        alias: '时间',
        type: 'time',
        mask: 'MM:ss',
        tickCount: 10,
        nice: false
    },
    temperature: {
        alias: '平均温度(°C)',
        min: 10,
        max: 35
    },
    type: {
        type: 'cat'
    }
}

export default class SliderChart extends React.Component {
    constructor() {
        super();
        this.state = {data}
    }

    componentDidMount() {
        setInterval( ()=> {
            var now = new Date();
            var time = now.getTime();
            var temperature1 = ~~(Math.random() * 5) + 22;
            var temperature2 = ~~(Math.random() * 7) + 17;
            if (data.length >= 200) {
                data.shift();
                data.shift();
            }
            data.push({
                time: time,
                temperature: temperature1,
                type: '记录1'
            });
            data.push({
                    time: time,
                    temperature: temperature2,
                    type: '记录2'
                });
            this.setState({data});
        }, 1000);
    }
    render() {
        return <Chart style={{height:"100%", width:"100%"}} data={data} scale={scale} forceFit onGetG2Instance={(g2Chart)=> {chart=g2Chart;}} >
                <Tooltip />
                {data.length !== 0 && <Axis />}
                <Legend />
                <Geom type="line" position="time*temperature" color={['type', ['#ff7f0e', '#2ca02c']]} shape="smooth" size={2} />
            </Chart>;
    }
}
