import { useState, useEffect, useRef } from 'react'
import { generarMatriz } from './utils.js'

export default function App() {
  // todo esto esta dentro del div #root
  const [filas, setFilas] = useState(8)
  const [columnas, setColumnas] = useState(15)
  const [regla, setRegla] = useState(30)

  // console.log('render', filas, columnas, regla)
  const [matriz, setMatriz] = useState(generarMatriz(regla, filas, columnas))

  // para las reglas personalizadas
  const values = ['111', '110', '101', '100', '011', '010', '001', '000']
  const data = useRef({
    '111': 0,
    '110': 0,
    '101': 0,
    '100': 0,
    '011': 0,
    '010': 0,
    '001': 0,
    '000': 0
  })

  // para ejecutar cada que se entra a la pagina por primera vez
  useEffect(() => {
    const inputFilas = document.getElementById('inputFilas')
    inputFilas.value = 8

    const inputColumnas = document.getElementById('inputColumnas')
    inputColumnas.value = 15
  }, [])
  
  useEffect(() => {
    console.log('triggering table...')
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
          <label>o </label>
          <button
            onClick={() => document.getElementById('container_regla_custom').classList.remove('toggle')}
          >Crea una regla</button>
          <div className='container_regla_custom toggle' id='container_regla_custom'>
            <button className='boton_cerrar'
              onClick={() => document.getElementById('container_regla_custom').classList.add('toggle')}
            >X</button>
            <div className='opciones'>
              {values.map((x, i) => (
                <div key={i}>
                  <Options id={x} data={data.current}/>
                </div>
              ))}
            </div>
            <button className='regla_custom' onClick={() => {
              console.log(data.current)
              setRegla({...data.current})
            }}>
              usar esta regla
            </button>
          </div>
        </div>
        <table>
          <tbody>
            {matriz.map((filas, i) => (
              <tr key={`${i}`}>
                {filas.map((celda, j) => {
                  if (celda)
                    return <td className='painted' key={`${i}${j}`}></td>
                  return <td key={`${i}${j}`}></td>
                })}
              </tr>
            ))}
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

function Options(params) {
  return (
    <table>
      <tbody>
        <tr>
          {
            params.id.split('').map((x, i) => {
              if (x === '1')
                return <td className='painted' key={i}></td>
              return <td key={i}></td>
            })
          }
        </tr>
        <tr>
          <td className='borderless'></td>
          <td id={`data-${params.id}`}></td>
          <td className='borderless'></td>
        </tr>
        <tr>
          <td colSpan={3} className='borderless'>
            <label className="switch">
              <input type="checkbox" onChange={() => {
                document.getElementById(`data-${params.id}`).classList.toggle('painted')
                params.data[params.id] = !params.data[params.id] ? 1 : 0
              }}/>
                <span className="slider round"></span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  )
}