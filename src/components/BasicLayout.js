import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import ContentBoxModules from "./ContentBox";

import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';

const { Header, Content, Footer } = Layout;

class BasicLayout  extends Component {
    state = {
        loading: false,
    };
    render() {
        const { loading } = this.state;
        return(
            <Layout className="layout">
                <Header>
                    <div className="logo" >
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Edit</Menu.Item>
                        <Menu.Item key="4">Logout</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 30, minHeight: 840}}>
                        <div>
                            <Avatar size={64} icon="user" />
                        </div>
                        <h2>Lakshika Athapaththu</h2>
                        <div>
                            <ContentBoxModules ></ContentBoxModules>
                            <h1>{this.props.allAodules}</h1>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>LMS ©2019 Created by Lakshi</Footer>
            </Layout>




        )
    }

}

export default BasicLayout
