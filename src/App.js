import { generarMatriz } from './utils.js'

export default function App() {
  // todo esto esta dentro del div #root

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
                <option>selecciona una regla</option>
                <option value={30}>Regla 30</option>
                <option value={54}>Regla 54</option>
                <option value={60}>Regla 60</option>
                <option value={90}>Regla 90</option>
              </select>
            </div>
            <div className='grupo'>
              <label>Filas: </label>
              <input type={'number'} min={8}></input>
            </div>
            <div className='grupo'>
              <label>Columnas: </label>
              <input type={'number'} min={15}></input>
            </div>
            <button>actualizar</button>
          </div>
        </div>
        <div className='regla_custom'>
          <div>
            <label>o </label>
            <button>Crea una regla</button>
          </div>
        </div>
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