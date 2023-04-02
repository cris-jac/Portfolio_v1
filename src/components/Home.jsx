import { IoMdArrowDroprightCircle } from 'react-icons/io';
import HeroImage from '../assets/heroImage.jpg';
import { Link } from 'react-scroll'; 

const Home = () => {
  return (
    <div name="home" className="h-screen w-full  bg-black p-5 md:px-10 ">
      <div className="flex flex-col h-full mx-auto justify-center max-w-screen-lg md:flex-row items-center">
        <div className=" flex flex-col justify-center h-full md:w-2/3">
          <div className=" text-4xl md:text-6xl bg-gradient-to-r from-[#57FFFF] to-[#3657EA] bg-clip-text text-transparent font-bold">
            <h1>Soy un Desarrollador Web Front-End</h1>
          </div>

          <p className='text-gray-300 py-4 max-w-md'>I have 0 years of experience building and designing software. Currently, I love to work on web applications using technologies like React, Tailwind, Next JS and GraphQL</p>

          <div>
            <button className="group w-fit rounded-full  text-black bg-gradient-to-l from-[#024B98] via-[#0388E3] to-[#57FFFF] cursor-pointer ">
              <Link to='portfolio' className='flex items-center p-5 ' smooth duration={200}>
              <p className='text-1xl mr-4'>Portafolio</p> <span className='group-hover:rotate-90 duration-300'><IoMdArrowDroprightCircle size={25}/></span>
              </Link>
            </button>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="heroImage" className='rounded-full mx-auto h-72 md:w-96'/>
        </div>

        
      </div>
    </div>
  )
}

export default Home
