import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Header />
        <LandingArea />
        <ServicesArea />
        <GalleryArea />
        <Footer />
      </div>
    </>
  )
}

export default App





export function Header(){




  return (
    <div className='h-4 bg-purpleAccent'>
    </div>
  )
}

export function LandingArea(){
  return (
    <div className='flex flex-col justify-center flex-1 bg-white'>
      <p className='text-center'>landing</p>
    </div>
  )
}

export function ServicesArea(){
  return (
    <div className='flex flex-col justify-center flex-1 bg-salmonBg '>
      <p className='text-center'>services</p>
    </div>
  )
}

export function GalleryArea(){
  return (
    <div className='flex flex-col justify-center flex-1 '>
      <p className='text-center'>gallery</p>
    </div>
  )
}

export function Footer(){

  return(
    <div className='h-4 bg-purpleAccent'>
    </div>
  )
}
