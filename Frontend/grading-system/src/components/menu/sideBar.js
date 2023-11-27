// En tu archivo SideBar.js
import React, { useState } from "react";
import "./sideBar.css";
import DataUser from "../datosUser";
import { FaUsersGear, FaBook, FaPeopleRoof, FaBars, FaCalendarDays  } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Logout from "../Login/LogOut";
import { MdAssignment } from "react-icons/md";



const SideBar = ({ handleUsuario, handleMateria, handleCurso, handleWelcome, handleCalificaciones, handleCalendar }) => {
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
      }
     
    ];

    return (
      <>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
         <FaBars/>
        </div>
        <div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        >
             <div className="logo">
              <img
                src={`http://localhost:8080/upload/${data.imagen}`}
                alt=""
                className='background rounded-circle'
              />
              <span>Administrador</span>
            </div>
          <div className="menu">
         
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`menuItem ${selected === index ? "active-menu" : ""}`}
                onClick={() => {
                  setSelected(index);
                  if (item.id === "usuarios") {
                    handleUsuario(); 
                  } else if (item.id === "materias") {
                    handleMateria(); 
                  } else if (item.id === "cursos") {
                    handleCurso(); 
                  }
                  else if (item.id === "dash") {
                    handleWelcome(); 
                  }
                }}
              >
                <div className="icon">{item.icon}</div>
                <span>{item.text}</span>
              </button>
            ))}
            
          </div>
          <Logout className="logout" />
        </div>
      </>
    );
  } else if (rol === 2) {
    const menuItems = [
      {
        icon: <FaHome />,
        text: "Dashboaard",
        id: "dash",
      },
      {
        icon: <MdAssignment />,
        text: "Calificaciones",
        id: "calificaciones",
      },
      {
        icon: <FaCalendarDays />,
        text: "Calendario",
        id: "calendar", // Agrega el ID de la sección correspondiente
      },
     
    ];
    return (
      <>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
         <FaBars/>
        </div>
        <div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        >
             <div className="logo">
              <img
                src={`http://localhost:8080/upload/${data.imagen}`}
                alt=""
                className='background rounded-circle'
              />
              <span>Alumno</span>
            </div>
          <div className="menu">
         
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`menuItem ${selected === index ? "active-menu" : ""}`}
                onClick={() => {
                  setSelected(index);
                  if (item.id === "calificaciones") {
                    handleCalificaciones(); 
                  } else if (item.id === "calendar") {
                    handleCalendar(); 
                  }
                  else if (item.id === "dash") {
                    handleWelcome(); 
                  }
                }}
              >
                <div className="icon">{item.icon}</div>
                <span>{item.text}</span>
              </button>
            ))}
            
          </div>
          <Logout className="logout" />
        </div>
      </>
    )
  }
};

export default SideBar;
