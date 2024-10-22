import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './modules/views/homepage';
import Clientes from './modules/views/clientes';
import Login from './modules/views/login';
import Productos from './modules/views/productos';
import Envios from './modules/views/envios';
import Facturas from './modules/views/facturas';
import Usuario from './modules/views/usuario';
import Ventas from './modules/views/ventas';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/clientes' element={<Clientes/>}/>
            <Route path='/homePage' element={<Homepage/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/envios' element={<Envios/>}/>
            <Route path='/facturas' element={<Facturas/>}/>
            <Route path='/perfil' element={<Usuario/>}/>
            <Route path='/ventas' element={<Ventas/>}/>

        </Routes>
    );
};

export default AppRouter;
