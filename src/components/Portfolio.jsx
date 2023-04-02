import installNode from '../assets/portfolio/installNode.jpg';
import arrayDest from '../assets/portfolio/arrayDestruct.jpg';
import navBarImage from '../assets/portfolio/navbar.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {

  const ports = [
    {id:1, src: installNode},
    {id:2, src: arrayDest},
    {id:3, src: navBarImage},
    {id:4, src: reactSmooth},
    {id:5, src: reactWeather}
  ]
  

  return (
    <div name="portfolio" className="bg-black w-full md:h-screen p-5">
      <div className="max-w-screen-lg mx-auto h-full flex flex-col pb-24">

        <div className='my-5'>
          <p className='text-4xl text-white mb-4 border-[#57FFFF] border-b-4 inline'>Portafolio</p>
        </div>

        <p className='text-2xl text-gray-300 py-4'>Dale un vistazo a mis ultimos proyectos</p>


        <div className="grid sm:grid-cols-2 gap-4 text-white mt-8">
          <div className="">
            <div className='h-full'>
              <img src={ports[0].src} alt="img" className='rounded-md mb-3 md:hover:scale-105 duration-200'/>
              <div className='flex items-center bg-gray-800 rounded-md '>
                <button className='w-1/2 hover:scale-105 text-xl p-2 md:text-2xl md:py-6'>Demo</button>
                <button className='w-1/2 hover:scale-105 text-xl p-2 md:text-2xl md:py-6'>Codigo</button>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-2">
            {ports.filter(port => (port.id > 1)).map(filtPort => (
              <div className=''>
                <img src={filtPort.src} alt="img" className='rounded-t-md md:hover:rounded-md md:hover:scale-105 duration-200'/>
                <div className='flex items-center bg-gray-800 rounded-b-md '>
                  <button className='w-1/2 hover:scale-105 text-xl p-2'>Demo</button>
                  <button className='w-1/2 hover:scale-105 text-xl p-2'>Codigo</button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
