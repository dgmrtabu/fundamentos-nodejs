const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, lis = false, has = 10) => {

    try {

        let salida = '';
        let consola = '';

        //for (let hasta = 1; hasta <= has; hasta++) {
        for (let i = 1; i <= has; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.yellow} ${i} ${'='.red} ${base * i}\n`;
        }
        //}

        if (lis) {
            console.log('======================'.green);
            console.log('Tabla del:'.red, colors.blue(base));
            console.log('======================'.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}