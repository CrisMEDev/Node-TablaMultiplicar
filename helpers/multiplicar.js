const fs = require('fs')    // Se carga la libreria para file system
const colors = require('colors');


const crearArchivo = async ( base = 5, listar = false ) => {

    // return new Promise( ( resolve, reject ) => {
    //     console.log('==========================');
    //     console.log(`Tabla del ${base}`);
    //     console.log('==========================');

    //     let salida = '';
    //     for( let i = 1; i <= 10; i++ )
    //         salida += `${base} * ${i} = ${base * i}\n` ;

    //     console.log(salida);

    //     fs.writeFileSync( `tabla-${base}.txt`, salida );

    //     resolve(`tabla-${base}.txt`);
    //     reject('No se pudo crear el archivo');
    // });

    try {
        console.log('=========================='.cyan);
        console.log(`Tabla del ${colors.blue(base)}`);
        console.log('=========================='.cyan);

        let salida = '';
        for( let i = 1; i <= 10; i++ )
            salida += `${base} * ${i} = ${base * i}\n` ;


        if ( listar ) console.log(colors.green(salida));

        fs.writeFileSync( `tabla-${base}.txt`, salida );

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}


module.exports = {
    crearArchivo,           // crearArchivo: crearArchivo  // Misma línea que la que se dejó
}
