import React, { useState } from 'react';
import { Offcanvas, Button} from 'react-bootstrap';
import { BsList, BsHouseDoor, BsPerson, BsGear, BsBoxArrowInRight } from 'react-icons/bs';

const SidebarMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(!show);

  const menuItems = [
    { icon: <BsHouseDoor />, text: "Inicio" },
    { icon: <BsPerson />, text: "Perfil" },
    { icon: <BsGear />, text: "Configuración" },
    { icon: <BsBoxArrowInRight />, text: "Cerrar Sesión" }
  ];

  return (
    <div className="sidebar-menu">
      <Button variant="primary" onClick={toggleShow} className="menu-button">
        <BsList size={30} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Body>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <span>{item.icon}</span>
                {show && <span className="ms-2">{item.text}</span>}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SidebarMenu;
