import { Button, Drawer } from 'antd';
import { useState } from 'react';
const View1 = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Vista
      </Button>
      <Drawer title="Detalles de Factura" placement="right" onClose={onClose} open={open}>
        <img src="./Imgview.jpg" alt="Foto de los ladrones" />
        <br />
        <p>Detalles a ver</p>
      </Drawer>
    </>
  );
};
export default View1;