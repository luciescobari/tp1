"use strict";

let productos = [];
const cargarProducto = () => {
    const codigo = document.getElementById('codigo');
    const nombre = document.getElementById('nombre').Value;
    const categoria = document.getElementById('categoria').Value;
    const precio = document.getElementById('precio').Value;
    const descripcion = document.getElementById('descripcion').Value;

    const producto = {
        codigo: codigo,
        nombre: nombre,
        categoria: categoria, 
        precio: precio,
        descripcion: descripcion
    };

    productos.push(producto);

    document.getElementById('codigo').value = "";
    document.getElementById('nombre').value = "";
    document.getElementById('categoria').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('descripcion').value = "";

}

    function verProductos() {
        let tabla = "<table><tr><th>Código</th><th>Nombre</th><th>Categoria</th><th>Precio</th><th>Descripcion</th></tr>";
        for (let i = 0; i < productos.length; i++){
            tabla += "<tr>";
            tabla += "<td>" + productos[i].codigo + "</td>";
            tabla += "<td>" + productos[i].nombre + "</td>";
            tabla += "<td>" + productos[i].categoria + "</td>";
            tabla += "<td>" + productos[i].precio + "</td>";
            tabla += "<td>" + productos[i].descripcion + "</td>";
            tabla += "</tr>";
        }

        tabla += "</table>";
        document.getElementById("productos").innerHTML = tabla;
    }
