const argv = require('./config/yargs').argv;


const { CrearArchivo } = require('./multiplicar/multiplicar');
const { ListarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'Listar':
        ListarTabla(argv.base, argv.limite).then(archivo => console.log(`Resultados Calculados: ${ archivo }`)).catch(err => console.log(err));
        break;
    case 'Crear':
        CrearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ archivo }`)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}