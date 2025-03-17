

function App() {
  



  return (
    <div className=''>

      <div id="header-section" className="flex flex-col bg-gradient-to-t from-logo-blue to-logo-lightblue pb-5">
        <img 
          className="h-50 object-scale-down"
          src="src\assets\pictures\IMG_HEADER.jpg" 
          alt="YFHC_logo_img" />
      </div>
      <nav className="bg-logo-purple h-10 flex flex-row px-10 justify-center py-1 space-x-1.5 fonted">
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

      <div id="welcome-section" className="bg-rose-200 ">
        <div className="bg-internal-welcome h-125 w-full hover:opacity-80">
          <div className="text-center text-gray-200">
            <p>Sample paragraph</p>
          </div>
          
        </div>
      </div>

      <div id="service-section" className="bg-gray-300 ">
        <div className="grid grid-cols-2 gap-5 px-5 py-5">
          <div className=" h-100 bg-blue-300 rounded"></div>
          <div className=" h-100 bg-blue-300 rounded"></div>
          <div className=" h-100 bg-blue-300 rounded"></div>
          <div className=" h-100 bg-blue-300 rounded"></div>
        </div>
      </div>

      <div id="contact-section" className="bg-rose-200 h-100">
        <div className="flex justify-center pt-5">
          <p className="text-3xl fonted text-logo-purple">Contact Us</p>
        </div>
        <div className="flex flex-row justify-center py-5 ">
          <div id="call-area" className="mx-3 rounded hover:border">
            <p className="text-2xl fonted bg-logo-purple rounded-t text-white min-w-50 text-center py-1">Call</p>
            <ul className="rounded-b bg-rose-200 py-2">
              <li>
                <p className="flex justify-evenly px-2 whitespace-nowrap">
                  <span>Keyri:</span><span>(913)-230-9208</span>
                </p>
              </li>
              <li>
                <p className="flex justify-evenly px-2 whitespace-nowrap">
                  <span>Maria:</span><span>(913)-291-8379</span>
                </p>
              </li>
            </ul>
          </div>

          <div id="email-area" className="mx-3 rounded">
            <div className="rounded-b bg-rose-200 pb-2 hover:bg-rose-300 h-full">
              <p className="text-2xl fonted bg-logo-purple rounded-t text-white min-w-50 text-center py-1">Email</p>
              <a 
                  href="mailto:thefamilyhouseclean@gmail.com"
                  className="hover:text-rose-950 hover:underline px-2 align-middle"
                  >thefamilyhouseclean@gmail.com</a>
            </div>
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