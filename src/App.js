import { useState, useEffect } from 'react'
import { generarMatriz } from './utils.js'

export default function App() {
  // todo esto esta dentro del div #root
  const [filas, setFilas] = useState(8)
  const [columnas, setColumnas] = useState(15)
  const [regla, setRegla] = useState(30)

  // console.log('render', filas, columnas, regla)
  const [matriz, setMatriz] = useState(generarMatriz(regla, filas, columnas))

  // para ejecutar cada que se entra a la pagina por primera vez
  useEffect(() => {
    const inputFilas = document.getElementById('inputFilas')
    inputFilas.value = 8

    const inputColumnas = document.getElementById('inputColumnas')
    inputColumnas.value = 15
  }, [])

  useEffect(() => {
    setMatriz(generarMatriz(regla, filas, columnas))
  }, [regla, filas, columnas])

  return (
    <>
      <div className='content'>
        <h1 className='title'>
          Aplicación de las reglas autómatas celulares
        </h1>
        <div className='container_input'>
          <div className='reglas_conocidas'>
            <div className='grupo'>
              <label>Regla: </label>
              <select id='combobox'>
                <option value={30}>Regla 30</option>
                <option value={54}>Regla 54</option>
                <option value={60}>Regla 60</option>
                <option value={90}>Regla 90</option>
              </select>
            </div>
            <div className='grupo'>
              <label>Filas: </label>
              <input type={'number'} min={8} max={50} id='inputFilas' />
            </div>
            <div className='grupo'>
              <label>Columnas: </label>
              <input type={'number'} min={15} max={50} id='inputColumnas' />
            </div>
            <button
              onClick={() => {
                setFilas(parseInt(document.getElementById('inputFilas').value))
                setColumnas(parseInt(document.getElementById('inputColumnas').value))
                const combobox = document.getElementById('combobox')
                setRegla(combobox.options[combobox.selectedIndex].value)
              }}
            >actualizar</button>
          </div>
        </div>
        <div className='regla_custom'>
          <div>
            <label>o </label>
            <button>Crea una regla</button>
          </div>
        </div>
        <table>
          <tbody>
            {
              matriz.map((filas, i) => (
                <tr key={`${i}`}>
                  {
                    filas.map((celda, j) => {
                      if (celda)
                        return <td className='painted' key={`${i}${j}`}></td>
                      return <td key={`${i}${j}`}></td>
                    })
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <div className='footer'>
      Made with <span className='hearts'>&nbsp;&#10084;&nbsp;</span> by Dr Matth
    </div>
  )
}