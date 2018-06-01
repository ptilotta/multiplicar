const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promisse((resolve, reject) => {
        if (!number(base)) {
            reject(`Base ${ base } no es numerico`);
            return;
        }
        if (!limite(base)) {
            reject(`Limite ${ limite } no es numerico`);
            return;
        }
        let resultado = '';
        for (let i = 1; i <= limite; i++) {
            resultado += `${ base } * ${ limite } = ${ base * limite }`;
        }
        resolve(resultado);
    })
}
let CrearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });
    })
}

module.exports = {
    CrearArchivo,
    listarTabla
}