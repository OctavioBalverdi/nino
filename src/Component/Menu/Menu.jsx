import {  FileAddTwoTone ,CreditCardTwoTone, DollarTwoTone ,AppstoreTwoTone,BankTwoTone,LoadingOutlined,DingtalkOutlined} from '@ant-design/icons';
import { AutoComplete, Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
//import Form1 from '../FormCrud/formCrud1';
import List1 from '../list/list';



const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children,) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
    getItem('Productos', '1', <AppstoreTwoTone />, [
    getItem('Menzerna', '2',<LoadingOutlined />),
    getItem('Toxic shine', '3',<LoadingOutlined />),
    getItem('Full Car', '4',<LoadingOutlined />),
  ]),
  getItem('Ventas', '5', <DollarTwoTone />),
  getItem('Bancos', 'sub1', <BankTwoTone />, [
   getItem('Banco Macro', '6',<DingtalkOutlined />),
   getItem('Banco Frances', '7',<DingtalkOutlined />),
   getItem('Banco Nacion', '8',<DingtalkOutlined />),
   getItem('Banco Santiago Del Estero', '9',<DingtalkOutlined />)]),
  getItem('Tarjetas', 'sub2', <CreditCardTwoTone />,[
    getItem('Visa', '10'),
    getItem('MasterCard', '11'),
    getItem('Naranja', '12'),
    getItem('Maestro', '13')]),
  getItem('Files', '14', <FileAddTwoTone />),
];
const Menu1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> 
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Toxic Shine</Breadcrumb.Item>
            <Breadcrumb.Item>Productos</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <List1/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
       
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Menu1;