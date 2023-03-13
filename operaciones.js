const fs = require('fs')


const registrar = (nombre, edad, animal, color, enfermedad) => {
    const datos =
    {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    }

    const datosAnteriores = fs.readFileSync('citas.json', 'utf8')
    const leerJson = JSON.parse(datosAnteriores)
    leerJson.push(datos)
    fs.writeFileSync('citas.json', JSON.stringify(leerJson))
}

const leer = () => {
    const datos = fs.readFileSync('citas.json', 'utf8')
    console.log(JSON.parse(datos))
    };
    
module.exports = { registrar, leer }
