import React,{Component} from 'react';
import { Route, Switch  } from 'react-router-dom';
import { Layout,Breadcrumb, Slider } from 'antd';

import Map from "../pages/Map";
import _404 from '../pages/_404';
import  SliderChart from '../pages/SliderChart';

const { Content } = Layout;

export default class SideMenu extends Component {

    render(){
        var MapCanvas = ()=><Map id="Mymap"/>;

        return <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff',
            padding: 0, margin: 0, 
            minHeight: 200,
            color: '#636b6f',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '100',
            border:'0px',
            
            flex: "2 1 0",
            flexDirection:"column"
        }}>
                <Switch>
                <Route exact path={`/`} component={ null } />
                <Route exact path={`/map`} component={ MapCanvas }  />
                <Route exact path={`/chart`} component={ SliderChart }  />
                <Route component={ _404 } />{/*处理404*/}
                </Switch>
        </Content>
        </Layout>;
    }
}