import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter,Link, NavLink,Switch  } from 'react-router-dom';
import { Layout, Menu, Breadcrumb,Dropdown, Icon, Divider } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import Example from './Example';

var styles = {
    Width: "120px",
    Height: "31px",
    backGround: "rgba(255,255,255,.2)",
    Margin: "16px 28px 16px 0",
    Float: "left",
}

export default class MainLayout extends Component {
  Submit(){
    event.preventDefault();
    document.getElementById('logout-form').submit();
  }

    render() {
        const menu = (
          <Menu>
            <Menu.Item key="0">
              <a onClick={this.Submit}>登出</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">其他</Menu.Item>
          </Menu>
        );

        const NoMatch = ({ location }) => (
          <div>
            <h3>
              对不起，找不到 <code>{location.pathname}</code>
            </h3>
          </div>
        );

        return <BrowserRouter >
        <Layout>
        <Header className="header">
          <div className="logo" style={styles}/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <NavLink to={'/example'} activeClassName='active'>
                  <span className='glyphicon glyphicon-home'></span> 示例
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to={'/'} activeClassName='active'>
                  <span className='glyphicon glyphicon-home'></span> 空
              </NavLink>
            </Menu.Item>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" style={{float:"right"}}>
                {user_name} <Icon type="down" />
              </a>
            </Dropdown>
          </Menu>
          <form id="logout-form" action={`http://${document.location.host}/logout`} method="POST" style={{display: 'none'}}>
                    <input type="hidden" name="_token" value={csrf_token}/>
          </form>
        </Header>
        <Layout style={{minHeight: '90vh'}}>
          <Sider style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />子菜单 1</span>}>
                <Menu.Item key="1">子项1</Menu.Item>
                <Menu.Item key="2">子项2</Menu.Item>
                <Menu.Item key="3">子项3</Menu.Item>
                <Menu.Item key="4">子项4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />子菜单 2</span>}>
                <Menu.Item key="5">子项5</Menu.Item>
                <Menu.Item key="6">子项6</Menu.Item>
                <Menu.Item key="7">子项7</Menu.Item>
                <Menu.Item key="8">子项8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, 
                minHeight: 280,color: '#636b6f',fontFamily: 'Raleway, sans-serif',fontWeight: '100'}}>
                  <Switch>
                    <Route exact path={`/example`} component={ Example } />
                    <Route exact path={`/`} component={ null } />
                    <Route component={NoMatch} />{/*处理404*/}
                    {/* <Route path='/' component={ <div>什么也没有</div> } /> */}
                  </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </BrowserRouter >;
    }
}