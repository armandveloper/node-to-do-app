const fs = require('fs');

let listaTareas = [],
    rutaArchivo = 'db/data.json';

const guardarDB = () => {
    let datos = JSON.stringify(listaTareas);
    fs.writeFile(rutaArchivo, datos, err => {
        if (err)  throw new Error('No se creó el archivo', err)
    });
};

const consultarDB = () => {
    try {
        // Manera de leer un archivo JSON
        listaTareas = require('../db/data.json'); // En este caso devuelve un arreglo
    }
    catch (err) {
        listaTareas = [];
    }
};

const crearTarea = nombre => {
    consultarDB();    
    let tarea = {
        nombre,
        completado: false
    };
    listaTareas.push(tarea);
    guardarDB();
    return tarea;
};

const obtenerTareas = (completado = true) => {
    if (completado === 'false') completado = false
    consultarDB();
    let nuevaLista = listaTareas.filter(tarea => tarea.completado === completado);
    return nuevaLista;
};

const actualizarTarea = (nombre, completado = true) => {
    consultarDB();
    let indice = listaTareas.findIndex(tarea => tarea.nombre === nombre);  
    if (indice >= 0) {
        listaTareas[indice].completado = completado;
        guardarDB();
        return true;
    }
    return false;
};

const borrarTarea = (nombre) => {
    consultarDB();
    let indice = listaTareas.findIndex(tarea => tarea.nombre === nombre);
    if (indice >= 0) {
        listaTareas.splice(indice, 1);
        guardarDB();
        return true;
    }
    return false;
};

module.exports = {
    crearTarea,
    obtenerTareas,
    actualizarTarea,
    borrarTarea
};