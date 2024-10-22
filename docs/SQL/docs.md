Documentación:
1. DOCUMENT_TYPE: Almacena los diferentes tipos de documentos de identidad.

   * ID_DOCUMENT_TYPE: Identificador único.
   * TYPE: Nombre del tipo de documento (e.g., pasaporte, cédula).

2. ROLE: Define diferentes roles en el sistema (e.g., administrador, vendedor).

    * ID_ROLE: Identificador único del rol.
    * ROLE_NAME: Nombre del rol.
    * DESCRIPTION: Descripción breve del rol.
3. SELLER: Almacena los datos de los vendedores.

    * ID_SELLER: Identificador único del vendedor.
    * FIRST_NAME, LAST_NAME: Nombres y apellidos del vendedor.
    * DOCUMENT_TYPE_ID: Relaciona el tipo de documento del vendedor.
    * DOCUMENT_NUMBER: Número de documento.
    * ROLE_ID: Relaciona el rol del vendedor.
    * CREATED_AT, UPDATED_AT: Timestamps de creación y actualización.
  
4. PERSON: Información básica de una persona (base para clientes).

    * ID_PERSON: Identificador único.
    * FIRST_NAME, LAST_NAME: Nombres y apellidos.
    * ADDRESS: Dirección de la persona.
    * DOCUMENT_TYPE_ID: Relaciona el tipo de documento de la persona.
    * DOCUMENT_NUMBER, PHONE: Número de documento y teléfono.

5. CUSTOMER: Almacena la relación entre la tabla PERSON y los clientes.

    * ID_CUSTOMER: Identificador único.
    * PERSON_ID: Relaciona con una persona.

6. SUPPLIER: Almacena la información de los proveedores.

    * ID_SUPPLIER: Identificador único.
    * NAME: Nombre del proveedor.
    * NIT: Número de identificación tributaria.
    * PHONE: Teléfono del proveedor.

7. CATEGORY: Almacena las categorías de los productos.

    * ID_CATEGORY: Identificador único.
    * CATEGORY_NAME: Nombre de la categoría.
    * DESCRIPTION: Breve descripción de la categoría.

8. PRODUCT: Almacena la información de los productos.

    * ID_PRODUCT: Identificador único del producto.
    * PRODUCT_NAME: Nombre del producto.
    * STOCK: Cantidad de productos disponibles.
    * PRICE: Precio del producto.

9. PRODUCT_CATEGORY: Relaciona productos con categorías.

    * ID_PRODUCT_CATEGORY: Identificador único.
    * CATEGORY_ID: Relaciona el producto con su categoría.
    * PRODUCT_ID: Relaciona el producto.

10. PRODUCT_SUPPLIER: Relaciona productos con proveedores.

    * ID_PRODUCT_SUPPLIER: Identificador único.
    * PRODUCT_ID, SUPPLIER_ID: Relacionan productos y proveedores.

11. INVOICE_STATUS: Almacena los posibles estados de una factura (e.g., pagada, pendiente).

    * ID_INVOICE_STATUS: Identificador único.
    * STATUS_NAME: Nombre del estado.
    * DESCRIPTION: Descripción breve del estado.

12. INVOICE: Almacena la información de las facturas emitidas.

    * ID_INVOICE: Identificador único.
    * CUSTOMER_ID: Relaciona la factura con un cliente.
    * STATUS_ID: Estado de la factura.

13. INVOICE_PRODUCT: Relaciona productos con facturas.

    * ID_INVOICE_PRODUCT: Identificador único.
    * PRODUCT_ID, INVOICE_ID: Relacionan productos con una factura.

14. ORDER_STATUS: Define los posibles estados de un pedido (e.g., en proceso, entregado).

    * ID_ORDER_STATUS: Identificador único.
    * STATUS_NAME: Nombre del estado.

15. ORDER: Almacena la información de los pedidos realizados.

    * ID_ORDER: Identificador único.
    * INVOICE_ID: Relaciona un pedido con una factura.
    * STATUS_ID: Relaciona un pedido con su estado.
    * DETAILS: Detalles adicionales del pedido.