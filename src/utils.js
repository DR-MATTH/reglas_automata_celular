// Dr Matth
// primero vemos las reglas que conocemos y luego las demás

const regla30 = {
    '111': 0,
    '110': 0,
    '101': 0,
    '100': 1,
    '011': 1,
    '010': 1,
    '001': 1,
    '000': 0,
}

const regla54 = {
    '111': 0,
    '110': 0,
    '101': 1,
    '100': 1,
    '011': 0,
    '010': 1,
    '001': 1,
    '000': 0,
}

const regla60 = {
    '111': 0,
    '110': 0,
    '101': 1,
    '100': 1,
    '011': 1,
    '010': 1,
    '001': 0,
    '000': 0,
}

const regla90 = {
    '111': 0,
    '110': 1,
    '101': 0,
    '100': 1,
    '011': 1,
    '010': 0,
    '001': 1,
    '000': 0,
}

/**
 * Esta funcion recibe el numero o condiciones de la regla que se va a utilizar, las dimensiones
 * y genera la matriz de valores
 * @param {Number | Object} regla diccionario que contiene las condiciones de la regla o numero de la regla
 * @param {Number} n cantidad de filas
 * @param {Number} m cantidad de columnas
 * @return {Number[][]} matriz generada con la regla
 */
export function generarMatriz(regla, n, m) {
    if (typeof(regla) === 'object')
        return generarMatriz(regla, n, m)
    // estos pueden ser string o number
    if (regla == 30)
        return generarMatrizHelper(regla30, n, m)
    if (regla == 54)
        return generarMatrizHelper(regla54, n, m)
    if (regla == 60)
        return generarMatrizHelper(regla60, n, m)
    if (regla == 90)
        return generarMatrizHelper(regla90, n, m)
}

/**
 * Aqui se realizan todos los calculos para generar la matriz
 */
function generarMatrizHelper(regla, n, m) {
    // creamos la matriz de ceros
    let matriz = Array(n).fill().map(() => Array(m).fill(0))
    // colocamos el valor semilla
    matriz[0][Math.trunc(m/2)] = 1
    // console.log(JSON.stringify(matriz))
    // console.log(JSON.stringify(regla))
    let condicion = ''
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m - 1; j++) {
            condicion = [matriz[i-1][j-1], matriz[i-1][j], matriz[i-1][j+1]].join('')
            // console.log(JSON.stringify(condicion), regla[condicion])
            // aqui entra con los valores en binario y obtiene la salida
            matriz[i][j] = regla[condicion]
            // console.log(matriz[i][j])
        }
    }
    // console.log(JSON.stringify(matriz))

    return matriz
}