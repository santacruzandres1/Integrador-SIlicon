import EditUserAlumno from '../formEditar/formEditarUserAlumno';
import CustomAvatar from '../menu/Avatar';
import DataUser from '../datosUser';
import { TbPhotoEdit } from "react-icons/tb";
import Dropdown from 'react-bootstrap/Dropdown'
import './styles.css';

const Settings = () => {
    const { data } = DataUser();
    const avatar = data.id_usuario;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            // Si no se selecciona ningún archivo, salir de la función
            return;
        }

        const formData = new FormData();
        formData.append('imagen', file);

        fetch(`http://localhost:8080/api/usuarios/${data.id_usuario}/imagen`, {
            method: 'PUT',
            headers: {
                'authorization': sessionStorage.getItem('token'),
            },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Imagen actualizada con éxito');
                } else {
                    console.error('Error al actualizar la imagen');
                    alert('Error al actualizar la imagen, Intente nuevamente');
                }
            })
            .catch((error) => {
                console.error('Error de red:', error);
                alert('Error de red:', error);
            });
    };

    return (
        <>
            <div className='wrapper'>
                {data.imagen ? (
                    <div className='avatar image'>
                        <img
                            src={`http://localhost:8080/upload/${data.imagen}`}
                            alt=""
                            className='background rounded-circle'
                        />

                        <Dropdown className='content avatar'>
                            <Dropdown.Toggle variant='transparent' id="dropdown-basic">
                                <TbPhotoEdit />
                                <span> Edit</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <label htmlFor="file-upload" className="file-upload-label">
                                        Editar Foto
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        onChange={handleImageChange}
                                        style={{ display: 'block' }}
                                    />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Eliminar Foto</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ) : (
                    <div className='wrapper'>
                        <CustomAvatar
                            avatar={avatar}
                            colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                        />
                        <div className='content avatar'>
                            <TbPhotoEdit />
                            <span>Edit</span>
                        </div>
                    </div>
                )}
            </div>
            <div className='container'>
            </div>
            <EditUserAlumno/>
        </>
    );
};

export default Settings;
