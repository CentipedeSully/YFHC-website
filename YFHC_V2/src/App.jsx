import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div className='text-lg'>
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
    <div className=' w-full'>
      <div className=' bg-pink-1 h-140 lg:h-160 opacity-90 w-full relative overflow-hidden'>
        <div className='absolute -z-10  w-full h-full flex justify-center'>
          <img className='object-cover w-full absolute -top-42 sm:-top-90 md:hidden' src="./src/landing_mobile.jpg" alt="pillow_stack" />
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
    <div className=' bg-pink-100 pt-15 lg:pt-60 pb-40 text-pink-7'>
      <img className='h-10 object-contain mx-auto mb-5' src="./src/yfhc_logo.png" alt="brand_logo_img" />
      <h2 className='text-xl text-center pb-15'>Our Services</h2>
      <ul className=' text-pink-5 flex flex-row justify-center gap-15 flex-wrap mx-auto w-3/4'>
        <li className=' flex flex-col justify-center gap-5'>
          <h3 className='text-center '>Residence Cleaning</h3>
          <hr className='w-100 mx-auto '/>
          <img className='h-80 w-100 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400 ' src="./src/residential.jpeg" alt="living_room_with_vaccuum" />
          
        </li>
        <li className=' flex flex-col justify-center gap-5'>
          <h3 className='text-center'>Post-Renovation Cleaning</h3>
          <hr className='w-100 mx-auto '/>
          <img className='h-80 w-100 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400' src="./src/renovation.jpeg" alt="vaccuum_in_room_during_renovations" />
          
        </li>
        <li className=' flex flex-col justify-center gap-5'>
          <h3 className='text-center'>Workplace Cleaning</h3>
          <hr className='w-100 mx-auto '/>
          <img className='h-80 w-100 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400' src="./src/office.jpeg" alt="office_room" />
          
        </li>
        <li className=' flex flex-col justify-center gap-5'>
          <h3 className='text-center'>Move Out Cleaning <span className='hidden'>Cleaning</span></h3>
          <hr className='w-100 mx-auto '/>
          <img className='h-80 w-100 opacity-95 object-cover mx-auto shadow border-b-2 border-b-gray-400' src="./src/boxes.jpeg" alt="move_out_boxes_in_home" />
          
        </li>
        
      </ul>

      <div className='mt-25 w-100 flex flex-row gap-5 justify-center bg-pink-7 mx-auto px-5 py-3 text-pink-50 rounded'>
        <span className=''>Request your estimate :</span>
        <span className=''>(913)-230-9208</span>
      </div>
      
      
      
    </div>
  )
}

export function HowItWorks(){
  return (
    <div className=' bg-white pt-15 pb-70 text-pink-7 text-center '>
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
    <div className='bg-pink-7 text-sm text-white text-center py-5'>
      <div>YourFamliyHouseCleanLLC</div>
      <div className='' >Site developed by Willian Sullivan-Smith</div>
    </div>
  )
}
