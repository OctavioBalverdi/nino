import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useState } from 'react';
import './formCrudcss.css'
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Form1 = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Categoria" name="disabled" valuePropName="checked">
          <Checkbox>Responsable Inscripto</Checkbox>
          <Checkbox>Monotributista</Checkbox>
        </Form.Item>
        <Form.Item label="Facturacion">
          <Radio.Group>
            <Radio value="FacA"> Factura: A </Radio>
            <Radio value="FacB"> Factura: B </Radio>
            <Radio value="FacC"> Factura: C </Radio>
            <Radio value="FacE"> Factura: E </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="Seleccionar">
          <Select>
            <Select.Option value="CUIT">CUIT</Select.Option>
          </Select>
          </Form.Item>
          <Form.Item label="Ingrese NRO.">
          <Input />

          </Form.Item>
          
        <Form.Item label="IVA">
          <TreeSelect
            treeData={[
              {
                title: 'Resp Inscripto',
                value: 'Resp Inscripto',
                
              },
              {
                title: 'No Resp',
                value: 'No Resp',
                
              },
              {
                title: 'Mono Socia',
                value: 'Mono Socia',
                
              },
              {
                title: 'Exento',
                value: 'Exento',
                
              },
              {
                title: 'Resp Mono',
                value: 'Resp Mono',
                
              },
              {
                title: 'Consumidor Final',
                value: 'Consumidor Final',
                children: [
                  {
                    value: 'Valor',
                    label: 'Valor',
                    
                  },
                ]
                
              },
              
            ]}
          />
        </Form.Item>
        <Form.Item label="Cond. de Venta">
          <Cascader
            options={[
              {
                value: 'Contado',
                label: 'Contado',
                
                
              },
              {
                value: 'Cuenta Corriente',
                label: 'Cuenta Corriente',
                
                
              },
              {
                value: 'Tarjeta',
                label: 'Tarjeta',
                
                children: [
                  {
                    value: 'Naranja',
                    label: 'Naranja',
                    
                  },
                ]
              },
              
            ]}
          />
        </Form.Item>
        <Form.Item label="Fecha">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="Cantidad">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Descripcion">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Subir" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Seguinos">
          <Button>TwitterFollowCard</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Form1;