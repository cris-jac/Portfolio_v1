import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from "react-scroll";
// import NavBar from './NavBar';


const SocialLinks = () => {

  const icons = [
    {id: 1, Ic: FaGithub, name: "GitHub", child: "rounded-tr-md", href: "https://github.com/cris-jac"},
    {id: 2, Ic: FiMail, name: "Contacto", child: "", to:'contact'},
    {id: 3, Ic: BsFillPersonLinesFill, name: "CV", child: "rounded-br-md", href:"/resume.pdf"}
  ]

  return (
    <div className='hidden lg:flex left-0 fixed top-[35%]'>
      <ul className=''>
        { icons.map(({id, Ic, name, child, href, to}) => {
          return href ?
            <li className={`bg-gray-300 hover:rounded-r-md flex justify-between pl-5 hover:translate-x-20  ml-[-90px] duration-200 ${child}`} key={id}>
              <a href={href} target='_blank' className=' flex flex-row  items-center space-x-3 p-2' rel="noreferrer">
                <p className='w-14 text-center'>{name}</p>
                <Ic size={35} />
              </a>
            </li> :
            <li className={`bg-gray-300 hover:rounded-r-md flex justify-between pl-5 hover:translate-x-20  ml-[-90px] duration-200 ${child}`} key={id}>
              <Link to={to} className=' flex flex-row  items-center space-x-3 p-2' smooth duration={500}>
                <p className='w-14 text-center'>{name}</p>
                <Ic size={35} />
              </Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default SocialLinks
