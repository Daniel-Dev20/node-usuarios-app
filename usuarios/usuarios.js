const fs = require('fs');

let usuarios = [];


//Funcion para guardar usuario en json
const guardarUsuarioDB = () => {
    let data = JSON.stringify(usuarios);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo guardar el usuario');
    });
}

//Funcion para listar usuarios
const cargarUsarios = () => {
    try{
        usuarios = require('../db/data.json');
    }catch(err){
        usuarios = [];
    }
}

//Funcion para crear usuario
const crearUsuario = (nombre, apellido, edad, estatus = true) => {
    cargarUsarios();
    
    let CrearUsuario = {
        nombre, 
        apellido,
        edad,
        estatus
    };

    usuarios.push(CrearUsuario);
    guardarUsuarioDB();
    return CrearUsuario;
}

//Funcion para listar usuarios
const listarUsuarios = () => {
    cargarUsarios();
    return usuarios;

}

//Funcion para actualizar usuarios si esta activo o no

const actualizar = (nombre,  estatus = true) => {
    cargarUsarios();
    
    let index = usuarios.findIndex(usuario => usuario.nombre === nombre);

    if(index >=0){
        usuarios[index].estatus = estatus;
        guardarUsuarioDB();
        return true;
    }else{
        return false
    }
}

//Funcion para eliminar usuarios
const borrarUsuario = (nombre) => {
    cargarUsarios();

    let borrado = usuarios.filter(usuario => usuario.nombre !== nombre);

    if(borrado.length === nombre.length){
        return false;
    }else{
        usuarios = borrado;
        guardarUsuarioDB();
        return true;
    }
}


module.exports = {
    crearUsuario,
    listarUsuarios,
    actualizar, 
    borrarUsuario
}