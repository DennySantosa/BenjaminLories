import Link from 'next/link';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaSkype, FaTwitter } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Languages from './Languages';
import Location from './Location';
import Tools from './Tools';
import Skills from './Skills';
import Photo from './Photo';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
import Endric from '../../../public/images/endric.jpg';
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
        <div className='order-1 xl:order-none'>
        <a href='/' target="_self" rel="noreferrer">{ <Photo /> }</a>
          
        </div>
        {/* <Image className='w-20 h-20 rounded-full' src={Endric} alt='profile picture' /> */}
        
        
        <div className='flex flex-col items-center justify-center'>
        <motion.span
          className="text-2xl font-bold"
          animate={{ color: "rgb(59 130 246)" }} // Green to Blue
          transition={{ duration: 1.4 }}
        >
         {NAME}
        </motion.span>
        
          <span className='text-sm text-LightGray text-center mt-2'>{DESIGNATION}</span>
        </div>
      </div>

      {/* middle components */}
      <div className='beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
        <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </Link>
        {/* <Link href={SOCIAL_LINKS.TWITTER} target='_blank' rel='noreferrer' className=''>
          <FaTwitter />
        </Link> */}
        {/* <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
          <FaFacebook />
        </Link> */}
        <Link href={SOCIAL_LINKS.SKYPE} target='_blank' rel='noreferrer' className=''>
          <FaSkype />
        </Link>
      </div>
    </>
  );
};

export default Intro;
