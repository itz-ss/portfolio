import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa';
import { SiSession } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 item-center'>
        <SiSession className='size-11 text-white' />
        <SiSession className='size-11 text-white' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar
