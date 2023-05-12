"use strict";
/*Una empresa llamada Texit se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, y solicita
que la misma tenga un botón que diga cargar producto, y cada vez
que se le haga clic, podrá cargarse un producto, también se pide un
botón que diga ver productos para poder ver los productos cargados.
El usuario podrá cargar la siguiente información:
a. Código del producto.
b. Nombre del producto.
c. Categoría del producto.
d. Precio del producto.
e. Descripción del producto.*/


let productos = [];
let codigo =0, nombre='', categoria='', precio=0, descripcion='';

const mostrarProductos = () => {

    codigo = document.getElementById ('codigoProducto').value;
    nombre = document.getElementById ('nombreProducto').value;
    categoria = document.getElementById ('categoriaProducto').value;
    precio = document.getElementById ('precioProducto').value;
    descripcion = document.getElementById ('descripcionProducto').value;

    document.getElementById('mostrarProducto').innerHTML = (`<ul>
    <li> Codigo del producto: ${codigo} </li>
    <li> Nombre del producto: ${nombre} </li>
    <li> Categoria del producto: ${categoria} </li>
    <li> Precio del producto: ${precio} </li>
    <li> Descripcion del producto: ${descripcion} </li> </ul>`)

}