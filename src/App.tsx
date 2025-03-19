

function App() {
  



  return (
    <div className='fonted'>

      <div id="header-section" className="flex flex-col bg-gradient-to-t from-logo-blue to-logo-lightblue pb-5">
        <img 
          className="h-50 object-scale-down"
          src="src\assets\pictures\IMG_HEADER.jpg" 
          alt="YFHC_logo_img" />
        <div className="text-logo-purple font-bold flex flex-row justify-evenly">
          <p>Keyri: (913)-230-9208</p>
          <p>Maria: (913)-291-8379</p>
          <p>Email: <a 
            href="mailto:thefamilyhouseclean@gmail.com"
            className="hover:text-amber-700 hover:underline"
            >Thefamilyhouseclean@gmail.com</a>
          </p>
          
        </div>
      </div>

      <nav id="navbar" className="bg-logo-purple h-10 flex flex-row px-10 justify-center py-1 space-x-1.5 fonted">
        <span className="px-3 text-gray-200 rounded my-auto py-1 mr-10">- Kansas City Home Cleaning Service -</span>
        < NavButton
          scrollTo={"#who-are-we"}
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
        
        
        <div className="text-black mt-20 ">
          <div id="who-are-we" className="flex flex-row h-120 py-10">
            <div className="flex flex-col justify-evenly px-4 w-1/2">
              <p className="text-6xl font-bold text-center">Who Are We</p>
              <p className="text-3xl py-5"> We are a licensed and insured, 
                family-owned home cleaning business with over 6 years of experience demonstrating accountability, 
                fostering positivity, and providing quality service to our clients.
              </p>

              <a 
                className="text-white px-4 py-1 mt-5 bg-logo-purple rounded mx-auto hover:bg-rose-950"
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
        <div className="mx-20 py-20 text-black ">
          
          <div className="flex flex-row-reverse justify-center text-black space-x-1 h-100 pb-1">

            <div className="w-1/2 px-5 flex flex-col justify-center">
              <p className="w-full font-bold text-6xl text-center">Services</p>
              <p className="text-3xl pt-5 text-center" >Our offered services include:</p>
              <ul className="text-3xl pl-8 pb-5 mx-auto">
                <li>- Routine Cleaning</li>
                <li>- Deep Cleaning</li>
                <li>- Office Cleaning</li>
                <li>- New Construction Cleaning</li>
                <li>- And More!</li>
              </ul>
              <a 
                className="text-white px-4 py-1  bg-logo-purple rounded mx-auto hover:bg-rose-950"
                href="#contact-section">Ask About More Services
              </a>
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

          <div className="flex flex-row h-100 space-x-1">

            <div className="w-1/2 h-100">
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



      <div id="contact-section" className=" mx-20 flex flex-col justify-center py-20">

        <div className="flex flex-row">
          <div className="text-black text-center flex flex-col w-1/2">
            <p className="text-6xl font-bold">Contact Us Today</p>
            <p className="text-2xl ">And setup your new professional cleaning service!</p>
            <p className="text-2xl pt-5 pb-10"></p>
            <div className="flex flex-col justify-center space-y-10">

              <div id="call-area" className="mx-3 rounded ">
                <p className="text-4xl font-bold ">Call</p>
                <ul className="rounded-b py-2">
                  <li>
                    <p className="flex text-2xl justify-center px-2 space-x-3 whitespace-nowrap">
                      <span>Keyri:</span><span>(913)-230-9208</span>
                    </p>
                  </li>
                  <li>
                    <p className="flex text-2xl justify-center px-2  space-x-3 whitespace-nowrap">
                      <span>Maria:</span><span>(913)-291-8379</span>
                    </p>
                  </li>
                </ul>
              </div>

              <div id="email-area" className="mx-3 rounded">
                <p className="text-4xl font-bold text-center">Email</p>
                <div className="rounded-b text-center">
                
                  <div className="pt-2 ">
                    <a 
                      href="mailto:thefamilyhouseclean@gmail.com"
                      className="text-2xl hover:text-logo-purple hover:underline px-3 "
                      >Thefamilyhouseclean@gmail.com</a>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center pt-10 rounded bg-white">
              <p className="text-2xl">~ Hablamos Espanõl ~</p>
            </div>
            
          </div>


          <div className="text-black w-1/2">
            <div id="contact-caro" className="carousel h-150">
              <CarouselItem
                itemId="contact-caro-1"
                imgUrl="./src/assets/pictures/IMG-20250312-WA0001.jpg"
                prevID="contact-caro-11"
                nextId="contact-caro-2" 
              />

              <CarouselItem
                itemId="contact-caro-2"
                imgUrl="./src/assets/pictures/IMG-20250312-WA0014.jpg"
                prevID="contact-caro-1"
                nextId="contact-caro-3" 
              />

              <CarouselItem
                itemId="contact-caro-3"
                imgUrl="./src/assets/pictures/IMG-20250312-WA0015.jpg"
                prevID="contact-caro-2"
                nextId="contact-caro-4" 
              />

              <CarouselItem
                itemId="contact-caro-4"
                imgUrl="./src/assets/pictures/IMG-20250312-WA0016.jpg"
                prevID="contact-caro-3"
                nextId="contact-caro-5" 
              />

              <CarouselItem
                itemId="contact-caro-5"
                imgUrl="./src/assets/pictures/IMG-20250312-WA0017.jpg"
                prevID="contact-caro-4"
                nextId="contact-caro-6" 
              />

              <CarouselItem
                itemId="contact-caro-6"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0001.jpg"
                prevID="contact-caro-5"
                nextId="contact-caro-7" 
              />

              <CarouselItem
                itemId="contact-caro-7"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0002.jpg"
                prevID="contact-caro-6"
                nextId="contact-caro-8" 
              />

              <CarouselItem
                itemId="contact-caro-8"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0004.jpg"
                prevID="contact-caro-7"
                nextId="contact-caro-9" 
              />

              <CarouselItem
                itemId="contact-caro-9"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0006.jpg"
                prevID="contact-caro-8"
                nextId="contact-caro-10" 
              />

              <CarouselItem
                itemId="contact-caro-10"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0011.jpg"
                prevID="contact-caro-9"
                nextId="contact-caro-11" 
              />

              <CarouselItem
                itemId="contact-caro-11"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0012.jpg"
                prevID="contact-caro-10"
                nextId="contact-caro-1" 
              />

              <CarouselItem
                itemId="contact-caro-12"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0014.jpg"
                prevID="contact-caro-11"
                nextId="contact-caro-13" 
              />

              <CarouselItem
                itemId="contact-caro-13"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0015.jpg"
                prevID="contact-caro-12"
                nextId="contact-caro-14" 
              />

              <CarouselItem
                itemId="contact-caro-14"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0016.jpg"
                prevID="contact-caro-13"
                nextId="contact-caro-15" 
              />

              <CarouselItem
                itemId="contact-caro-15"
                imgUrl="./src/assets/pictures/IMG-20250315-WA0017.jpg"
                prevID="contact-caro-14"
                nextId="contact-caro-1" 
              />

              
            </div>
          </div>
          

          
        </div>

      </div>
      
      <div id="footer-section" className="flex flex-col justify-center bg-logo-purple h-20 text-sm text-center ">
        <p className="">-Site Developed by William Sullivan Smith-</p>
        <a 
          className="hover:underline hover:text-yellow-300"
          href="https://www.linkedin.com/in/william-smith-154a5120a/" 
          target="_blank">-Visit LinkedIn-</a>
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


