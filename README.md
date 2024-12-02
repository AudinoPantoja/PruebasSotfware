#🛒📉 tienda en linea
```
codigo de una tienda online, las tecnologias usadas son react(axios), node(expres) y sql
```
Proyecto de una tienda a escala media en desarrollo. La versión final se actualizará en este README. Actualmente, el sistema es utilizable con la base de datos incluida en este repositorio.


usuario Admin:<br>
  ``` 
  *user     :  Admin
  *password :  admin
  ``` 
  ``
  sistema incompleto, aun se trabaja en el 
  ``

![Tienda en linea SQl](https://raw.githubusercontent.com/AudinoPantoja/img_Proyects/refs/heads/main/tieda-homepage.png)
![productos](https://raw.githubusercontent.com/AudinoPantoja/img_Proyects/refs/heads/main/tieda-products.png)


<a href="https://opposite-snapper-e2c.notion.site/Platvent-Store-c40ac8fd6c4e44069e7a1f825ba7c1a0" target="blank"><img align="center" src="https://raw.githubusercontent.com/AudinoPantoja/img_Proyects/refs/heads/main/platvent_tareas_notion.png" alt="notion" height="100%" width="100%" /></a>


## 📋 Tabla de contenidos


- [✨Características](#características)
- [📝🗒estructura del proyecto](#estructura-del-proyecto)
  - [Estructura del Proyecto](#estructura-del-proyecto-1)
  - [📝 Licencia](#-licencia)

</br>
##demas

## Tecnologias usadas:
- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/products/workbench/)
- [moment-timezone]()
  //back-end
  ~npm install moment-timezone



## 📦 Instalación

1. Clona el repositorio a tu máquina local:
   ```bash
   git clone https://github.com/AudinoPantoja/PruebasSoftware.git
   $cd tienda-v2
  despues de clonar el proyecto nos debemos ubicar en la carpeta client de la siguiente forma:
   cliente
      $cd client
      una vez en client debemos instalar las dependencias:
      $npm intall
      luego de instalar las dependencias corremos el servidor de desarrollo:
      $npm start

    en una nueva terminal nos ubicamos en la carpeta server y ejecutamos el servidor web:    
    server
      $cd server
      $node index.js


2. Puedes usar una base de datos local, e importar la base de datos que te dejo adjunta
3. para uso movil se recomienda con el uso o orientacion horizontal
      ![orientacion movil](https://raw.githubusercontent.com/AudinoPantoja/img_Proyects/refs/heads/main/orientacionmovilHorizontal.jpg)

# ✨Características
* <b>Autenticacion de Usuarios :</b> Registro de inicio de sesion
* <b>Gestion de productos :</b> añadir, editar y eliminar productos
* <b>Funcionalidad de Ventas : </b> realiza ventas, modificalas y eliminalas e imprimelas, 
* <b>REsponsive Design : </b> adaptado para dispositvos moviles y de escritorio(aun trabajando en esto)


#  📝🗒estructura del proyecto

  Tienda  <br>
|--Descripción de cada carpeta:</br>
|--client: Contiene el código fuente de la aplicación cliente (front-end).</br>
|--layout: Define la estructura general de las páginas.</br>
|--modules: Contiene componentes y lógica modularizada.</br>
|--views: Contiene las vistas individuales de la aplicación.</br>
|--server: Contiene el código del servidor (back-end).</br>
|--docs: Documentación adicional (si existe).</br>
|--node_modules: Contiene las dependencias del proyecto.</br>

## Estructura del Proyecto

* **client:**
  * **layout:**
  * **modules:**
  * **views:**
* **server:**
* **docs:**

## 📝 Licencia
Este proyecto está bajo la Licencia MIT. Mira el archivo LICENSE para más detalles(aun no se encuentra añadido).

# Views

# clientes.js

## 1. Descripción General

Este archivo define un componente React llamado `Clientes`, que permite gestionar clientes en una interfaz con funcionalidades de CRUD (Crear, Leer, Actualizar y Borrar). Utiliza la biblioteca `Axios` para realizar peticiones HTTP y `React Router` para la navegación. También cuenta con modales de Bootstrap para agregar y editar clientes, y tipos de identificación.

## Importaciones
```javascript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'; 
```
---
---


## 2. Estados

### 2.1 Estados de Navegación y Control
- `back` (boolean): Controla la navegación de vuelta a la página principal.
- `editando` (boolean): Indica si se está en modo de edición de un cliente existente.

### 2.2 Estados de Búsqueda y Datos
- `searchClient` (string): Almacena el texto de búsqueda para filtrar clientes.
- `clientesCargados` (array): Contiene la lista de clientes cargados desde el servidor.
- `tiposnit` (array): Almacena los tipos de NIT disponibles.

### 2.3 Estados de Modales
- `modalAgregarCliente` (boolean): Controla la visibilidad del modal para agregar/editar clientes.
- `modalAgregarTipoNit` (boolean): Controla la visibilidad del modal para agregar nuevos tipos de NIT.

### 2.4 Estados de Formulario de Cliente
- `nombreCliente` (string): Nombre del cliente.
- `apellidoCliente` (string): Apellido del cliente.
- `direccionCliente` (string): Dirección del cliente.
- `nitCliente` (string): Número de identificación tributaria del cliente.
- `tipoNitCliente` (number): ID del tipo de NIT seleccionado.
- `telefonoCliente` (number): Número de teléfono del cliente.

### 2.5 Estados de Edición
- `clienteEditar` (object): Almacena los datos del cliente que se está editando.
- `idClienteEditar` (number): ID del cliente en edición.

### 2.6 Estado de Agregar Tipo NIT
- `nombreAgregarTipoNit` (string): Nombre del nuevo tipo de NIT a agregar.

## 3. Funciones Principales

### 3.1 Gestión de Clientes
- `loadClient()`: 
  - Descripción: Carga la lista de clientes desde el servidor.
  - Parámetros: Ninguno.
  - Comportamiento: Realiza una petición GET a 'http://localhost:3001/getClients' con el parámetro de búsqueda `searchClient`.

- `addClient()`:
  - Descripción: Agrega un nuevo cliente al servidor.
  - Parámetros: Ninguno (usa los estados del formulario).
  - Comportamiento: Realiza una petición POST a 'http://localhost:3001/addCliente' con los datos del nuevo cliente.

- `modifyProduct()`:
  - Descripción: Modifica la información de un cliente existente.
  - Parámetros: Ninguno (usa los estados del formulario y `idClienteEditar`).
  - Comportamiento: Realiza una petición PUT a 'http://localhost:3001/updateClient' con los datos actualizados del cliente.

- `changeState(id, value)`:
  - Descripción: Cambia el estado de habilitación de un cliente.
  - Parámetros: 
    - `id` (number): ID del cliente.
    - `value` (boolean): Nuevo estado de habilitación.
  - Comportamiento: Realiza una petición PUT a 'http://localhost:3001/changeStateClient'.

### 3.2 Gestión de Tipos de NIT
- `loadTipoNit()`:
  - Descripción: Carga los tipos de NIT desde el servidor.
  - Parámetros: Ninguno.
  - Comportamiento: Realiza una petición GET a 'http://localhost:3001/getTiponit'.

- `addTipoNit()`:
  - Descripción: Agrega un nuevo tipo de NIT al servidor.
  - Parámetros: Ninguno (usa el estado `nombreAgregarTipoNit`).
  - Comportamiento: Realiza una petición POST a 'http://localhost:3001/addTipoNit'.

### 3.3 Manejo de Modales
- `mostratModalAddClient()`: Muestra el modal para agregar/editar cliente.
- `cerrarModalAddClient()`: Cierra el modal de agregar/editar cliente y reinicia los estados del formulario.
- `abrirModalNitAdd()`: Abre el modal para agregar un nuevo tipo de NIT.
- `cerrarModalNitAdd()`: Cierra el modal de agregar tipo de NIT y reinicia el estado correspondiente.

## 4. Efectos (useEffect)

- Efecto para manejar la navegación de vuelta (`back`).
- Efecto para abrir/cerrar el modal de agregar cliente (`modalAgregarCliente`).
- Efecto para cargar clientes cuando cambia el término de búsqueda (`searchClient`).
- Efecto para abrir/cerrar el modal de agregar tipo de NIT (`modalAgregarTipoNit`).
- Efecto para cargar datos del cliente en el formulario cuando se inicia la edición (`clienteEditar`).

## 5. Estructura del Componente

### 5.1 Sección Principal
- Encabezado con título y botón de agregar.
- Barra de búsqueda.
- Tabla de clientes con columnas para nombre, tipo de ID, NIT, teléfono, dirección, botón de editar y checkbox de habilitación.

### 5.2 Modales
- Modal para agregar/editar cliente:
  - Campos para nombre, apellido, dirección, teléfono, NIT y tipo de NIT.
  - Botón para abrir el modal de agregar tipo de NIT.
- Modal para agregar tipo de NIT:
  - Campo para el nombre del nuevo tipo de NIT.

## 6. Interacción con la API

El componente utiliza Axios para realizar peticiones HTTP al servidor:
- GET: Para obtener la lista de clientes y tipos de NIT.
- POST: Para agregar nuevos clientes y tipos de NIT.
- PUT: Para actualizar información de clientes y cambiar su estado de habilitación.

## 7. Manejo de Datos

- Los datos de los clientes se almacenan en el estado `clientesCargados` y se actualizan mediante la función `loadClient()`.
- Los tipos de NIT se almacenan en `tiposnit` y se actualizan con `loadTipoNit()`.
- La edición de clientes reutiliza el modal de agregar, pre-llenando los campos con los datos del cliente seleccionado.
---
---
# Empresa.js

Este archivo define un componente React llamado `Empresa`, que actualmente es un componente básico sin contenido específico. A continuación, se describe su estructura y funcionalidad inicial.

## Importaciones
```javascript
import React from 'react';
```
- React: Necesario para crear componentes de React.
  
## Componente Empresa
- Función Empresa: Define un componente funcional que devuelve un div vacío. Este div es un contenedor que se puede utilizar para añadir contenido específico relacionado con la empresa
  
## Exportacion
Exporta el componente Empresa para que pueda importarse y utilizarse en otras partes de la aplicación.

---
---

# envios.js

## 1. Descripción General

El componente `Envios` es una interfaz de usuario diseñada para gestionar una lista de envíos en una aplicación React. Ofrece funcionalidades para visualizar, buscar y cambiar el estado de los envíos, así como la posibilidad de agregar nuevos envíos o editar los existentes.

## 2. Estados

### 2.1 Estados de Navegación
- `back` (boolean): Controla la navegación de vuelta a la página principal.

### 2.2 Estados de Datos
- `envios` (array): Contiene la lista de envíos. Cada envío es un objeto con las siguientes propiedades:
  - `id_factura` (string): Identificador único del envío.
  - `direccion` (number): Dirección del envío (posiblemente representa una distancia o código postal).
  - `precio` (number): Precio del envío.
  - `enabled` (boolean): Estado de habilitación del envío.

## 3. Funciones Principales

### 3.1 Gestión de Navegación
- Función anónima en el enlace "Back":
  - Descripción: Cambia el estado `back` para iniciar la navegación de vuelta.
  - Comportamiento: Invierte el valor actual de `back`.

### 3.2 Gestión de Envíos
- Función anónima en el checkbox de cada envío:
  - Descripción: Cambia el estado de habilitación de un envío específico.
  - Comportamiento: Crea una nueva copia del array `envios`, invierte el valor de `enabled` para el envío seleccionado y actualiza el estado con `setEnvios`.

## 4. Efectos (useEffect)

- Efecto para manejar la navegación de vuelta:
  - Dependencias: `[back, navigate]`
  - Comportamiento: Cuando `back` se vuelve `true`, navega a la ruta raíz ('/').

## 5. Estructura del Componente

### 5.1 Sección Principal
- Encabezado con título "envios" y botones de navegación y agregar.
- Subtítulo descriptivo.
- Barra de búsqueda (actualmente no funcional).
- Tabla de envíos con columnas para id_factura, dirección, precio, botón de editar y checkbox de habilitación.

### 5.2 Modal
- Modal para agregar/editar envío (actualmente vacío):
  - Título
  - Cuerpo del modal (sin implementar)
  - Botones de cerrar y guardar cambios

## 6. Interacción con Datos

- Los datos de los envíos están hardcodeados en el estado inicial de `envios`.
- La modificación del estado de habilitación se realiza localmente en el estado de React.
- No hay implementación actual para agregar o editar envíos, ni para persistir los cambios.
---
---


# facturas.js

## 1. Descripción General

El componente `Facturas` es una interfaz de usuario diseñada para mostrar y filtrar una lista de productos, posiblemente relacionados con facturas, en una aplicación React. Ofrece funcionalidades para buscar, filtrar por categorías y precio, y ordenar los productos mostrados.

## 2. Estados

### 2.1 Estados de Datos
- `productos` (array): Contiene la lista de productos. Cada producto es un objeto con las siguientes propiedades:
  - `id` (number): Identificador único del producto.
  - `nombre` (string): Nombre del producto.
  - `precio` (number): Precio del producto (inicializado en 0).
  - `img` (string): URL de la imagen del producto (inicializado como cadena vacía).

### 2.2 Estados de Navegación
- `back` (boolean): Controla la navegación de vuelta a la página principal.

## 3. Funciones Principales

### 3.1 Gestión de Navegación
- Función anónima en el botón "Volver":
  - Descripción: Cambia el estado `back` para iniciar la navegación de vuelta.
  - Comportamiento: Invierte el valor actual de `back`.

## 4. Efectos (useEffect)

- Efecto para manejar la navegación de vuelta:
  - Dependencias: `[back, navigate]`
  - Comportamiento: Cuando `back` se vuelve `true`, navega a la ruta raíz ('/').

## 5. Estructura del Componente

### 5.1 Barra Lateral (Filtros)
- Sección de categorías con etiquetas (tags).
- Checkboxes para filtrar por tipo de producto.
- Slider para filtrar por rango de precio.

### 5.2 Sección Principal
- Barra de búsqueda.
- Botones de ordenamiento (New, Precio ascendente, Precio descendente).
- Botón para volver.
- Lista de productos mostrados en tarjetas.

## 6. Interacción con Datos

- Los datos de los productos están hardcodeados en el estado inicial de `productos`.
- No hay implementación actual para filtrar, buscar o ordenar los productos.
---
---

# homepage.js

## 1. Descripción General

El componente `Homepage` es la página principal de la aplicación, que actúa como un dashboard o panel de control. Proporciona navegación a diferentes secciones de la aplicación y muestra información resumida sobre productos y pedidos.

## 2. Estados

### 2.1 Estados de Navegación
Todos los estados son booleanos que controlan la navegación a diferentes rutas:
- `producto`: Controla la navegación a la ruta '/productos'
- `clientes`: Controla la navegación a la ruta '/clientes'
- `envios`: Controla la navegación a la ruta '/envios'
- `facturas`: Controla la navegación a la ruta '/facturas'
- `perfil`: Controla la navegación a la ruta '/perfil'

## 3. Efectos (useEffect)

El componente utiliza múltiples efectos para manejar la navegación:

```javascript
useEffect(() => {
  if(producto) {
    navigate('/productos');
  }
}, [producto, navigate]);
  useEffect(()=>{
      if(clientes){
        navigate('/clientes');
      }
    },[clientes,navigate]);
    
    useEffect(()=>{
      if(envios){
        navigate('/envios');
      }
    },[envios, navigate]);
    
    useEffect(()=>{
    if(facturas){
      navigate('/facturas');
    }
    },[facturas,navigate]);
    
    useEffect(()=>{
    if(perfil){
      navigate('/perfil');
    }
      
    },[perfil,navigate]);

  ```

## 4. Estructura del Componente

### 4.1 Barra Lateral (sidebar)

Contiene botones de navegación para:

- Usuario (con ícono de perfil)
- Ventas (con ícono de carrito)
- Empresa (con ícono de compañía)
- Facturas (con ícono de tareas financieras)
- Clientes (con ícono de multitud)


### 4.2 Contenido Principal (main-content)

#### Encabezado

- Título "Nuestros Productos"
- Subtítulo "de Calidad"
- Botones de acción:

- Delivery (con ícono de calendario)
- Products (con ícono de productos)



#### Sección de Filtros

- Botones de filtro con etiquetas "Label"


#### Tarjetas de Productos

Dos tarjetas informativas:

1. Productos

1. Descripción de gestión de categorías y stock
2. Calificación de 5 estrellas
3. Ícono de favorito



2. Pedidos

1. Descripción de gestión de pedidos
2. Calificación de 5 estrellas
3. Ícono de favorito


## 5. Elementos de UI

### 5.1 Iconografía

El componente utiliza iconos de la biblioteca icons8:

- Usuario: '[https://img.icons8.com/color/48/user.png](https://img.icons8.com/color/48/user.png)'
- Carrito: '[https://img.icons8.com/fluency/48/shopping-cart.png](https://img.icons8.com/fluency/48/shopping-cart.png)'
- Empresa: '[https://img.icons8.com/ios/50/company--v1.png](https://img.icons8.com/ios/50/company--v1.png)'
- Facturas: '[https://img.icons8.com/ios/50/financial-tasks.png](https://img.icons8.com/ios/50/financial-tasks.png)'
- Clientes: '[https://img.icons8.com/ios/50/crowd.png](https://img.icons8.com/ios/50/crowd.png)'
- Calendario: '[https://img.icons8.com/ios/50/calendar-plus.png](https://img.icons8.com/ios/50/calendar-plus.png)'
- Productos: '[https://img.icons8.com/ios/50/fast-moving-consumer-goods.png](https://img.icons8.com/ios/50/fast-moving-consumer-goods.png)'


## 6. Estilos

El componente utiliza clases CSS específicas:

- `.app-container`: Contenedor principal
- `.sidebar`: Barra lateral
- `.sidebar-item`: Elementos de la barra lateral
- `.main-content`: Contenido principal
- `.header_home`: Estilos del encabezado
- `.filter-section`: Sección de filtros
- `.products-section`: Sección de tarjetas de productos
- `.product-card`: Tarjetas individuales de productos


## 7. Navegación

La navegación se implementa utilizando `useNavigate` de react-router-dom y se activa mediante:

- Clicks en los botones de la barra lateral
- Clicks en los botones de acción del encabezado
---
---
# Login.js Documentation

Este archivo define un componente React llamado `Login`, que incluye el componente `Homepage`. A continuación, se detalla su estructura y su función en la aplicación.

## Importaciones
```javascript
import React from 'react';
import Homepage from './homepage';
```
- React: Importa React para utilizar la funcionalidad de componentes.
- Homepage: Importa el componente Homepage desde el archivo homepage.js

## Componente Login
```javascript
const Login = () => {
    return (
        <div>
            <Homepage/>
        </div>
    );
};
```
- Función Login: Define un componente funcional que devuelve un div conteniendo el componente Homepage.
- <Homepage />: Muestra el componente Homepage, que representa la página principal tras el inicio de sesión.

# Exportacion
- Exporta el componente Login para que pueda importarse y usarse en otras partes de la aplicación.
---
---


# productos.js

## 1. Descripción General

El componente `Productos` es una interfaz completa para la gestión de productos y categorías. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos, gestionar categorías y realizar búsquedas en tiempo real.

## 2. Estados

### 2.1 Estados de Navegación y Control
- `back` (boolean): Controla la navegación de vuelta a la página principal
- `editar` (boolean): Controla el modo de edición de productos
- `modalAgregar` (boolean): Controla la visibilidad del modal de productos
- `modalCategory` (boolean): Controla la visibilidad del modal de categorías

### 2.2 Estados de Categoría
- `categoria` (string): Nombre de la nueva categoría
- `descripcionCategoria` (string): Descripción de la nueva categoría
- `categorias` (array): Lista de categorías existentes

### 2.3 Estados de Producto
- `idProductEdit` (number): ID del producto en edición
- `nombreProducto` (string): Nombre del producto
- `stockProducto` (number): Cantidad en stock
- `precioProducto` (number): Precio del producto
- `enabledProducto` (boolean): Estado de activación del producto
- `categoriaProduct` (number): ID de la categoría del producto
- `searchProducts` (string): Término de búsqueda
- `productos` (array): Lista de productos
- `editProduct` (array): Datos del producto en edición

## 3. Funciones Principales

### 3.1 Gestión de Productos

#### addProduct()
- Descripción: Agrega un nuevo producto
- Validaciones: Nombre no vacío y categoría seleccionada
- Endpoint: POST 'http://localhost:3001/addProduct'

#### getProducts()
- Descripción: Obtiene la lista de productos
- Parámetros: searchProducts (término de búsqueda)
- Endpoint: GET 'http://localhost:3001/getProducts'

#### deleteProduct(id)
- Descripción: Elimina un producto
- Parámetros: id (ID del producto)
- Endpoint: DELETE 'http://localhost:3001/deleteProduct'

#### editProducto()
- Descripción: Actualiza un producto existente
- Endpoint: PUT 'http://localhost:3001/updateProduct'

#### changeStateProduct(id, valor)
- Descripción: Cambia el estado de activación de un producto
- Endpoint: PUT 'http://localhost:3001/changeState'

### 3.2 Gestión de Categorías

#### getCatecogia()
- Descripción: Obtiene la lista de categorías
- Endpoint: GET 'http://localhost:3001/leerCategorias'

#### agregarCategory()
- Descripción: Agrega una nueva categoría
- Endpoint: POST 'http://localhost:3001/createCategory'

### 3.3 Gestión de Modales

- `cerrarModalProduc()`: Cierra el modal de productos y reinicia estados
- `abrirModalProduct()`: Abre el modal de productos
- `abrirModalCategory()`: Abre el modal de categorías
- `cerrarModalCategory()`: Cierra el modal de categorías

## 4. Efectos (useEffect)

1. Efecto de navegación: Maneja el retorno a la página principal
2. Efecto de modal de categoría: Controla apertura/cierre y reinicio de estados
3. Efecto de modal de producto: Controla apertura/cierre
4. Efecto de búsqueda: Actualiza la lista de productos
5. Efecto de edición: Maneja el estado de edición
6. Efecto de producto en edición: Actualiza los campos del formulario

## 5. Estructura del Componente

### 5.1 Sección Principal
- Encabezado con título y botón de agregar
- Barra de búsqueda
- Tabla de productos con columnas para:
  - Número
  - Nombre del producto
  - Stock
  - Categoría
  - Precio
  - Acciones (Editar/Eliminar)
  - Estado de activación

### 5.2 Modales
1. Modal de Productos
   - Campos para nombre, cantidad, precio y categoría
   - Botón para agregar nueva categoría
   - Opciones para guardar o cancelar

2. Modal de Categorías
   - Campos para nombre y descripción
   - Opciones para guardar o cancelar

## 6. Integración con API

El componente realiza múltiples llamadas a una API REST:
- GET: Obtener productos y categorías
- POST: Crear productos y categorías
- PUT: Actualizar productos y estados
- DELETE: Eliminar productos
---
---

# usuario.js

## 1. Descripción General

El componente `Usuario` es una interfaz de perfil de usuario que incluye un reloj en tiempo real y un formulario de información personal. Permite visualizar y editar la información básica del usuario.

## 2. Estados

### 2.1 Estados de Tiempo
- `hora` (number): Hora actual en formato 12 horas
- `minuto` (number): Minutos actuales
- `amPm` (string): Indicador AM/PM

### 2.2 Estados de Formulario
- `formData` (object): Datos del formulario con las siguientes propiedades:
  - `nombre`: Nombre del usuario
  - `usuario`: Nombre de usuario
  - `email`: Correo electrónico
  - `descripcion`: Descripción o biografía

### 2.3 Estados de Navegación
- `back` (boolean): Controla la navegación de vuelta

## 3. Efectos (useEffect)

### 3.1 Efecto del Reloj
- Actualiza la hora cada segundo
- Convierte el formato 24h a 12h
- Limpia el intervalo al desmontar el componente

### 3.2 Efecto de Navegación
- Controla el retorno a la página principal

## 4. Funciones

### handleInputChange(e)
- Descripción: Maneja los cambios en los campos del formulario
- Parámetros: Evento del input
- Actualiza el estado formData manteniendo los valores anteriores

## 5. Estructura del Componente

### 5.1 Sección Principal
- Botón de retorno
- Icono de usuario
- Selector de hora
- Formulario de perfil

### 5.2 Selector de Hora
- Campos para hora y minutos (deshabilitados)
- Botones AM/PM
- Botones de Cancel y OK

### 5.3 Formulario de Perfil
- Campo de nombre
- Campo de usuario
- Campo de email
- Campo de descripción
- Botón de editar
---
---

# ventas.js

## 1. Descripción General

El componente \`Ventas\` es una interfaz completa para gestionar transacciones de venta. Incluye funcionalidades para buscar productos, seleccionar clientes, calcular totales y gestionar el proceso de pago.

## 2. Estados

### 2.1 Estados de Datos
- \`inventario\` (array): Lista de productos en inventario
- \`productos\` (array): Lista de productos en la venta actual
- \`total\` (number): Monto total de la venta
- \`pagaCon\` (number): Monto con el que paga el cliente

### 2.2 Estados de Búsqueda
- \`searchProduct\` (boolean): Control de búsqueda de productos
- \`searchClient\` (boolean): Control de búsqueda de clientes
- \`searchC\` (boolean): Control adicional de búsqueda

## 3. Funciones Principales

### 3.1 Gestión de Búsqueda
- \`changeSearchProduct()\`: Alterna estados de búsqueda
- \`changeEditar()\`: Reinicia estados de búsqueda
- \`selectProduct(index)\`: Selecciona un producto del inventario
- \`clearProductsdata()\`: Limpia los campos de producto
- \`addProduct()\`: Agrega un producto a la venta

## 4. Estructura del Componente

### 4.1 Encabezado
- Botón de retorno
- Título
- Información del usuario

### 4.2 Sección de Venta
- Campos de producto
- Campos de cantidad
- Campos de precio
- Botones de acción

### 4.3 Tabla de Productos
- Lista de productos seleccionados
- Información detallada por producto

### 4.4 Sección Cliente y Pago
- Búsqueda de cliente
- Información del cliente seleccionado
- Cálculo de total y cambio

### 4.5 Modal de Búsqueda
- Búsqueda de productos/clientes
- Tabla de resultados
- Botones de acción

## 5. Funcionalidades Principales

### 5.1 Gestión de Productos
- Búsqueda en inventario
- Selección de productos
- Cálculo automático de precios
- Limpieza de campos

### 5.2 Gestión de Clientes
- Búsqueda de clientes
- Selección de cliente
- Visualización de información del cliente

### 5.3 Gestión de Pagos
- Cálculo automático del total
- Cálculo del cambio
- Visualización de montos

## 6. Interacción con Datos

### 6.1 Datos de Inventario
```javascript
{
  codigo: string,
  producto: string,
  stock: number,
  precioUnidad: number
}