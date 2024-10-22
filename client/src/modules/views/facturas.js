import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Facturas = () => {
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Producto 1', precio: 0, img: '' },
        { id: 2, nombre: 'Producto 2', precio: 0, img: '' },
        { id: 3, nombre: 'Producto 3', precio: 0, img: '' },
        { id: 4, nombre: 'Producto 4', precio: 0, img: '' },
        { id: 5, nombre: 'Producto 5', precio: 0, img: '' },
        { id: 6, nombre: 'Producto 6', precio: 0, img: '' }
      ]);
      
      const [back, setBack]=useState(false);
      const navigate=useNavigate();
      
      useEffect(()=>{
        if(back){
            navigate('/');
        }
      },[back,navigate]);
      
    
    return (
        <div className="container_facturas">
      {/* Filtros */}
      <div className="sidebar_facturas">
        <h3>Categoría</h3>
        <div className="tags_facturas">
          <span className="tag_facturas">Spring</span>
          <span className="tag_facturas">Smart</span>
          <span className="tag_facturas">Modern</span>
        </div>

        <div className="checkboxes_facturas">
          <label><input type="checkbox" defaultChecked /> Comestibles</label>
          <label><input type="checkbox" defaultChecked /> Aseo</label>
          <label><input type="checkbox" defaultChecked /> Herramientas</label>
        </div>

        <div className="slider_facturas">
          <label>Precio</label>
          <input type="range" min="0" max="100" />
          <p>$0 - $100</p>
        </div>
      </div>

      {/* Sección principal */}
      <div className="main-section_facturas">
        <div className="controls_facturas">
          <input type="text" className="search-bar_facturas" placeholder="Buscar..." />
          <div className="sort-buttons_facturas">
            <button>New</button>
            <button>Precio ascendente</button>
            <button>Precio descendente</button>
            <button onClick={()=>{setBack(!back);}}>Volver</button>
          </div>
        </div>

        {/* Lista de productos */}
        <h2>Facturas</h2>
        <div className="product-list_facturas">
          {productos.map((producto) => (
            <div key={producto.id} className="product-card_facturas">
              <div className="product-image_facturas" />
              <p>{producto.nombre}</p>
              <p>${producto.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Facturas;
