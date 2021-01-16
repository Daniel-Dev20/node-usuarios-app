

const opts = {
    nombre:{
        demand:true,
        alias: 'n'
    },
    apellido:{
        demand:true,
        alias: 'a'
    },
    edad:{
        demand: true,
        alias: 'e'
    }

}
const actualizar = {
    nombre:{
        demand: true,
        alias: 'n'
    },
    estatus:{
        demand: true,
        alias: 't'
    }
}

const borrar = {
    nombre:{
        demand: true,
        alias: 'n'
    }
}

const argv = require('yargs')
.command('crear', 'Crea un usuario', opts)
.command('actualizar', 'Actualiza un usuario', actualizar)
.command('borrar', 'Borra un usuario', borrar).help().argv;


module.exports = {
    argv
}