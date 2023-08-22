import { useEffect, useRef } from 'react'
import './AboutTheGame.css'

import { motion, useAnimation, useInView } from 'framer-motion'

const AboutTheGame = ({ title, children }) => {
    const text = useRef(null)
    const textInView = useInView(text, {once: true})

    const textControls = useAnimation()

    useEffect(() =>{
        if(textInView){
            textControls.start("visible")
        }
    },[textInView])

    return (
        <div className='about-text-wrapper' ref={text}>
            <motion.div
            variants={{
                hidden: {opacity: 0, x: -100},
                visible: {opacity: 1, x: 0}
            }}
            transition={{duration: 2, delay: 0.5}}
            initial="hidden"
            animate={textControls}
            >
                <h1 className='about-title'>
                    {title}
                </h1>
                <div className='about-text'>
                    {children}
                </div>
            </motion.div>
        </div>
    )
}

export default AboutTheGame