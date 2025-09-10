import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div className='text-lg bg-pink-1 w-150  sm:w-full mx-auto'>
        <Header />
        <LandingArea />
        <ServicesArea />
        <HowItWorks />
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
    <div className=' w-150 sm:w-full'>
      <div className=' bg-pink-1 h-140 lg:h-160 opacity-90 w-full relative overflow-hidden'>
        <div className='absolute -z-10  w-150 sm:w-full h-full flex justify-center'>
          <img className='object-cover w-150 sm:w-full absolute -top-42 sm:-top-90 md:hidden' src="./src/landing_mobile.jpg" alt="pillow_stack" />
          <img className='object-cover hidden md:block' src='./src/landing_wide_xl.jpg' alt='clean_kitchen'/>
        </div>
        
        <div className='flex flex-col pt-15 pb-25'>
          <img className='h-10 object-contain mx-auto mb-5' src="./src/yfhc_logo.png" alt="brand_logo_img" />
          <h2 className='text-center text-pink-5'>YourFamilyHouseClean LLC</h2>
        </div>
        
        <div className='pb-130 flex flex-col justify-center'>
          
          <p className='text-center text-3xl text-pink-9 mb-6 w-90 mx-auto  '>Save time & money</p>
          <h2 className='text-center text-pink-7 mb-8 mx-auto'>Setup your family friendly cleaning services today</h2>

          <div className=' flex flex-row gap-5 justify-center bg-pink-9 mx-auto px-5 py-3 text-pink-50 rounded '>
            <span className=''>Request your estimate :</span>
            <span className=''>(913)-230-9208</span>
          </div>
        
        </div>
      </div>

      <div className='relative hidden lg:flex justify-center '>
        <TestamonialsArea />
      </div>
      
      
      
    </div>
  )
}

export function TestamonialsArea(){
  return (
    <div className='bg-white z-10 shadow-2xl w-100 lg:w-180 h-65 absolute -translate-y-1/2 rounded'>
      <div className=''>
        <h2 className='text-center pt-10 pb-4 text-pink-9'>Providing professional 5-star service to Kansas City and Overland Park</h2>
        <hr className=' border border-pink-3 sm:w-140 mx-auto mb-8'/>
        <ul className='flex flex-row gap-5 justify-center'>

          <li>
            <img className='object-cover w-15' src="./src/star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./src/star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./src/star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./src/star.png" alt="star_rating" />
          </li>
          <li>
            <img className='object-cover w-15' src="./src/star.png" alt="star_rating" />
          </li>


        </ul>
      </div>
      
    </div>
  )
}

export function ServicesArea(){
  return (
    <div className=' bg-pink-100 pt-15 w-150 sm:w-full lg:pt-60 text-pink-7'>
      <img className='h-10 object-contain mx-auto mb-5' src="./src/yfhc_logo.png" alt="brand_logo_img" />
      <h2 className='text-xl text-center pb-15'>Our Services</h2>
      <ul className=' text-pink-5 flex flex-col justify-center gap-10 mx-auto w-150'>
        <li className='relative flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-start px-15'>Residential Cleaning</h3>
          <hr className='w-150 mx-auto '/>
          <img className=' w-150 h-60 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400 ' src="./src/residential.jpeg" alt="living_room_with_vaccuum" />
          <div className='w-150 h-60 bg-pink-7 opacity-60 absolute top-15'>
            
          </div>
          <p className='absolute px-5 py-2 w-150 h-60 top-15 text-white'>We provide both deep cleaning and maintanance cleaning services to personal and communal living spaces. These spaces include homes, apartments, shelters, community centers, churches,
            and more.
            <br />
            <br />
            Our deep and maintainence cleanings target all of the expected surfaces, rooms, and appliances, including bathrooms, living rooms, basements, bedrooms, and kitchens.
            Simply let us know what you'd like us to target and we'll handle the rest.
          </p>
        </li>

        <li className='relative flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-start px-15'>Post-Renovation Cleaning</h3>
          <hr className='w-150 mx-auto '/>
          <img className=' w-150 h-60 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400' src="./src/renovation.jpeg" alt="vaccuum_in_room_during_renovations" />
          <div className='w-150 h-60 bg-pink-7 opacity-75 absolute top-15'>
            
          </div>
          <p className='absolute px-5 py-2 w-150 h-60 top-15 text-white'>We're also qualified to cleanup after large renovations projects, which entail a full top-to-bottom deep cleaning to ensure 
            all dust, heavy particles, and construction debris is removed from the area.
            <br />
            <br />
            If there are any additional specifics that you'd like us to include, let us and our technicians know so we're better able to meet your needs. 
          </p>
        </li>

        <li className='relative flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-start px-15'>Workplace Cleaning</h3>
          <hr className='w-150 mx-auto '/>
          <img className=' w-150 h-60 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400 ' src="./src/office.jpeg" alt="office_room" />
          <div className='w-150 h-60 bg-pink-7 opacity-75 absolute top-15'>
            
          </div>
          <p className='absolute px-5 py-2 w-150 h-60 top-15 text-white'>Our deep cleaning and maintainence cleaning services also extend to commerical and business surfaces and workspaces.
            <br />
            <br />
            Be sure to communicate the specifics of what to touch and what <span className='italic'>not</span> to touch before the cleaning commenses to help prevent unintended loss of work.
          </p>
        </li>

        <li className='relative flex flex-col justify-center gap-4 w-full'>
          <h3 className='text-start px-15'>Move Out Cleaning</h3>
          <hr className='w-150 mx-auto '/>
          <img className=' w-150 h-60 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400 ' src="./src/boxes.jpeg" alt="move_out_boxes_in_home" />
          <div className='w-150 h-60 bg-pink-7 opacity-75 absolute top-15'>
            
          </div>
          <p className='absolute px-5 py-2 w-150 h-60 top-15 text-white'>Whether you're a renter or landlord, we can also handle the cleanup after a big move. We'll provide our deep cleaning 
            services where it's necessary, and also help haul away any garbage, abandoned furniture and appliances to help save you time and energy.   
            <br />
            <br />
            Once the cleanup is completed, the living space will be clear, clean, and open for reuse.
          </p>
        </li>
        
      </ul>

      <div className='mt-15 w-100 flex flex-row gap-5 justify-center bg-pink-7 mx-auto px-5 py-3 text-pink-50 rounded'>
        <span className=''>Request your estimate :</span>
        <span className=''>(913)-230-9208</span>
      </div>
      
      
      <div className='relative hidden lg:flex justify-center mt-50'>
        <LicensedAndInsured />
      </div>
    </div>

    
  )
}

export function LicensedAndInsured(){
  return(
    <div className='bg-white z-10 shadow-2xl w-100 lg:w-180 h-65 absolute -translate-y-1/2 rounded'>
      <div className=''>
        <h2 className='text-center pt-10 pb-4 text-pink-9'>Licensed And Insured Technicians</h2>
        <hr className=' border border-pink-3 sm:w-140 mx-auto mb-8'/>
        <ul className='flex flex-row gap-20 justify-center'>
          <li>
            <img className='object-cover w-18' src="./src/award.jpg" alt="award_ribbon" />
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
    <div className=' bg-white pt-55 pb-70 w-150 sm:w-full text-pink-7 text-center '>
      <img className='h-10 object-contain mx-auto mb-5' src="./src/yfhc_logo.png" alt="brand_logo_img" />
      <h3 className='text-xl pb-15'>How to setup a service</h3>
      <ul className='flex flex-col gap-5 w-150 mx-auto'>
        <li className='px-20 mx-auto py-10 '>
          <h4 className=' flex flex-row pl-15'><span className='pr-10'>Step 1:</span> <span>Receive an Estimate</span></h4>
          <hr className='mt-2 border'/>
          <p className='  text-left pt-5'>
            Call us to setup an appointment to show us the space that needs servicing. Whether it be a one time clean after a move out or renovation, 
            or a reoccuring maintenance cleaning for an apartment or office, we'll need to see the space and agree on a price before continuing. Estimates are free.

          </p>
        </li>
        <li className='px-20 mx-auto py-10 '>
          <h4 className=' flex flex-row  pl-15'><span className='pr-10'>Step 2:</span> <span>Schedule a Cleaning</span></h4>
          <hr className='mt-2 border '/>
          <p className='  text-left pt-5'>
            After the estimate is approved, we'll schedule a time for our licensed technicians to handle the cleaning. If a service needs to be cancelled, then let us know.
            A $50 cancellation fee is applied to cancellations 72 hours before the scheduled service. No contracts are necessary for our services. 
             

          </p>
        </li>
        <li className='px-20 mx-auto py-10'>
          <h4 className=' flex flex-row text-xl pl-15'><span className='pr-10'>Step 3:</span> <span>Process the Payment</span></h4>
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

export function Footer(){

  return(
    <div className='bg-pink-7 text-sm text-white text-center py-5 w-150 sm:w-full'>
      <div>YourFamliyHouseCleanLLC</div>
      <div className='' >Site developed by Willian Sullivan-Smith</div>
    </div>
  )
}
