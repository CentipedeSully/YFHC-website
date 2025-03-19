

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
        <span className="px-3 text-gray-200 rounded my-auto py-1 mr-10">- Kansas City Home Cleaning Service -</span>
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

      <div id="welcome-section" className="mx-20 bg-white">

        <div className="flex flex-row w-full justify-center space-x-1 relative">
          <div className="absolute w-full h-full text-white text-center">
            <div className="flex flex-col justify-center h-full">
              <div className="mb-5">
                <p className="text-7xl font-bold drop-shadow-lg">Clean homes are happy homes</p>
                <p className="text-2xl pt-2 font-bold drop-shadow-lg">Providing service for the Greater Kansas City area</p>
              </div>
              
              <a 
                className="px-4 py-1 bg-logo-purple rounded mx-auto hover:bg-rose-950"
                href="#contact-section">Schedule A Cleaning Today
              </a>
            </div>
          </div>

          <img 
            className="object-cover w-1/2" 
            src="./src/assets/pictures/IMG-20250312-WA0005.jpg" 
            alt="missing" 
          />

          <div className="flex flex-col space-y-1">
            <img 
              className="object-cover h-1/2" 
              src="./src/assets/pictures/IMG-20250312-WA0018.jpg" 
              alt="missing" />
            <img 
              className="object-cover h-1/2" 
              src="./src/assets/pictures/IMG-20250312-WA0002.jpg" 
              alt="missing" />
          </div>
          
        </div>
        
        
        <div className="text-black mt-10 ">
          <p className="text-6xl font-bold ml-20">Who Are We</p>
          <div className="flex flex-row h-120 pb-10">
            <div className="flex flex-col pt-5 px-4 w-1/2">
              <p className="text-3xl "> We are a licensed and insured, 
                family-owned home cleaning business that values fostering positivity,
                demonstrating accountability, and providing quality service to our clients.
              </p>

              <a 
                className="text-white px-4 py-1 mt-5 bg-logo-purple rounded ml-35 mr-auto hover:bg-rose-950"
                href="#contact-section">Learn More About Us
              </a>
            </div>
            <img 
              className="h-full object-contain rounded "
              src="./src/assets/pictures/IMG-20250315-WA0018.jpg" 
              alt="" />
          </div>
          

        </div>
        
      </div>



      <div id="service-section" className=" bg-gray-300">
        <div className="mx-20 py-4 text-black ">
          <div className="flex flex-row-reverse">
            <p className="w-1/2 font-bold text-6xl text-center pb-5">Our Services</p>
          </div>
          
          <div className="flex flex-row-reverse text-black space-x-1 h-80 pb-1">

            <div className="w-1/2 px-5">
              <p className="text-3xl" >Our offered services include (but aren't limited to):</p>
              <ul className="text-3xl pl-5">
                <li>- Routine Cleaning</li>
                <li>- Deep Cleaning</li>
                <li>- Office Cleaning</li>
                <li>- New Construction Cleaning</li>
                <li>- And More!</li>
              </ul>
            </div>

            <div className="w-1/2 ">
              <div id="first-services-caro" className="carousel h-full">
                <CarouselItem 
                  itemId="first-services-caro-1"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0000.jpg"
                  prevID="first-services-caro-3"
                  nextId="first-services-caro-2"
                />

                <CarouselItem 
                  itemId="first-services-caro-2"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0003.jpg"
                  prevID="first-services-caro-1"
                  nextId="first-services-caro-3"
                />

                <CarouselItem 
                  itemId="first-services-caro-3"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0004.jpg"
                  prevID="first-services-caro-2"
                  nextId="first-services-caro-1"
                />
              </div>
            </div>

          </div>

          <div className="flex flex-row h-80 space-x-1">

            <div className="w-1/2 h-80">
              <div id="sec-services-caro" className="carousel h-full">
                <CarouselItem 
                  itemId="sec-services-caro-1"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0006.jpg"
                  prevID="sec-services-caro-"
                  nextId="sec-services-caro-2"
                />

                <CarouselItem 
                  itemId="sec-services-caro-2"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0007.jpg"
                  prevID="sec-services-caro-1"
                  nextId="sec-services-caro-3"
                />

                <CarouselItem 
                  itemId="sec-services-caro-3"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0008.jpg"
                  prevID="sec-services-caro-2"
                  nextId="sec-services-caro-4"
                />

                <CarouselItem 
                  itemId="sec-services-caro-4"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0010.jpg"
                  prevID="sec-services-caro-3"
                  nextId="sec-services-caro-5"
                />

                <CarouselItem 
                  itemId="sec-services-caro-5"
                  imgUrl="./src/assets/pictures/IMG-20250315-WA0005.jpg"
                  prevID="sec-services-caro-4"
                  nextId="sec-services-caro-6"
                />

                <CarouselItem 
                  itemId="sec-services-caro-6"
                  imgUrl="./src/assets/pictures/IMG-20250315-WA0008.jpg"
                  prevID="sec-services-caro-5"
                  nextId="sec-services-caro-1"
                />
              </div>
            </div>

            <div className="w-1/2">
            <div id="third-services-caro" className="carousel h-full">
                <CarouselItem 
                  itemId="third-services-caro-1"
                  imgUrl="./src/assets/pictures/IMG-20250315-WA0009.jpg"
                  prevID="third-services-caro-3"
                  nextId="third-services-caro-2"
                />

                <CarouselItem 
                  itemId="third-services-caro-2"
                  imgUrl="./src/assets/pictures/IMG-20250315-WA0013.jpg"
                  prevID="third-services-caro-1"
                  nextId="third-services-caro-3"
                />

                <CarouselItem 
                  itemId="third-services-caro-3"
                  imgUrl="./src/assets/pictures/IMG-20250312-WA0009.jpg"
                  prevID="third-services-caro-2"
                  nextId="third-services-caro-1"
                />

              </div>
              
            </div>
          </div>

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



interface caroProps{
  itemId:string,
  prevID:string,
  nextId:string,
  imgUrl:string,
}
const CarouselItem = (props:caroProps) =>{
  
  return(
    <div id={props.itemId} className={"carousel-item relative w-full h-full"}>
      <img className="rounded mx-auto object-contain" src={props.imgUrl} alt="missed" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={"#" +props.prevID} className="btn btn-circle">❮</a>
        <a href={"#" +props.nextId} className="btn btn-circle">❯</a>
      </div>
    </div>
  )



}


