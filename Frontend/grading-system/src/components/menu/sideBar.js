// En tu archivo SideBar.js
import React, { useState } from "react";
import "./sideBar.css";
import DataUser from "../datosUser";
import { FaUsersGear, FaBook, FaPeopleRoof } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
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
        icon: <FaHome />,
        text: "Dashboaard",
        id: "dash", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <FaUsersGear />,
        text: "Usuarios",
        id: "usuarios", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <FaBook />,
        text: "Materias",
        id: "materias", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <FaPeopleRoof />,
        text: "Cursos",
        id: "cursos", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <Logout />,
        text: "Logout",
        id: "logout", // Agrega el ID de la sección correspondiente
      }
     
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
          <div className="menu">
          <div className="logo">
            <span>Administrador</span>
          </div>
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
    const menuItems = [
      {
        icon: <FaUsersGear />,
        text: "Dashboaard",
        id: "usuarios", // Agrega el ID de la sección correspondiente
      },
  
      {
        icon: <FaBook />,
        text: "Materias",
        id: "materias", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <FaBook />,
        text: "Calificaciones",
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
            <span>alumno</span>
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
  } else {
    const menuItems = [
      {
        icon: <FaUsersGear />,
        text: "Dashboaard",
        id: "usuarios", // Agrega el ID de la sección correspondiente
      },
  
      {
        icon: <FaBook />,
        text: "Materias",
        id: "materias", // Agrega el ID de la sección correspondiente
      },
      {
        icon: <FaBook />,
        text: "Notas",
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
            <span>alumno</span>
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
  }
};

export default SideBar;
