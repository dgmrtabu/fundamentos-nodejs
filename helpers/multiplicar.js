const fs = require('fs');

const crearArchivo = async(base) => {

    try {

        console.log('======================');
        console.log('Tabla del: 5', base);
        console.log('======================');

        let salida = '';

        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`Tabla-${base}.txt`, salida);


        return `Tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}