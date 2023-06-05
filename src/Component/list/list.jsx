import { Avatar, List } from 'antd';
import { Button, Space } from 'antd';
import View1 from '../View/View1';
const data = [
  {
    title: 'Ceras Liquidas',
  },
  {
    title: 'Selladores',
  },
  {
    title: 'Minis',
  },
  {
    title: '250',
  },
];
const List1 = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Productos de Exelencia"
        />
        <Space wrap>
        <View1></View1>
        <Button type="primary">Nuevo</Button>
        <Button type="primary" danger>Borrar</Button>
        </Space>
        

      </List.Item>
    )}
  />
);
export default List1;