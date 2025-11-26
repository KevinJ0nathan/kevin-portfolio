import himtiPortrait from '../assets/himti_portrait_square.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const ServerList = () => {
  return (
    <div className='bg-d-background-tertiary h-full w-[72px] flex flex-col items-center'>
        {/* Portfolio picture */}
        <div>
            <img src={himtiPortrait} className='rounded-3xl p-3'></img>
        </div>

        <div className='Separator w-[32px] h-[2px] bg-[#4f545c] mb-2'></div>
        {/* Main Server Icon */}
        <div className='server-icon active text-white'>
            KJ
            <div className='tooltip'>Kevin's Portfolio</div>
        </div>

        <div className='Separator w-[32px] h-[2px] bg-[#4f545c] m-2'></div>
        {/* Social Media Icons */}
        <a className='server-icon mb-3' href='https://www.linkedin.com/in/kevin-jonathan-790b5730a/' target='_blank' rel="noopener noreferrer">
            <FaLinkedin size={30} color='#dcddde'/>
            <div className='tooltip'>Kevin's LinkedIn</div>
        </a>

        <a className='server-icon mb-3' href='https://github.com/KevinJ0nathan' target='_blank' rel="noopener noreferrer">
            <FaGithub size={30} color='#dcddde'/>
            <div className='tooltip'>Kevin's Github</div>
        </a>

        <a className='server-icon mb-3' href='mailto:realkevinjonathan@gmail.com'>
            <FaEnvelope size={30} color='#dcddde'/>
            <div className='tooltip'>Kevin's Email</div>
        </a>
    </div>
  )
}

export default ServerList