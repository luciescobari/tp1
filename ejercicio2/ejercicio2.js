"use strict";

let productos = [];

function agregarProducto () {

    do {
        let codigo = parseInt (prompt("Ingrese el código del producto:"));
        let nombre = prompt ("Ingrese el nombre del producto:");
        let categoria = prompt ("Ingrese la categoría del producto:");
        let precio = parseFloat (prompt("Ingrese el precio del producto:"));
        let descripcion = prompt ("Ingrese la descripción del producto:");
    } while (confirm ("¿Desea seguir ingresando productos?"));

    let producto = {
        codigo: codigo,
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        descripcion: descripcion,
    }

    productos.push (producto);
    alert ("Se cargó el producto");
    
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