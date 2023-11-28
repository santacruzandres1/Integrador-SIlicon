import './Dashboard.css';
import SideBar from '../menu/sideBar';
import DataUser from '../datosUser';
import dash1 from '../../Assets/Images/dash1.svg';
import dash2 from '../../Assets/Images/dash2.svg';
import dash4 from '../../Assets/Images/dash4.svg';
import Welcome from '../Welcome/Welcome';
import TablaMaterias from '../Tablas/TablaMaterias';
import TablaCursos from '../Tablas/TablaCursos';
import TablaUsuarios from '../Tablas/TablaUsuarios';
import { useState } from 'react';
import DashboardAlumno from '../DashboardAlumno/DashboardAlumno';
import DashProfesor from '../DashProfesor/DashProfesor';
import Header from '../Header/header';
import Footer from '../footer/footer';
import CalendarioAlumno from '../DashboardAlumno/Calendario';






const Dashboard2 = () => {
    const { data } = DataUser()
    const [welcome, setWelcome] = useState(true)
    const [usuario, setusuario] = useState(false)
    const [materia, setMateria] = useState(false)
    const [curso, setCurso] = useState(false)
    const [calificaciones, setCalificaciones] = useState(false)
    const [calendar, setCalendar] = useState(false)

    const handleUsuario = () => {
        setusuario(true);
        setMateria(false);
        setCurso(false);
        setWelcome(false);
        setCalificaciones(false);
        setCalendar(false);

    };
    const handleMateria = () => {
        setMateria(true);
        setusuario(false);
        setCurso(false)
        setWelcome(false);
        setCalificaciones(false);
        setCalendar(false);
    };
    const handleCurso = () => {
        setCurso(true);
        setMateria(false);
        setusuario(false);
        setWelcome(false);
        setCalificaciones(false);
        setCalendar(false);

    };

    const handleWelcome = () => {
        setWelcome(true);
        setCurso(false);
        setMateria(false);
        setusuario(false);
        setCalificaciones(false);
        setCalendar(false);
    };

    const handleCalificaciones = () => {
        setWelcome(false);
        setCalificaciones(true);
        setMateria(false);
        setusuario(false);
        setCurso(false);
        setCalendar(false);
    }

    const handleCalendar = () => {
        setWelcome(false);
        setCalificaciones(false);
        setMateria(false);
        setusuario(false);
        setCurso(false);
        setCalendar(true);
    }

    const rol = data.id_rol;

    let imageSrc = '';
    if (rol === 1) {
        imageSrc = dash1;
    } else if (rol === 2) {
        imageSrc = dash2;
    } else if (rol === 3) {
        imageSrc = dash4;

    }

    const userName = [data.nombre, " ", data.apellido];
    const avatar = (data.id_usuario + 100);
   
    
    if (rol === 1) {

        return (
            <>
                <div className='Dash' id="dash">
                    <div className='DashGlass'>
                        <SideBar
                            handleUsuario={handleUsuario}
                            handleMateria={handleMateria}
                            handleCurso={handleCurso}
                            handleWelcome={handleWelcome}
                            avatar={avatar}
                            

                        />
                        
                        <div className='container '>
                            {welcome && (
                             <div className='container' id='welcome'>
                            <Welcome userName={userName} rol={rol} />
                            <img className='dash-img' src={imageSrc} alt='dashboard' />
                        
                                </div>
                            )}
                    {usuario && (
                        <div className='container' id='usuarios'>
                            <TablaUsuarios />
                        </div>
                    )}
                    {materia && (
                        <div className='container' id='materias'>
                            <TablaMaterias />
                        </div>
                    )}
                    {curso && (
                        <div className='container' id='cursos'>
                            <TablaCursos />
                        </div>
                    )}
                </div>

                    </div>
                </div>

            </>
        );
    }
    else if (rol === 2) {
        return (
            <>
                <div className='Dash' id="dash">
                    <div className='DashGlass'>
                        <SideBar
                            handleCalificaciones={handleCalificaciones}
                            handleMateria={handleMateria}
                            handleCurso={handleCurso}
                            handleWelcome={handleWelcome}
                            handleCalendar={handleCalendar}
                            avatar={avatar}
                        />
                        
                        <div className='container '>
                            {welcome && (
                             <div className='container' id='welcome'>
                            <Welcome userName={userName}
                                     rol={rol}
                                    avatar={avatar}         
                            />
                            <img className='dash-img' src={imageSrc} alt='dashboard' />
                        
                                </div>
                            )}
                    {calificaciones && (
                        <div className='container' id='calificaciones'>
                            <DashboardAlumno />
                        </div>
                    )}
                    {calendar && (
                        <div className='container' id='calendar'>
                           <CalendarioAlumno />
                        </div>
                    )}
                    {curso && (
                        <div className='container' id='cursos'>
                            <TablaCursos />
                        </div>
                    )}
                </div>

                    </div>
                </div>

            </>
        );

    }
    else if (rol === 3) {
        return (
            <>
                <Header></Header>

                <br></br>
                <div className='row'>
                    <div className='col'>
                        <div className='image-container'>
                            <img
                                src={`http://localhost:8080/upload/${data.imagen}`}
                                alt=""
                                className='background rounded-circle'
                            />
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Bienvenid@ {userName} !</h3>
                    </div>
                </div>


                <br></br>


                <DashProfesor></DashProfesor>



                <Footer></Footer>


            </>
        );
    } else { return ("Usuario incorrecto") }

}
export default Dashboard2;