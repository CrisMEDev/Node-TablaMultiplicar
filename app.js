const { crearArchivo } = require('./helpers/multiplicar'); 
const argv = require('./config/yargs');

console.clear();



// --------------------------------------------------------------------------------------
// console.log(process.argv);  // Imprime los argumentos enviados desde consola
// const [ , , arg3 = '--base=5' ] = process.argv;     // Se asigna un valor por defecto a arg3 para evitar el undefined
// const [ , base = '5' ] = arg3.split('=');
// console.log(arg3);
// console.log(base);
// --------------------------------------------------------------------------------------




// En consola colorcar: node app --base=5 ó node app --base 5
// node app --help  // Muestra las opciones para la app que se está desarrollando
console.log( argv );
console.log( 'yargs base: ', argv.base );





// Tabla de multiplicar 
crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch(err => console.log(err));


