import { motion } from "framer-motion"
import { styles } from "../styles"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Manuel</span></h1>
          <p className={`${styles.heroSubText} mt-8 text-white-100`}>
            I'm a Frontend Web Developer,<br className="sm:block hidden" /> I develop Web and Mobile applications.
          </p>
          <p className='mt-8 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I'm a recent graduate with a Technician Diploma in Information Technology. I'm a hard-working, persistent individual and able to quickly gasp new concepts. Passionate about staying up-to-date with emerging web technologies and trends.
          </p>
          <div className="mt-10">
            <a 
              href="#contact"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* <div className="absolute xs:hidden xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero