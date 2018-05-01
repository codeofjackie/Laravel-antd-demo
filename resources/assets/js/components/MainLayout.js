import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Divider } from 'antd';
import { Route,BrowserRouter  } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'; 
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
    

    render() {
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
                  <span className='glyphicon glyphicon-home'></span> Example
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to={'/'} activeClassName='active'>
                  <span className='glyphicon glyphicon-home'></span> None
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{minHeight: '90vh'}}>
          <Sider style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
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
                minHeight: 280,color: '#636b6f',fontFamily: 'Raleway, sans-serif',fontWeight: '100'
                // ,height: '100vh' 
                }}>
                  <div>
                    <Route exact path='/example' component={ Example } />
                    {/* <Route path='/' component={ <div>什么也没有</div> } /> */}
                  </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </BrowserRouter >;
    }
}