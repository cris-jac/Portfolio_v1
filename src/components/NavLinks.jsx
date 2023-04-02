import { Link } from "react-scroll";

const NavLinks = ({className, link, onClick, name}) => {
  return (
      <li className={className}>
        <Link to={link} onClick={onClick} smooth duration={500} >
            {name}
        </Link>
      </li>
  )
}

export default NavLinks
