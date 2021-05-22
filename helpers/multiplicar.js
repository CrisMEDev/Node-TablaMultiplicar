const fs = require('fs')    // Se carga la libreria para file system


const crearArchivo = ( base = 5 ) => {

    console.log('==========================');
    console.log(`Tabla del ${base}`);
    console.log('==========================');

    let salida = '';
    for( let i = 1; i <= 10; i++ )
        salida += `${base} * ${i} = ${base * i}\n` ;

    console.log(salida);

    fs.writeFileSync( `tabla-${base}.txt`, salida );
}


module.exports = {
    crearArchivo,           // crearArchivo: crearArchivo  // Misma línea que la que se dejó
}
