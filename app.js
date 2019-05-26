const argv = require('./config/yargs').argv,
      colors = require('colors');
      toDo = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(toDo.crearTarea(argv.nombre));
        break;
    case 'listar':
        let listaTareas = toDo.obtenerTareas(argv.completado);
        console.log('============Tareas por Hacer============'.green);
        for (let tarea of listaTareas) {
            console.log(tarea.nombre);
            console.log(`Estado: ${tarea.completado}`);
        }
        console.log('========================================'.green);
        break;
    case 'actualizar':
        console.log(toDo.actualizarTarea(argv.nombre, argv.completado));
        break;
    case 'borrar':
        console.log(toDo.borrarTarea(argv.nombre));
        break;
    default:
        console.log('No se reconoce el comando');
}