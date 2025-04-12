import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import { BsStripe } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6  '>
        <div className='flex flex-shrink-0 item-center  '>
        <BsStripe className='size-9 text-white' />
        <BsStripe className='size-9 text-white mx-1' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <a href='https://www.linkedin.com/in/saransh-singh-773164307/'><FaLinkedin /></a>
            <a href='https://x.com/saransh2205'><FaSquareXTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar
