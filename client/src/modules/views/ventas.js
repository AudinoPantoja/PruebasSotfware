import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Ventas = () => {
    
    const [inventario, setInventario]=useState([
      {codigo: '1010', producto: 'Arroz Roa x1kg', stock:45, precioUnidad:3500},
      {codigo: '1012', producto: 'Arveja Diana x1kg', stock:18, precioUnidad: 2500 }
    ]);

    const [productos, setProductos] = useState([
        { codigo: '1010', producto: 'Arroz Roa 1x1kg', cantidad: 3, precioUnidad: 3500 },
        { codigo: '1012', producto: 'Arveja Diana 1x1kg', cantidad: 2, precioUnidad: 2500 },
    ]);

    const [total, setTotal] = useState(15500);
    const [pagaCon, setPagaCon] = useState(20000);
    const [searchProduct, setSearchProduct] = useState(false);
    const [searchClient, setSearchClient] = useState(false);
    const [searchC, setSearchC] = useState(false);
    const cambio = pagaCon - total;

    const navigate = useNavigate();

    return (
        <div className="ventas-container_ventas">
            {/* Encabezado */}
            <header className="header_ventas">
                <button className="back-btn_ventas" onClick={() => { navigate('/'); }}>
                    Back
                </button>
                <h1>Ventas</h1>
                <div className="user-info_ventas">
                    <span>usuario: MATIXTA</span>
                    <span>Rol: Administrador</span>
                    <span>1234</span>
                </div>
            </header>

            {/* Información de venta */}
            <div className="venta-info_ventas">
                <h3>Ingrese la información de la venta</h3>
                <div className="input-group_ventas">
                    <label>Producto</label>
                    <input type="text" id='inputProduct' readOnly />
                    <button data-bs-toggle="modal" data-bs-target="#ModalSearch" className="search-btn_ventas">🔍</button>
                </div>
                <div className="input-group_ventas">
                    <label>Cantidad</label>
                    <input id='cantidadProdcuto' type="number" />
                </div>
                <div className="input-group_ventas">
                    <label>Precio</label>
                    <input type="text" id='precioProducto' readOnly={true} />
                </div>
                <div className="action-buttons_ventas">
                    <button className="add-btn_ventas">➕</button>
                    <button onClick={()=>{clearProductsdata();}} className="clear-btn_ventas">🧹</button>
                </div>
            </div>

            {/* Tabla de productos */}
            <div className="productos-table_ventas">
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.codigo}</td>
                                <td>{producto.producto}</td>
                                <td>{producto.cantidad}</td>
                                <td>{`$${producto.precioUnidad}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Información del cliente y pago */}
            <div className="cliente-pago_ventas">
                <div className="cliente-info_ventas">
                    <h4>Cliente</h4>
                    <div className="client-seacrh-table">
                        <input type="text" value="Diego Moreno S" />
                        <button onClick={() => { setSearchC(!searchC); }} className="search-client-btn_ventas" data-bs-toggle="modal" data-bs-target="#ModalSearch">🔍</button>
                    </div>

                    <table className="table bg-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre </th>
                                <th scope="col">Nit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="cliente">
                                <th scope="row">1</th>
                                <td>Diego Moreno S</td>
                                <td>125</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttons_client_search">
                        <button type="button" className="client-btn-ventas"><img src="https://img.icons8.com/color/48/cancel--v1.png" alt="delete" /></button>
                        <button type="button" className="client-btn-ventas"><img src="https://img.icons8.com/color/48/print.png" alt="print" /></button>
                    </div>

                </div>
                <div className="pago-info_ventas">
                    <p>Total a pagar: <span className="total_ventas">${total}</span></p>
                    <label>Paga con:</label>
                    <input readOnly={true} type="number" value={pagaCon} onChange={e => setPagaCon(e.target.value)} />
                    <p>Cambio: <span className="cambio_ventas">${cambio}</span></p>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="ModalSearch" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalSearchLabel">Buscar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={changeEditar} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className='mb-3'>
                        <label htmlFor="search" className='form-label'>Buscar</label>
                          <input type='search' name='search' placeholder='producto a buscar' className='form-control'/>
                          
                        </div>
                        <div className='form-group'>
                        <table className='table'>
                          
                          <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>codigo</th>
                                <th scope='col'>nombre</th>
                                <th scope='col'>precio</th>
                                <th scope='col'>stock</th>
                                <th scope='col'>añadir</th>
                              </tr>
                          </thead>
                          <tbody>
                          {inventario.map((producto, index)=>(
                            <tr key={index}>
                              <th scope='row'>{index+1}</th>
                              <th>{producto.codigo}</th>
                              <td>{producto.producto}</td>
                              <td>{producto.precioUnidad}</td>
                              <td>{producto.stock}</td>
                              <td><button onClick={()=>{selectProduct(index);}} className='btn btn-light' type="button">añadir</button></td>
                            </tr>
                          ))}
                          </tbody>
                            
                        </table>
                          
                        </div>
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={changeEditar} data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={changeSearchProduct}>
                                {searchProduct ? 'Seleccionar producto' : searchClient ? 'Seleccionar cliente' : 'Buscar'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function changeSearchProduct() {
      if(searchC){
        !searchClient? setSearchClient(!searchClient):setSearchClient(searchClient);
      }else{
         !searchProduct? setSearchProduct(!searchProduct): setSearchProduct(searchProduct);
      }
    }

    function changeEditar() {
        if (searchProduct) {
            setSearchProduct(false);
        }
        if (searchClient) {
            setSearchClient(false);
        }
        if (searchC) {
            setSearchC(false);
        }
    }
    
    function selectProduct(index){
      let in_product= document.getElementById('inputProduct');
      in_product.value=inventario[index].producto;
      in_product.key=index;
      
      document.getElementById('precioProducto').value=inventario[index].precioUnidad;
    }
    
    function clearProductsdata(){
      document.getElementById('precioProducto').value='';
      document.getElementById('inputProduct').value='';
      document.getElementById('cantidadProdcuto').value='';
    }
    
    function addProduct(){
      alert('agregando producto');
    }
};

export default Ventas;
