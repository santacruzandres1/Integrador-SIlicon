// En tu archivo SideBar.js
import React, { useState } from "react";
import "./sideBar.css";
import DataUser from "../datosUser";
import { FaUsersGear, FaBook, FaPeopleRoof } from "react-icons/fa6";
import Logout from "../Login/LogOut";

const SideBar = () => {
  const { data } = DataUser();
  let rol = data.id_rol;

  console.log("Rol:", rol);

  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  if (rol === 1) {
    const menuItems = [
      {
        icon: <FaUsersGear />,
        text: "Usuarios",
        id: "usuarios", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <FaPeopleRoof />,
        text: "Cursos",
        id: "cursos", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <FaBook />,
        text: "Materias",
        id: "materias", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <Logout />,
      },
    ];

    return (
      <>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          {/*<UilBars />*/}
        </div>
        <div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        >
          <div className="logo">
            <span>Administrador</span>
          </div>
          <div className="menu">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`} // Usar el href para dirigir a los IDs
                className={`menuItem ${
                  selected === index ? "active" : ""
                }`}
                onClick={() => setSelected(index)}
              >
                <div className="icon">{item.icon}</div>
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </>
    );
  } else if (rol === 2) {
    return (
      <>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          {/*<UilBars />*/}
        </div>
        <div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        >
          <div className="logo">
            <span>Alumno</span>
          </div>
          <div className="menu">
            <a href="#usuarios" className="menuItem">
              <div className="icon">
                <FaUsersGear />
              </div>
              <span>Usuarios</span>
            </a>
            <a href="#cursos" className="menuItem">
              <div className="icon">
                <FaPeopleRoof />
              </div>
              <span>Cursos</span>
            </a>
            <a href="#materias" className="menuItem">
              <div className="icon">
                <FaBook />
              </div>
              <span>Materias</span>
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          {/*<UilBars />*/}
        </div>
        <div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        >
          <div className="logo">
            <span>Profesor</span>
          </div>
          <div className="menu">
            {/*SidebarData.map((item, index) => {
        return (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        );
      })
      {/* signoutIcon 
      <div className="menuItem">
        <UilSignOutAlt />
      </div> */}
          </div>
        </div>
      </>
    );
  }
};

export default SideBar;
