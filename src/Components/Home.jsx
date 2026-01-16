import '../App.css'
import { motion } from "motion/react"
import fc from '../assets/fc.png'
import accounting from '../assets/accounting.png'
import tax from '../assets/tax.png'
import ba from '../assets/ba.png'

export function Home() {
    return (
        <>
            <div className='h-h'>Income Tax, GST & Buisness Compliance — Made Simple</div>
            <div className='h-h2'>Trusted accounting & tax services for individuals and businesses</div>
            <div className='abcd'>
                <motion.div className='h-b1' whileHover={{ scale: 1.01 }}>
                    <a href="https://wa.me/918910582700?text=Hi,%20I%20visited%20your%20website%20and%20I'd%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </motion.div>
                <motion.div className='h-b2' whileHover={{ scale: 1.01 }}>
                    <a href="tel:8910582700" target="_blank" rel="noopener noreferrer">Call Now</a>
                </motion.div>
            </div>
            <div className='h-ser'>Services</div>
            <div className='xyz'>
                <motion.div whileTap={{ scale: 0.95 }} className='h-d'>
                    <img src={fc} alt="Financial Consulting" className='h-i1' />
                    <div className='h-d1'>
                        <div className='h-d2'>
                            Financial Consulting
                        </div>
                        <div className='h-d3'>
                            Smart stratigies to grow, manage, and protect your money.
                        </div>
                    </div>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} className='h-d'>
                    <img src={accounting} alt="Accounting" className='h-i1' />
                    <div className='h-d1'>
                        <div className='h-d2'>
                            Accounting
                        </div>
                        <div className='h-d3 pt-[0.5vh]'>
                            Clean books. Clean finances. Zero headaches.
                        </div>
                    </div>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} className='h-d'>
                    <img src={tax} alt="Tax Services" className='h-i1' />
                    <div className='h-d1'>
                        <div className='h-d2'>
                            Tax Services
                        </div>
                        <div className='h-d3 pt-[0.5vh]'>
                            Optimized taxes, timely filings, full compliance.
                        </div>
                    </div>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} className='h-d'>
                    <img src={ba} alt="Business Advisory" className='h-i1' />
                    <div className='h-d1'>
                        <div className='h-d2'>
                            Business Advisory 
                        </div>
                        <div className='h-d3 pt-[0.5vh]'>
                            Financial clarity for confident business decisions
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='h-foot'>Rated 4.9⭐ by clients on Google</div>
        </>
    )
}