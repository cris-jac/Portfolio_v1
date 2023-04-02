import { useState } from 'react';
import { Link } from 'react-scroll';
import NavLinks from './NavLinks';
import { FaTimes, FaBars } from 'react-icons/fa';

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {id: 1, section: 'home', name: 'Inicio'},
    {id: 2, section: 'about', name: 'Sobre mi'},
    {id: 3, section: 'portfolio', name: 'Portafolio'},
    {id: 4, section: 'skills', name: 'Habilidades'},
    {id: 5, section: 'contact', name: 'Contacto'}
  ]

  return (
    <div className=" bg-gray-800 flex items-center fixed w-full h-20 justify-between px-4">
      <Link to='home' smooth duration={200} className='cursor-pointer'>
        <div className="flex flex-row items-center text-transparent bg-clip-text bg-gradient-to-l from-[#57FFFF] via-[#024B98] to-[#0388E3]">
          <h1 className='font-brackets text-4xl md:text-6xl'> {`{`} </h1>
          <h1 className='font-Rajdhani font-bold text-2xl md:text-4xl'> Cristian </h1>
          <h1 className='font-brackets text-4xl md:text-6xl'> {`}`} </h1>
        </div>
      </Link>
      


      <div className="text-[#57FFFF] capitalize">
        <ul className="hidden md:flex">
          {links.map((link)=>(
            // <li className="px-4 cursor-pointer text-2xl hover:scale-105" key={link.id}> <a href={link.section}>{link.section}</a></li>
            <NavLinks link={link.section} className="px-4 cursor-pointer text-2xl hover:scale-105" key={link.id} name={link.name}/>
            
          ))}

            
        </ul>
      </div>


      <div onClick={() => setNav(!nav)} className='md:hidden pb-10 z-10 text-[#57FFFF]'>
        {nav ? <button className='p-2 hover:bg-gray-700 hover:rounded-md fixed top-5 right-5'><FaTimes size={30}/></button> : <button className='p-2 hover:bg-gray-700 hover:rounded-md fixed top-5 right-5'><FaBars size={30}/></button>}
      </div>
      
      { nav && 
        <ul className='flex flex-col  justify-center h-screen top-0 left-0 items-center absolute   w-full bg-gradient-to-b from-black to-gray-800  text-[#57FFFF] capitalize'>
          {links.map((link)=>(
            // <li className='cursor-pointer py-5 text-4xl ' key={link.id}>{link.section}</li>
            <NavLinks link={link.section} className="cursor-pointer py-5 text-4xl" key={link.id}/>
          ))}
        </ul>
      }

    </div>
  )
}

export default NavBar
