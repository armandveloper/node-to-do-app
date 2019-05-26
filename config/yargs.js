const nombre = {
    demand: true,
    alias: 'n',
    desc: 'Nombre de la tarea'
},
completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si la tarea se ha completado'
};


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        nombre
    })
    .command('listar', 'Muestra las tareas', {
        completado
    })
    .command('actualizar', 'Cambia el estado de una tarea a completado', {
        nombre,
        completado
    })
    .command('borrar', 'Elimina una tarea de la lista', {
        nombre
    })
    .help()
    .argv;

module.exports = {
    argv
};