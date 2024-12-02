import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Clientes = () => {

    const navigate=useNavigate();
    const [back, setBack]=useState(false);

    /*default */
    const [searchClient, setSearchClient]=useState('');
    const [editando, setEditando]=useState(false);
    const [clientesCargados, setClientesCargados]=useState([]);
    const [tiposnit, setTiposNit]=useState([]);
        /*modales */
     const [modalAgregarCliente , setAgregarCliente]=useState(false);
     const [modalAgregarTipoNit , setAgregarTipoNit]=useState(false);  
     
     /*agregar tipoNit */
     const [nombreAgregarTipoNit, setAgregarTipoNitNombre]=useState('');
     /*agregar cliente */
     const [nombreCliente, setNombreCliente]=useState('');
     const [apellidoCliente, setApellidoCliente]=useState('');
     const [direccionCliente, setDireccionCliente]=useState('');
     const [nitCliente,setNitCliente]=useState('');
     const [tipoNitCliente,setTiponitCliente]=useState(0);
     const [telefonoCliente,setTelefonoCliente]=useState(0);
     /*modificar cliente */
     const [clienteEditar, setClienteEditar]=useState([]);
     const [idClienteEditar, setIdClientEditar]=useState();
    
     const modifyProduct=()=>{
      if(nombreCliente !== '' && nitCliente !== '' && tipoNitCliente !== '' && 
        nombreCliente !== 0 && nitCliente !== 0 && tipoNitCliente !== 0){
        Axios.put('http://localhost:3001/updateClient',{
          nombre:nombreCliente,
          apellido:apellidoCliente,
          direccion:direccionCliente,
          telefono:telefonoCliente,
          nit:nitCliente,
          tipoNit:tipoNitCliente,
          idCliente:idClienteEditar
        }).then(()=>{
          alert('cliente editado con exito')
          setAgregarCliente(false);
        })
      }
        
     }
  

     const addClient=()=>{
      if(nombreCliente!=='' && telefonoCliente!=='' && tipoNitCliente!==0 && nitCliente!=='' ){
          Axios.post('http://localhost:3001/addCliente',{
          nombre:nombreCliente,
          apellido:apellidoCliente,
          direccion:direccionCliente,
          nitCliente:nitCliente,
          tipoNit:tipoNitCliente,
          telefono:telefonoCliente
        }).then(()=>{
          alert('cliente agregado con exito');
          setAgregarCliente(false);
        })
      }else{
        alert('verifica los datos ingresados, no pueden estar vacios')
      }
      
     }

     const saveProduct=()=>{
      if(!editando){
        addClient();
      }else{
        modifyProduct();
      }
     }

    const loadClient=()=>{
      Axios.get('http://localhost:3001/getClients',{
        params:{ search: searchClient}
      }).then((response)=>{
        setClientesCargados(response.data);
      })
    }

 

    const changeState=(id, value)=>{
      Axios.put('http://localhost:3001/changeStateClient',{
        idClient:id,
        state:value,
      }).then(()=>{
        console.log('changed '+value);
      });

    }

    const loadTipoNit=()=>{
      Axios.get('http://localhost:3001/getTiponit').then((response)=>{
        setTiposNit(response.data);
      })
    }

    const addTipoNit=()=>{
      Axios.post('http://localhost:3001/addTipoNit',{
        nombre:nombreAgregarTipoNit
      }).then(()=>{
        alert('tipo agregado correctamente ');
        setAgregarTipoNit(false);
      })
    }



    /*clientes */
    const mostratModalAddClient=()=>{
      const modal=document.getElementById('ModalAgregar');
      const modalData=new window.bootstrap.Modal(modal)
      modalData.show();
    }

    const cerrarModalAddClient=()=>{
      const modalData=document.getElementById('ModalAgregar');
      const modal= bootstrap.Modal.getInstance(modalData);
      if(modal){
        modal.hide();
        
        setNombreCliente('');
        setApellidoCliente('');
        setDireccionCliente('');
        setNitCliente(0);
        setTiponitCliente(0)
        setTelefonoCliente('');
      }
      if(clienteEditar){
        setClienteEditar([]);//
        setIdClientEditar();
      }

    }


    /*tipos nit */
    const cerrarModalNitAdd=()=>{
        const modalData=document.getElementById('AgregarTipoNit');
        const modal= bootstrap.Modal.getInstance(modalData);
        if(modal){
          modal.hide();
          setAgregarTipoNitNombre('');
        }

    }

    const abrirModalNitAdd=()=>{
        const modalData=document.getElementById('AgregarTipoNit');
        const modal=new window.bootstrap.Modal(modalData);
        modal.show();
    }
    


    useEffect(()=>{
      if(modalAgregarCliente){
        mostratModalAddClient();
      }else{
        cerrarModalAddClient();
      }
    },[modalAgregarCliente])


    useEffect(()=>{
      if(searchClient){
          loadClient();
      }else{
        loadClient();
      }
    },[searchClient])


    useEffect(()=>{
      if(modalAgregarTipoNit){
        abrirModalNitAdd();
      }else{
        cerrarModalNitAdd();
      }

    },[modalAgregarTipoNit])

    useEffect(()=>{
      if(clienteEditar){
        setNombreCliente(clienteEditar.firstName);
        setApellidoCliente(clienteEditar.lastName);
        setDireccionCliente(clienteEditar.address);
        setNitCliente(clienteEditar.documentNumber);
        setTiponitCliente(clienteEditar.docValue);
        setTelefonoCliente(clienteEditar.phone);
        setIdClientEditar(clienteEditar.valuePerson);
      }
      
   },[clienteEditar])

    /*use effect */
    useEffect(()=>{
      if(back){
        navigate('/');
      }
  
    },[back,navigate]);
      
   loadClient();
  loadTipoNit();
        
  
    return (
        <div className="product-list-container">
        {/* Encabezado */}
        <header className="header">
          <a className="back-link" onClick={()=>{setBack(!back);}}>Atras</a>
          <h1>Clientes</h1>
          <button className="add-button" onClick={()=>{setAgregarCliente(true)}}>Agregar</button>
        </header>
  
        {/* Subtítulo */}
        <p className="subtitle_product">Modifica o actualiza la lista de clientes</p>
  
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="search" value={searchClient} onChange={(e)=>{setSearchClient(e.target.value)}} placeholder="Buscar por Id, Nombre o Apellido" className="search-input" />
        </div>
        {console.log(clientesCargados)}
        {/* Tabla de clientes */}
        <table className="product-table">
          <thead>
            <tr>
              <th>Nombre Completo </th>
              <th>Tipo Documento</th>
              <th>Numero Documento</th>
              <th>Telefono</th>
              <th>Direccion</th>
              <th>Editar</th>
              <th>Habilitado</th>
            </tr>
          </thead>
          <tbody>
            {clientesCargados.map((cliente, index) => (
              <tr key={index}>
                <td className="product-name">
                  <div className="product-icon">A</div>
                  {cliente.FIRST_NAME} {cliente.last_Name}
                </td>
                <td>{cliente.type}</td>
                <td>{cliente.document_Number}  </td>
                <td>{cliente.phone}  </td>
                <td>{cliente.address}</td>
                <td>
                  <button onClick={()=>{setEditando(true); setClienteEditar(cliente); setAgregarCliente(true);}} className="edit-button">Editar</button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={cliente.peopleIsactive}
                    onChange={(e) => {
                      changeState(cliente.valuePerson, e.target.checked);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* seccion de los modales que estaran ocultos */}
        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        
       
   

    


      {/*modal de agregar tipo de cliente */}
      <div className="modal fade" id="ModalAgregar" data-bs-backdrop='static' tabIndex="-1" aria-labelledby="ModalAgregarLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalAgregarLabel">{editando? 'Editando Cliente':' Agregar Cliente'}</h5>
              <button type="button" className="btn-close" onClick={()=>{setAgregarCliente(false); setEditando(false);}}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="" className="form-label">Nombre</label>
                <input type="text"  value={nombreCliente} onChange={(e)=>{setNombreCliente(e.target.value)}} className="form-control" placeholder="Nombre" aria-describedby="helpId" />
                <small id="helpId" className="text-muted"></small>
              </div>
              <div className="mb-3">
                <label htmlFor=""  className="form-label">Apellido</label>
                <input type="text" value={apellidoCliente} onChange={(e)=>{setApellidoCliente(e.target.value)}} className="form-control" placeholder="Apellido" aria-describedby="helpId" />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">Direccion</label>
                <input type="text" value={direccionCliente} onChange={(e)=>{setDireccionCliente(e.target.value)}} className="form-control" placeholder="Direccion" aria-describedby="helpId" />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">Telefono</label>
                <input type="number" value={telefonoCliente} onChange={(e)=>{setTelefonoCliente(e.target.value)}} className="form-control" placeholder="Telefono" aria-describedby="helpId" />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">Numero de documento</label>
                <input type="text" value={nitCliente} onChange={(e)=>{setNitCliente(e.target.value)}} className="form-control" placeholder="Numero Documento" aria-describedby="helpId" />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">Tipo de Documento</label>
                <select value={tipoNitCliente} onChange={(e)=>{setTiponitCliente(e.target.value)}} className="form-select form-select-lg" name=""  id=""  >
                  <option value={0} >Seleccionar</option>
                  {tiposnit.map((nit,index)=>(
                    <option value={nit.ID} key={nit.ID}>{nit.TYPE}</option>
                  ))}
                </select>
              </div>
              <button type='button' onClick={()=>{setAgregarTipoNit(true); setEditando(false);}} className='btn btn-light' ><img src="https://img.icons8.com/ios/50/add--v1.png" alt="" /></button>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={()=>{setAgregarCliente(false)}}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={()=>{saveProduct()}}>{editando? 'Guardar Cambios':'Guardar Cliente'}</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="AgregarTipoNit" data-bs-backdrop='static' tabIndex="-1" aria-labelledby="AgregarTipoNitLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content bg-secondary text-white">
            <div className="modal-header">
              <h5 className="modal-title" id="AgregarTipoNitLabel">Agregar Tipo de Documento</h5>
              <button type="button" className="btn-close" onClick={()=>{setAgregarTipoNit(false)}}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="" className="form-label">Tipo Documento</label>
                <input type="text" value={nombreAgregarTipoNit} onChange={(e)=>{setAgregarTipoNitNombre(e.target.value)}} id="" className="form-control" placeholder="nombre" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Help text</small>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={()=>{setAgregarTipoNit(false)}}>Cerrar</button>
              <button type="button" onClick={()=>{addTipoNit()}} className="btn btn-primary">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>


      </div>
    );
};

export default Clientes;
