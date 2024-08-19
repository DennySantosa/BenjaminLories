import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { useState } from 'react';

const Banner = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="ml-[50px]">
                            <div className="">
                                <motion.span
                                    animate = {{color: ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffffff']}}
                                    transition={{
                                        duration: 4,         // Duration of one cycle
                                        repeat: Infinity,           // Repeat the animation 3 times
                                        repeatType: "mirror",  // Start over from the beginning
                                    }}
                                >
                                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold">Welcome to You!</h1>
                                </motion.span>
                            </div>
                            <div className="">
                                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                    <span>{"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                        {">"} <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> I am a  <span className="inline-block">
                                            <Typewriter
                                                options={{
                                                    strings:
                                                        ['Full Stack Developer ',
                                                            ' Web GL Professional '],
                                                    wrapperClassName: "underline underline-offset-8  decoration-indigo-500",
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                                </div>
                            </div>
                            {/* <Link to='intro' spy={true} smooth={true} duration={500} offset={-50} className="button">Here Click</Link> */}
                        </div>

                              
                       
                        <div className="w-[250px] h-52 relative right-0">
                            { isVisible && (
                                <div className="talk-bubble tri-right round right-in z-20 ">
                                    <div class="talktext text-white font-bold">
                                        <p>Hi!</p>
                                        <p>I can help you.</p>
                                        <p>Anythig and Anytime and Anywhere.</p>
                                    </div>
                                 </div>   
                            )}
                                   
                            
                            <img className='absolute top-8 ml-[230px] w-[200px] h-full z-10' src="images/emoji.png" alt="emoji" onClick={handleClick}/>

                            
                        </div>
                      
                        <motion.div
                            // className="w-32 h-32 bg-green-500 flex items-center justify-center text-white"
                            className="w-[120px] h-[70px] mt-[20px] z-0"
                            animate={{ scale: [1, 1.2, 1] }} // Scale up to 1.5 and back to 1
                            transition={{
                                duration: 2,         // Duration of one cycle
                                repeat: Infinity,           // Repeat the animation 3 times
                                repeatType: "loop",  // Start over from the beginning
                            }}
                            >
                            <img className='absolute top-20 w-full h-full' src="images/click-here.png" alt="emoji" />
                            </motion.div>
                        
                        {/* <div className="w-[100px] h-[70px] relative hidden md:block">
                            
                        </div> */}
                    </div>
                </div>

                {/* details in row */}
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Completed Projects</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>8+</span>
                        <span className='text-xs text-Snow'>Freelance Clients</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>5+</span>
                        <span className='text-xs text-Snow'>Honors & Awards</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Opensource Projects</span>
                    </div>

                </div>
            </div>
        </BannerLayout>
        
    )
}

export default Banner