const argv = require('yargs')
        .option( 'b', {
            alias: 'base',
            type:'number',
            demandOption: true,
            description: 'La base para la tabla de multiplicar'
        })
        .option( 'l', {
            alias: 'listar',
            type:'boolean',
            default: false,
            description: 'Decide si mostrar o no la tabla en consola'
        })
        .check( (argv, options) => {
            if ( isNaN( argv.b ) ) throw 'La base tiene que ser un número';
            return true;  // Si no hay error devuelve true
        })
        .argv; // Se extrae la propiedad argv del paquete yargs


module.exports = argv;