import React,{Component} from 'react';
import { NavLink  } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

export default class NavMenu extends Component {
  Submit(){
    document.getElementById('logout-form').submit();
  }

  render(){
    const menu = <Menu>
        <Menu.Item key="0">
          <a onClick={this.Submit}>登出</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">其他</Menu.Item>
      </Menu>;

      return <div>
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <NavLink   to={'/map'} activeClassName='active'>
            地图
        </NavLink  >
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={'/'} activeClassName='active'>
          空
        </NavLink>
      </Menu.Item>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" style={{float:"right"}}>
          {window.Laravel.user_name} <Icon type="down" />
        </a>
      </Dropdown>
    </Menu>
    <form id="logout-form" action={`http://${document.location.host}/logout`} method="POST" style={{display: 'none'}}>
              <input type="hidden" name="_token" value={window.Laravel.csrf_token}/>
    </form>
    </div>;
  }
}