const fs = require('fs');
const colors = require('colors');

//fs.writeFileSync
const crearTabla = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.cyan} ${base * i}\n`;
    }
    if (listar) {
      console.log('======================'.green);
      console.log('Tabla del:'.italic.blue.bold, colors.cyan.italic(base));
      console.log('======================'.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearTabla,
};

//fs.writefile
// const crearTabla = (base = 5) => {
//   console.log('Tabla del:', base);
//   let salida = '';

//   for (let i = 1; i <= 10; i++) {
//     salida += `${base} x ${i} = ${5 * i}\n`;
//   }

//   fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`Tabla del ${base} creada`);
//   });
// };
