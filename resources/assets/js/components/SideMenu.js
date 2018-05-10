import React,{Component} from 'react';
import { NavLink  } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faMap,faTachometerAlt} from '@fortawesome/fontawesome-free-solid'

import { Menu, Icon } from 'antd';

const {SubMenu} = Menu;

export default class SideMenu extends Component {
    render(){
        return <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" title={<span><FontAwesomeIcon icon={faTachometerAlt} />　仪表盘</span>}>
          <Menu.Item key="1">
            <NavLink   to={'/map'} activeClassName='active'>
            <FontAwesomeIcon icon={faMap} />　地图
            </NavLink  >
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink   to={'/'} activeClassName='active'>
                空
            </NavLink  >
          </Menu.Item>
          <Menu.Item key="3">子项3</Menu.Item>
          <Menu.Item key="4">子项4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="laptop" />子菜单 2</span>}>
          <Menu.Item key="5">子项5</Menu.Item>
          <Menu.Item key="6">子项6</Menu.Item>
          <Menu.Item key="7">子项7</Menu.Item>
          <Menu.Item key="8">子项8</Menu.Item>
        </SubMenu>
      </Menu>;
    }
}