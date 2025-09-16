import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div className='text-lg bg-pink-1 mx-auto'>
        <Header />
        <LandingArea />
        <ServicesArea />
        <HowItWorks />
        <FAQs/>
        <Footer />
      </div>
    </>
  )
}

export default App





export function Header(){




  return (
    <div className=''>
      
    </div>
  )
}

export function LandingArea(){
  return (
    <div className=''>
      <div className=' bg-pink-1 h-140 lg:h-160 opacity-90 w-full relative overflow-hidden'>
        <div className='absolute -z-10  w-full h-full flex justify-center'>
          <img className='object-cover absolute opacity-50 -top-42 sm:-top-90 md:hidden' src="./flowers.jpg" alt="pillow_stack" />
          <img className='object-cover hidden md:block' src='./landing_wide_xl.jpg' alt='clean_kitchen'/>
        </div>
        
        <div className='flex flex-col pt-15 pb-13 lg:pb-25 '>
          <img className='h-10 object-contain mx-auto mb-5 md:hidden' src="./yfhc_logo_white.png" alt="light_brand_logo_img" />
          <img className='h-10 object-contain mx-auto mb-5 hidden md:block' src="./yfhc_logo.png" alt="dark_brand_logo_img" />
          <h2 className='text-center text-white md:text-pink-5'>YourFamilyHouseClean LLC</h2>
        </div>
        
        <div className='pb-130 flex flex-col justify-center'>
          
          <p className='text-center text-3xl text-white md:text-pink-9 mb-6 w-90 mx-auto  '>Save time & money</p>
          <h2 className='text-center text-white md:text-pink-7 mb-8 mx-auto'>Setup your family friendly cleaning services today</h2>

          <div className=' flex flex-row gap-5 justify-center bg-pink-7 md:bg-pink-9 mx-auto px-5 py-3 text-pink-50 rounded '>
            <span className=''>Request your estimate :</span>
            <span className=''>(913)-230-9208</span>
          </div>
        
        </div>
      </div>

      <div className='relative flex justify-center'>
        <TestamonialsArea />
      </div>
      
      
      
    </div>
  )
}

export function TestamonialsArea(){
  return (
    <div className='bg-white z-10 shadow-2xl w-110  sm:w-140 px-5 lg:w-180 h-65 absolute -translate-y-1/2 rounded'>
      <div className=''>
        <h2 className='text-center pt-10 pb-4 text-pink-9'>Providing professional 5-star service to Kansas City and Overland Park</h2>
        <hr className=' border border-pink-3 w-85 lg:w-140 mx-auto mb-8'/>
        <ul className='flex flex-row gap-5 justify-center'>

          <li>
            <img className='object-cover w-15' src="./star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./star.png" alt="star_rating" />
          </li>


        </ul>
      </div>
      
    </div>
  )
}
//<img className=' w-150 h-60 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400 ' src="./src/residential.jpeg" alt="living_room_with_vaccuum" />
export function ServicesArea(){
  return (
    <div className=' bg-pink-100 w-full pt-60 text-pink-7'>
      <img className='h-10 object-contain mx-auto mb-5' src="./yfhc_logo.png" alt="brand_logo_img" />
      <h2 className='text-xl text-center pb-15'>Our Services</h2>
      <ul className=' text-pink-5 flex flex-col justify-center gap-10 mx-auto sm:w-full'>

        <li className=' flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-center'>Residential Cleaning</h3>
          <hr className='w-100 sm:w-130 lg:w-200 mx-auto '/>
          <div className='w-110 sm:w-140 lg:w-250 flex flex-col lg:flex-row justify-center mx-auto'>
            <img className='w-110 sm:w-140 lg:w-125 h-70 object-cover rounded-t lg:rounded-t-none lg:rounded-l mx-auto ' src="./livingRoom.jpg" alt="dusted living room" />
            <p className=' flex items-center px-5 w-110 h-70 sm:w-140 lg:w-125 bg-pink-5 text-pink-50 rounded-b lg:rounded-b-none lg:rounded-r mx-auto '>We provide both deep cleaning and maintanance cleaning services to personal and communal living spaces. These spaces include homes, apartments, shelters, community centers, churches,
              and more.
              <br />
              <br />
              Our deep and maintainence cleanings target all of the traditional home's surfaces, rooms, and appliances.
              Simply let us know what you'd like us to target and we'll handle the rest.
            </p>
              
          </div>
        </li>

        <li className=' flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-center'>Post-Renovation Cleaning</h3>
          <hr className='w-100 sm:w-130 lg:w-200 mx-auto '/>
          <div className='w-110 sm:w-140 lg:w-250 flex flex-col lg:flex-row justify-center mx-auto'>
            <img className='w-110 sm:w-140 lg:w-125 h-70 object-cover  rounded-t lg:rounded-t-none lg:rounded-l mx-auto' src="./kitchen.JPG" alt="polished kitchen" />
            <p className='  flex items-center px-5 w-110 h-70 sm:w-140 lg:w-125 bg-pink-5 text-pink-50 rounded-b lg:rounded-b-none lg:rounded-r mx-auto '>We're also qualified to cleanup after large renovations projects, which entail a full top-to-bottom deep cleaning to ensure 
            all dust, heavy particles, and construction debris is removed from the area.
            <br />
            <br />
            If there are any additional specifics that you'd like us to include, let us and our technicians know so we're better able to meet your needs.
            </p>
              
          </div>
        </li>

        <li className=' flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-center'>Workplace Cleaning</h3>
          <hr className='w-100 sm:w-130 lg:w-200 mx-auto '/>
          <div className='w-110 sm:w-140 lg:w-250 flex flex-col lg:flex-row justify-center mx-auto'>
            <img className='w-110 sm:w-140 lg:w-125 h-70 object-cover rounded-t lg:rounded-t-none lg:rounded-l mx-auto' src="./office.jpeg" alt="clean office space" />
            <p className=' flex items-center px-5 w-110 h-70 sm:w-140 lg:w-125 bg-pink-5 text-pink-50 rounded-b lg:rounded-b-none lg:rounded-r mx-auto '>Our deep cleaning and maintainence cleaning services also extend to commerical and business surfaces and workspaces.
            <br />
            <br />
            Be sure to communicate the specifics of what to touch and what not to touch
             before the cleaning commenses to help prevent unintended loss of work.
            </p>
              
          </div>
        </li>

        <li className=' flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-center'>Move Out Cleaning</h3>
          <hr className='w-100 sm:w-130 lg:w-200 mx-auto '/>
          <div className='w-110 sm:w-140 lg:w-250 flex flex-col lg:flex-row justify-center mx-auto'>
            <img className='w-110 sm:w-140 lg:w-125 h-70 object-cover rounded-t lg:rounded-t-none lg:rounded-l mx-auto' src="./cleared.jpg" alt="cleared room" />
            <p className=' flex items-center px-5 w-110 h-70 sm:w-140 lg:w-125 bg-pink-5 text-pink-50 rounded-b lg:rounded-b-none lg:rounded-r mx-auto'>Whether you're a renter or landlord, we can also handle the cleanup after a big move. We'll provide our deep cleaning 
            services where it's necessary, and also help haul away any garbage, abandoned furniture and appliances to help save you time and energy.   
            <br />
            <br />
            Once the cleanup is completed, the living space will be clear, clean, and open for reuse.
            </p>
              
          </div>
        </li>
        
      </ul>

      <div className='mt-15 w-100 flex flex-row gap-5 justify-center bg-pink-7 mx-auto px-5 py-3 text-pink-50 rounded'>
        <span className=''>Request your estimate :</span>
        <span className=''>(913)-230-9208</span>
      </div>
      
      
      <div className='relative flex justify-center mt-50'>
        <LicensedAndInsured />
      </div>
    </div>

    
  )
}

export function LicensedAndInsured(){
  return(
    <div className='bg-white z-10 shadow-2xl w-110 sm:w-140 px-5 lg:w-180 h-65 absolute -translate-y-1/2 rounded'>
      <div className=''>
        <h2 className='text-center pt-10 pb-4 text-pink-9'>Licensed And Insured Technicians</h2>
        <hr className=' border border-pink-3 w-85 lg:w-140 mx-auto mb-8'/>
        <ul className='flex flex-row gap-8 lg:gap-20 justify-center'>
          <li>
            <img className='object-cover w-18' src="./award.jpg" alt="award_ribbon" />
          </li>
          <li>
            <p className='w-40 h-full flex text-center items-center pb-3'>With over 6 years of industry experience</p>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export function HowItWorks(){
  return (
    <div className=' bg-white pt-55 pb-35 w-full text-pink-7 text-center relative'>
      <img className='h-10 object-contain mx-auto mb-5' src="./yfhc_logo.png" alt="brand_logo_img" />
      <h3 className='text-xl pb-15'>How to setup a service</h3>
      <ul className='flex flex-col w-full sm:w-140 lg:w-170 gap-5 mx-auto'>
        <li className='px-20 mx-auto py-10 '>
          <h4 className=' flex flex-row justify-center sm:justify-start  sm:pl-15'><span className='pr-10'>Step 1:</span> <span>Receive an Estimate</span></h4>
          <hr className='mt-2 border'/>
          <p className='  text-left pt-5'>
            Call us to setup an appointment to show us the space that needs servicing. Whether it be a one time clean after a move out or renovation, 
            or a reoccuring maintenance cleaning for an apartment or office, we'll need to see the space and agree on a price before continuing. Estimates are free.

          </p>
        </li>
        <li className='px-20 mx-auto py-10 '>
          <h4 className=' flex flex-row justify-center sm:justify-start  sm:pl-15'><span className='pr-10'>Step 2:</span> <span>Schedule a Cleaning</span></h4>
          <hr className='mt-2 border '/>
          <p className='  text-left pt-5'>
            After the estimate is approved, we'll schedule a time for our licensed technicians to handle the cleaning. If a service needs to be cancelled, then let us know.
            A $50 cancellation fee is applied to cancellations 72 hours before the scheduled service. No contracts are necessary for our services. 
             

          </p>
        </li>
        <li className='px-20 mx-auto py-10'>
          <h4 className=' flex flex-row justify-center sm:justify-start sm:pl-15'><span className='pr-10'>Step 3:</span> <span>Process the Payment</span></h4>
          <hr className='mt-2 border'/>
          <p className='  text-left pt-5 '>
            Payment is collected upon service completion. We accept cash and checks only. Checks must be written to <span className='italic' >"YourFamilyHouseClean LLC"</span>.
            <br/><br/>Also be sure to leave us a review online!

          </p>
        </li>
      </ul>
    </div>
  )
}

export function FAQs(){

  return (
    <div className='bg-pink-1 py-20 text-pink-7'>
      <img className='h-10 object-contain mx-auto mb-5' src="./yfhc_logo.png" alt="brand_logo_img" />
      <h2 className='text-xl text-center pb-15'>Frequently Asked Questions</h2>
      <ul className='flex flex-col gap-10'>
        <li>
          <QA 
            question="What's your service area?"
            answer="Any location that's within Kansas City (KS and MO) and Overland Park. Call us if you're unsure of whether or not your location falls within our range."
            answer2=""
          />
        </li>
        <li>
          <QA 
            question="How much do estimates cost?"
            answer="All estimates are free of charge."
            answer2=""
          />
        </li>
        <li>
          <QA 
            question="What if I need to cancel a service?"
            answer="We don't make our clients sign any contracts. Just call ahead to let us know. 
            If you're cancelling 72 hours before the service date, then you'll be charged a $50 cancellation fee."
            answer2=""
          />
        </li>
        <li>
          <QA 
            question="When should I call?"
            answer="Weekdays (Mon-Fri): 9am-5pm."
            answer2="Weekends (Sat-Sun): 11am-4pm."
          />
        </li>
        <li>
          <QA 
            question="Are there any other methods of contact?"
            answer="Here's our Email if you have any other questions or requests:"
            answer2="services@yourfamilyhousecleanllc.com"
          />
        </li>

      </ul>
    </div>
  )
}

export function QA(props){


  return (
    <div className=' flex justify-center'>
      <div className='w-110 sm:w-140' >
        <p className='pl-10 lg:pl-15 pb-2 text-pink-9'>Q : {props.question}</p>
        <hr className='w-100 sm:w-125 mx-auto pb-3'/>
        <p className='bg-white  py-10 rounded px-5'>{props.answer}<br/>{props.answer2}</p>
      </div>


    </div>
  )
}

export function Footer(){

  return(
    <div className='bg-pink-7 text-sm text-white text-center py-5'>
      <div>YourFamliyHouseCleanLLC</div>
      <div className='' >Site developed by Willian Sullivan-Smith</div>
    </div>
  )
}
