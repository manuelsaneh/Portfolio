import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='md:flex flex-row flex-wrap justify-center gap-10 hidden'>  
      {technologies.map((technology) => (
        <div className='w-[170px] h-[170px]' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")