

function App() {
  



  return (
    <div className=''>

      <div id="header-section" className="flex flex-col bg-gradient-to-t from-logo-blue to-logo-lightblue pb-5">
        <img 
          className="h-50 object-scale-down"
          src="src\assets\pictures\IMG_HEADER.jpg" 
          alt="YFHC_logo_img" />
      </div>

      <nav id="navbar" className="bg-logo-purple h-10 flex flex-row px-10 justify-center py-1 space-x-1.5 fonted">
        <span className="px-3 text-gray-200 rounded my-auto py-1 mr-10">- Home Cleaning Service -</span>
        < NavButton
          scrollTo={"#welcome-section"}
          text={"About"}
        />
        < NavButton
          scrollTo={"#service-section"}
          text={"Services"}
        />
        < NavButton
          scrollTo={"#contact-section"}
          text={"Contact"}
        />


      </nav>

      <div id="welcome-section" className="mx-10">

        <div className="bg-internal-welcome w-full relative h-125">
          <div className="text-center text-logo-purple rounded absolute top-5 right-30 w-85">
            <p className="text-3xl px-5 bg-white rounded-t pb-2">
              A <span className=" text-4xl italic">Clean</span> Home <br/>is a <span className=" text-4xl italic">Happy</span> Home
            </p>
            <p className="py-3 opacity-75 bg-white rounded-b">We are a licensed and insured, family-owned, home-cleaning business that values fostering positivity, deomstrating accountability, and providing quality service to our clients.</p>
          </div>
          
        </div>
      </div>

      <hr className="border-logo-purple "/>

      <div id="service-section" className="bg-gray-300 mx-10">
        <div className="flex flex-row ">

        </div>
      </div>

      <div id="contact-section" className="h-100 mx-10 flex flex-col justify-center">

        <div className="mx-auto">
          <div className="w-100 bg-white text-rose-900 text-center pt-3 pb-5 rounded hover:bg-rose-300">
            <p className="text-3xl text-center ">Contact Us Today</p>
            <p className="text-2xl ">And setup your new professional cleaning service!</p>
          </div>

          <div className="flex flex-row justify-center pt-3 min-w-30 max-w-100 space-y-3">

            <div id="call-area" className="mx-3 rounded ">
              <p className="text-2xl fonted bg-logo-purple rounded-t text-white min-w-50 text-center py-1">Call</p>
              <ul className="rounded-b bg-rose-200 py-2 hover:bg-rose-300 border-b-2 border-l-2 border-r-2 border-logo-purple">
                <li>
                  <p className="flex justify-evenly text-rose-900 px-2 whitespace-nowrap">
                    <span>Keyri:</span><span>(913)-230-9208</span>
                  </p>
                </li>
                <li>
                  <p className="flex justify-evenly text-rose-900 px-2 whitespace-nowrap">
                    <span>Maria:</span><span>(913)-291-8379</span>
                  </p>
                </li>
              </ul>
            </div>

            <div id="email-area" className="mx-3 rounded h-25 ">
              <p className="text-2xl fonted bg-logo-purple rounded-t text-white min-w-50 text-center">Email</p>
              <div className="rounded-b bg-rose-200 hover:bg-rose-300 h-18 text-center border-b-2 border-l-2 border-r-2 border-logo-purple">
                
                <div className="pt-4 ">
                  <a 
                      href="mailto:thefamilyhouseclean@gmail.com"
                      className="hover:text-amber-950 text-rose-900 hover:underline "
                      >Thefamilyhouseclean@gmail.com</a>
                </div>
              </div>
            </div>

          </div>

          <div className="text-rose-900 text-center pt-3 pb-5 rounded bg-white hover:bg-rose-300">
            <p className="text-2xl">~ Hablamos Espanõl ~</p>
          </div>
        </div>

      </div>
      
      <div id="footer-section" className="bg-logo-purple h-20">

      </div>
    </div>
  )
}

export default App


interface buttonProps{
  text:string,
  scrollTo:any
}

const NavButton = (props:buttonProps) =>{



  return (
    <a 
      className="hover:bg-rose-950 px-3 text-gray-200 rounded my-auto py-1"
      href={props.scrollTo}
    

      >{props.text}
    </a>
  )
}


const ServiceCarousel = () =>{

  const componentId = "service-carousel"

  return(
    <div id={componentId} className="carousel">
      <div id={componentId + "-1"} className="carousel-item relative w-full">
        <img className="" src='./src/assets/pictures/IMG-20250315-WA0009.jpg' alt="missed" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={"#" + componentId + "-3"} className="btn btn-circle touch-pan-x">❮</a>
          <a href={"#" + componentId + "-2"} className="btn btn-circle touch-pan-x">❯</a>
        </div>
      </div>
      <div id={componentId + "-2"} className="carousel-item relative w-full">
        <img className="" src="./src/assets/pictures/IMG-20250315-WA0010.jpg" alt="missed" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={"#" + componentId + "-1"} className="btn btn-circle touch-pan-x">❮</a>
          <a href={"#" + componentId + "-3"} className="btn btn-circle touch-pan-x">❯</a>
        </div>
      </div>
      <div id={componentId + "-3"} className="carousel-item relative w-full">
        <img className="" src="./src/assets/pictures/IMG-20250315-WA0005.jpg" alt="missed" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={"#" + componentId + "-2"} className="btn btn-circle touch-pan-x">❮</a>
          <a href={"#" + componentId + "-1"} className="btn btn-circle touch-pan-x">❯</a>
        </div>
      </div>
    </div>
  )
}

const WelcomeCarousel = () =>{
  const componentId = "welcome-carousel"

  return(
    <div id={componentId} className="carousel mx-20 h-125">
      <div id={componentId + "-1"} className="carousel-item relative contain-content">
        <img className="" src='./src/assets/pictures/IMG-20250312-WA0018.jpg' alt="missed" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={"#" + componentId + "-3"} className="btn btn-circle touch-pan-x">❮</a>
          <a href={"#" + componentId + "-2"} className="btn btn-circle touch-pan-x">❯</a>
        </div>
      </div>
      <div id={componentId + "-2"} className="carousel-item relative contain-content">
        <img className="" src="./src/assets/pictures/IMG-20250312-WA0003.jpg" alt="missed" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={"#" + componentId + "-1"} className="btn btn-circle touch-pan-x">❮</a>
          <a href={"#" + componentId + "-3"} className="btn btn-circle touch-pan-x">❯</a>
        </div>
      </div>
      <div id={componentId + "-3"} className="carousel-item relative contain-content">
        <img className="" src="./src/assets/pictures/IMG-20250312-WA0005.jpg" alt="missed" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={"#" + componentId + "-2"} className="btn btn-circle touch-pan-x">❮</a>
          <a href={"#" + componentId + "-1"} className="btn btn-circle touch-pan-x">❯</a>
        </div>
      </div>
    </div>
  )
}