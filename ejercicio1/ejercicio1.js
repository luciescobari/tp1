'use strict';

let tazas = [

['taza1.png', 'Taza Buenos Aires', 1500],
['taza2.png', 'Taza B&V', 1000],
['taza3.png', 'Taza Toy Story', 3000],
['taza4.png', 'Taza B&R', 1000],
['taza5.png', 'Taza Winnie Pooh', 3500],
['taza6.png', 'Taza roja', 1300],
['taza7.png', 'Taza Mario', 3200],
['taza8.png', 'Taza Starbucks', 2800],
['taza9.png', 'Taza Jack', 3240],

];

console.log (tazas);


const verProductos = () => {
    let productos = '';

    for (let indiceProducto in tazas) {
        productos += `<h2> Producto ${indiceProducto}</h2>`;
        productos += '<ul>';
        
        for (let indiceNro in tazas [indiceProducto]) {
            if (indiceNro == 0) {
                productos += ` <div><li><a href="" target = "_blank"> <img src= img/${tazas[indiceProducto][indiceNro]}> </a> </li>`
            } else if (indiceNro == 1) {
                productos += `<li> ${tazas[indiceProducto][indiceNro]} </li>`;
            } else if (indiceNro == 2) {
                productos += `<li> $ ${tazas [indiceProducto][indiceNro]} </li>`;
            }
        } productos += '</ul>';
    }
    document.getElementById ('productos').innerHTML = productos;
}
