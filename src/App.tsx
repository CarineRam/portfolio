import { useState } from 'react'
import './App.css'
import { AiOutlineHome } from "react-icons/ai";

function App() {

  return (
    <>
      <nav>
        <ul className='flex bg-[#333B50] p-6 items-center justify-center'>
          <li className='pr-24'><a href='#home' className='text-3xl text-gray-400 hover:text-white'><AiOutlineHome /></a></li>
          <li className='pr-10'><a href='#home' className='text-[#00D646] hover:text-white'>HOME</a></li>
          <li className='pr-10'><a href='#skills' className='text-gray-400 hover:text-white'>PROFESSIONAL SKILLS</a></li>
          <li className='pr-10'><a href='#expericence' className='text-gray-400 hover:text-white'>EXPERIENCE</a></li>
          <li className='pr-10'><a href='#contact' className='text-gray-400 hover:text-white'>CONTACT</a></li>
        </ul>
      </nav>

      {/* bg-[url('./assets/images.jpg')] */}
      <div className='bg-slate-300 mb-40 w-[100vw] h-min[100vh] pb-7'>
        <section id="home" className="bg-slate-300 w-[100vw] h-min[100vh]">
          <div className='text-7xl pl-[30vw] pt-[30vh] pb-[30vh]'>
            <div className='flex'>
              <p>I</p>
              <p className='text-[#00D646]'>&#39; </p>
              <p>M brahmini angalakurti</p>
            </div>
          </div>
        </section>

        <section id="description" className='ml-[20vw] mr-[20vw] pl-32 pr-32 pt-5 pb-5 bg-red-950/30 border-2 border-black shadow-2xl'>
          <div className='logo grid place-items-center text-white text-3xl mb-10'><AiOutlineHome /></div>
          <p className='text-white text-xl text-justify'> 
            As an UiPath Certified advanced UiPath certified RPA Developer, I specialize in crafting innovative automation solutions that drive efficiency, cost savings, and superior customer experiences across diverse industries. Proficient in UiPath and Blue Prism, my expertise extends to VBA, Python, and SQL, keeping me at the forefront of industry trends. My passion for transformative change, collaborative mindset, and business-savvy approach ensures successful RPA implementations. Eager to explore the integration of AI technologies, I am committed to enhancing automation capabilities through machine learning, natural language processing, and computer vision. With a concise blend of technical prowess and adaptability, I am well-positioned to contribute dynamic value to any organization seeking a skilled professional at the intersection of RPA and emerging technologies
          </p>
          <div className='grid place-items-center text-white'>
            <button className=' text-white border mt-5 pt-3 pb-3 pl-7 pr-7 border-[#00D646] hover:bg-[#00D646]'>DOWNLOAD RESUME</button>
          </div>
        </section>
      </div>

      <div className='skills'>
        
      </div>
      {/*  */}
    </>
  )
}

export default App
