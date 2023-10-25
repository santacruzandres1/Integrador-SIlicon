import React from 'react';
import './Dashboard.css';
import SideBar from '../menu/sideBar';
import DataUser from '../datosUser';
import TablaCursos from '../Tablas/TablaCursos';
import Logout from '../Login/LogOut';



const Usuarios =()=>{
 

    return(
        <div className='Dash'>
        <div className='DashGlass'>
        <SideBar />
            <div className='main container-fluid justify-content-center'>
            <TablaCursos/>
            </div>
            <div>
            <div className='log-out'>
                <div className='log-out-icon'>
                    <Logout/>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Usuarios;