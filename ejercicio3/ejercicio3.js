'use strict';
let tv = []
tv [0] = ['QLED 50" SAMSUNG','CODIGO 320',217000,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv1'];
tv [1] = ['QLED 50" PHILIPS','CODIGO 321',205000,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv2'];
tv [2] = ['QLED 50" TCL','CODIGO 322',233000,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tv [3] = ['QLED 50" HISENSE','CODIGO 323',214870,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv4'];
tv [4] = ['QLED 50" LG','CODIGO 324',157848,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv5'];
tv [5] = ['QLED 50" SONY','CODIGO 325',201113,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv6'];
tv [6] = ['QLED 50" NOBLEX','CODIGO 326',195602,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv7'];
tv [7] = ['QLED 50" NOBLEX','CODIGO 327',125758,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv8'];
tv [8] = ['QLED 50" TCL','CODIGO 328',198555,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv9'];

let tvmayorprecio = []
tvmayorprecio[0] = ['QLED 50" TCL', 'CODIGO 322',233000,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[1] = ['QLED 50" SAMSUNG', 'CODIGO 320',217000,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[2] = ['QLED 50" HISENSE', 'CODIGO 323',214870,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[3] = ['QLED 50" PHILIPS', 'CODIGO 321',205000,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[4] = ['QLED 50" SONY', 'CODIGO 325',201113,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[5] = ['QLED 50" TCL', 'CODIGO 328',198555,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[6] = ['QLED 50" NOBLEX', 'CODIGO 326',195602,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[7] = ['QLED 50" LG', 'CODIGO 324',157848,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];
tvmayorprecio[8] = ['QLED 50" NOBLEX', 'CODIGO 32',125758,'Televisor QLED con pantalla de 50", UHD 4K (3840X2160) Formato de pantalla wide. Quantum Processor Lite 4k.','img/tv3'];

function info(){
    let mostrar = '<button onclick="mayor();"> ordenar por mayor precio </button> <button onclick="menor();"> ordenar por menor precio</button> <div class="contenido">';
    for (let x in tv){
        mostrar += `<div class="tarjeta">
        <h2>${tv[x][0]} </h2>
        <img src= "${tv[x][4]}.jpg" alt="tv">
        <p class="p1">$ ${tv[x][2]}</p> 
        <p class="p2">$ ${tv[x][3]}</p> 
        <p class="p3">$ ${tv[x][1]}</p></div>`;
    } 
    mostrar+= '</div>';
    document.getElementById("listado").innerHTML = mostrar;
}

function mayor(){
    let mostrar = '<button onclick="mayor();"> ordenar por mayor precio </button> <button onclick="menor();"> ordenar por menor precio</button> <div class="contenido">';
    for (let x in tv){
        mostrar += `<div class="tarjeta">
        <h2>${tvmayorprecio[x][0]} </h2>
        <img src= "${tvmayorprecio[x][4]}.jpg" alt="tv">
        <p class="p1">$ ${tvmayorprecio[x][2]}</p> 
        <p class="p2">$ ${tvmayorprecio[x][3]}</p> 
        <p class="p3">$ ${tvmayorprecio[x][1]}</p></div>`;
    } 
    mostrar+= '</div>';
    document.getElementById("listado").innerHTML = mostrar;
}

function menor(){
    let mostrar = '<button onclick="mayor();"> ordenar por mayor precio </button> <button onclick="menor();"> ordenar por menor precio</button> <div class="contenido">';
    for (let i=8;i>=0;i--){
        mostrar += `<div class="tarjeta">
        <h2>${tvmayorprecio[x][0]} </h2>
        <img src= "${tvmayorprecio[x][4]}.jpg" alt="tv">
        <p class="p1">$ ${tvmayorprecio[x][2]}</p> 
        <p class="p2">$ ${tvmayorprecio[x][3]}</p> 
        <p class="p3">$ ${tvmayorprecio[x][1]}</p></div>`;
    } 
    mostrar+= '</div>';
    document.getElementById("listado").innerHTML = mostrar;
}