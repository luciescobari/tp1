"use strict";

let productos = [];
let codigo =0, nombre='', categoria='', precio=0, descripcion='';

const cargarProductos = () => {

    codigo = document.getElementById ('codigoProducto').value;
    nombre = document.getElementById ('nombreProducto').value;
    categoria = document.getElementById ('categoriaProducto').value;
    precio = document.getElementById ('precioProducto').value;
    descripcion = document.getElementById ('descripcionProducto').value;
    
}

function mostrarProductos () {
    let listaProductos = document.getElementById ("lista-productos");
    listaProductos.innerHTML= "";

    for (let i=0; i<productos.length; i++) {
        let producto = productos [i];

        let li = document.innerHTML ("li");
        li.innerHTML = " <b>Código:</b> " + producto.codigo + " <br>"
                        "<b>Nombre:</b> " + producto.nombre + " <br>"
                        "<b>Categoría:</b> " + producto.categoria + " <br>"
                        "<b>Precio:</b> " + producto.precio + " <br>" 
                        "<b>Descripción:</b> " + producto.descripcion + " <br> "

        listaProductos.innerHTML(li);
    }
}