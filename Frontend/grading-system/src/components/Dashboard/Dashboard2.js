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




const Dashboard2 = () => {
    const { data } = DataUser()


    const rol = data.id_rol;

    let imageSrc = '';
    if (rol === 1) {
        imageSrc = dash1;
    } else if (rol === 2) {
        imageSrc = dash2;
    } else if (rol === 3) {
        imageSrc = dash4;

    }

    console.log('Rol:', rol);
    console.log(data);
    const userName = [data.nombre, " ", data.apellido];
    return (
        <div className='Dash' id="dash">
            <div className='DashGlass'>
            <SideBar />
                <div  id='welcome' className='container justify-content-center'>
                <Welcome userName={userName} rol={rol} />
          <img className='dash-img' src={imageSrc} alt='dashboard' />
            <div id='usuarios'className='container'>
            <TablaUsuarios />
            </div>
          <div id='materias'>
            <TablaMaterias />
          </div>
            <div id='cursos'>
            <TablaCursos />
            </div>
                </div> 
            </div>
        </div>

    )
}
export default Dashboard2;