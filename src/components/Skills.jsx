import { SiGithub } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiReact } from 'react-icons/si';

const Skills = () => {

  const icons = [
    {id: 1, Comp: SiHtml5, iName: "HTML", iColor: "group-hover:fill-[#E44D26]"},
    {id: 2, Comp: SiCss3, iName: "CSS", iColor: "group-hover:fill-[#0277BD]"},
    {id: 3, Comp: SiJavascript, iName: "JavaScript", iColor: "group-hover:fill-[#FFD600]"},
    {id: 4, Comp: SiBootstrap, iName: "Bootstrap", iColor: "group-hover:fill-[#7811F7]"},
    {id: 5, Comp: SiTailwindcss, iName: "TailwindCSS", iColor: "group-hover:fill-[#44A8B3]"},
    {id: 6, Comp: SiReact, iName: "React JS", iColor: "group-hover:fill-[#00D8FF]"},
    {id: 7, Comp: SiGithub, iName: "GitHub", iColor: "group-hover:fill-white"}
  ]

  return (
    <div name="skills" className='h-screen bg-black w-full p-5' >
      <div className='max-w-screen-lg mx-auto'>

        <div className='my-5 '>
          <p className='text-4xl text-white inline border-[#57FFFF] border-b-4'>Habilidades</p>
        </div>

        <p className='text-gray-300 text-2xl py-5'>Entre las tecnologias que uso para codear estan</p>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-center pt-8'>
          {icons.map(({ iName, Comp, iColor }) => (
            <button className='group items-center flex flex-col mx-auto'>
              <Comp size={80} className={`fill-gray-400 ${iColor}`}/>
              <p className='text-2xl text-gray-400 group-hover:text-white'>{iName}</p>
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills
