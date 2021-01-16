const argv = require('./config/yargs').argv;
const usuarios = require('./usuarios/usuarios');
const colors = require('colors');

const comando = argv._[0];


switch(comando){
    case 'crear':
        let usuario = usuarios.crearUsuario(argv.nombre, argv.apellido, argv.edad);
        console.log(usuario);
        break;
    case 'listar':
        let listado = usuarios.listarUsuarios();
        for( listadoUsuario of listado){
            console.log('========='.red);
            console.log(listadoUsuario);
            console.log('========='.red);
        }
        console.log(listado);
        break;
    case 'actualizar':
        let actualizado = usuarios.actualizar(argv.nombre, argv.estatus);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = usuarios.borrarUsuario(argv.nombre);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
}