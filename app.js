const fs = require('fs')    // Se carga la libreria para file system


console.clear();

console.log('==========================');
console.log('Tabla del 5');
console.log('==========================');

// Tabla de multiplicar
let salida = '';
const base = 3;
for( let i = 1; i <= 10; i++ )
    salida += `${base} * ${i} = ${base * i}\n` ;

console.log(salida);


fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log('Archivo creado');
});

