import { Avatar, List } from 'antd';
import { Button, Space } from 'antd';
import View1 from '../View/View1';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const List1 = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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