const { crearArchivo } = require('./helpers/multiplicar') 


console.clear();


// console.log(process.argv);  // Imprime los argumentos enviados desde consola
const [ , , arg3 = '--base=5' ] = process.argv;     // Se asigna un valor por defecto a arg3 para evitar el undefined
const [ , base = '5' ] = arg3.split('=');
console.log(arg3);
console.log(base);






// Tabla de multiplicar 
// const base = 3;
crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch(err => console.log(err));


