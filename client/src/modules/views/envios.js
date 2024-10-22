import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Envios = () => {

    const navigate=useNavigate();
    const [back, setBack]=useState(false);
  
    useEffect(()=>{
      if(back){
        navigate('/');
      }
  
    },[back,navigate]);
  
      //ejemplos antes de conectar a BD
      const [envios, setEnvios] = useState([
          { id_factura: '0425-823', direccion: 100, precio: 252, enabled: true },
          { id_factura: '055665', direccion: 50,  precio: 252, enabled: true },
          { id_factura: '21225', direccion: 75,  precio: 252, enabled: true },
          { id_factura: '121564', direccion: 20,  precio: 252, enabled: true },
          { id_factura: '12558', direccion: 60,  precio: 252, enabled: true },
          { id_factura: '12105', direccion: 45,  precio: 252, enabled: true },
        ]);

    return (
        <div className="product-list-container">
        {/* Encabezado */}
        <header className="header">
          <a className="back-link" onClick={()=>{setBack(!back);}}>Back</a>
          <h1>envios</h1>
          <button className="add-button" data-bs-toggle="modal" data-bs-target="#ModalAgregar">Agregar</button>
        </header>
  
        {/* Subtítulo */}
        <p className="subtitle_product">Modifica o actualiza la lista de envios y sus estados</p>
  
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
  
        {/* Tabla de productos */}
        <table className="product-table">
          <thead>
            <tr>
              <th>id_factura</th>
              <th>direccion</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Habilitado</th>
            </tr>
          </thead>
          <tbody>
            {envios.map((envio, index) => (
              <tr key={index}>
                <td className="product-name">
                  <div className="product-icon">A</div>
                  {envio.id_factura}
                </td>
                <td>{envio.direccion}</td>
                <td>{envio.precio}</td>
                <td>
                  <button className="edit-button" data-bs-toggle="modal" data-bs-target="#ModalAgregar">Editar</button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={envio.enabled}
                    onChange={() => {
                      const newEnvios = [...envios];
                      newEnvios[index].enabled = !newEnvios[index].enabled;
                      setEnvios(newEnvios);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* seccion de los modales que estaran ocultos */}
        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        
       
   

    
      <div className="modal fade" id="ModalAgregar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalAgregarLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
};

export default Envios;
