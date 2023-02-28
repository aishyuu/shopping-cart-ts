import '../styles/landing.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div className="landingContainer">
            <div className="landingMask">
                <div className="landingText">
                    <div className="landingTitle">
                        <h1 className="landingMain">Sonus</h1>
                        <p className="landingSub">" Where words fail, sound speaks "</p>
                    </div>
                    <div className="landingEnd">
                        <motion.div
                            initial = {{
                                x: 0
                            }}
                            animate = {{
                                x: -10,
                                
                            }}
                            transition = {{
                                repeatType: 'reverse',
                                duration: 1.5,
                                repeat: Infinity
                            }}
                        >
                            <h3>&gt;&gt;</h3>
                        </motion.div>
                        <Link to={`store`} style={{textDecoration: 'none'}}>
                            <h3 className="landingVisit">VISIT THE SHOP</h3>
                        </Link>
                        <motion.div
                            initial = {{
                                x: 0
                            }}
                            animate = {{
                                x: 10,
                                
                            }}
                            transition = {{
                                repeatType: 'reverse',
                                duration: 1.5,
                                repeat: Infinity
                            }}
                        >
                            <h3>&lt;&lt;</h3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}