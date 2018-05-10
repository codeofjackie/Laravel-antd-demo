import React, { Component } from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { Layout } from 'antd';
import NavMenu from "../components/NavMenu";
import SideMenu from "../components/SideMenu";
import Page from "../components/Page";

const { Header, Sider } = Layout;

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
          <NavMenu/>
        </Header>
        <Layout style={{minHeight: '90vh'}}>
          <Sider style={{ background: '#fff' }}>
            <SideMenu/>
          </Sider>
          <Page/>
        </Layout>
      </Layout>
    </BrowserRouter >;
    }
}