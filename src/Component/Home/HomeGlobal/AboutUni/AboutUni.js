import React from 'react'
import './AboutUni.css'

import university from '../../../../Assets/Global/university.jpg'

const AboutUni = () => {
  return (
    <div className='about-uni'>
        <div className='about-uni-text'>
                <h2>About The University</h2>
                <p>One of the world's premier academic and research institutions,
                    Jonathan Caroll University has driven new ways of thinking since
                    its foundation in 1876. Today, JCU is an intellectual destination
                    that draws inspired scholars to our Hyde Park and international 
                    campuses, keeping JCU at the nexus of ideas that challenge and 
                    change the world.
                </p>
        </div>
        <div className='about-uni-image'>
                <img src={university} alt='university' />
        </div>

    </div>
  )
}

export default AboutUni