
export default function App() {
  // todo esto esta dentro del div #root
  return (
    <>
      <div className='content'>
        Hello World!
      </div>
      <Footer/>
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