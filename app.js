const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

// console.log(argv);
console.log('base: yargs', argv.b);
// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// const base = 6;

crearTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
  .catch((err) => console.log(err));
