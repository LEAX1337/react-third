import React from 'react'
import { apple, bill, google } from '../assets'
import styles, {layout} from '../styles'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Billing" className='w-full h-full relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily controll your <br className='sm:block hidden' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi fugit explicabo possimus iste quis hic aperiam itaque sed dignissimos!</p>
        <div className='flex flex-row flex-wrap sm:mt-10 my-6'>
          <img src={apple} alt="Apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="Google" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing