import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import '../styles/header.css'

function HeaderLayout() {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrolLY, setPrevScrollY] = useState(0)
  const [scrollY, setScrollY] = useState(0); 


  function handleScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []); 

  useEffect(() => {
    setPrevScrollY(scrollY)
    if(prevScrolLY >= scrollY){
        setPrevScrollY(scrollY)
        setShowHeader(true)
    }
    else {
        setShowHeader(false)
    }
  },[scrollY])

  return (
    <>
      <AnimatePresence>
        {showHeader && <>
            <motion.header
          className="header section steele-background"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{y: -100, opacity: 0}}
          transition={{ duration: 0.5 }}
        >
          <div className="content__container">
            <div className="header-nav-section">
              <div
                className="logo-wrapper header-one">
                <Link to="/"><p>finSweet!</p></Link>
              </div>
              <div className="nav-items-wrapper">
                <Link to="/"><div className="nav__item body-text-big">Home</div></Link>
                <Link to="about-us"><div className="nav__item body-text-big">About us</div></Link>
                <Link to="services"><div className="nav__item body-text-big">Services</div></Link>
                <div className="nav__item body-text-big">Blog</div>
                <Link to="contact"><div className="nav__item body-text-big">Contact</div></Link>
              </div>
              <div className="contact-info">
                <div className='caption'>Road assistance</div>
                <div className="body-text-small">1800 265 24 52</div>
              </div>
            </div>
          </div>
        </motion.header>
        </>}
      </AnimatePresence>
    </>
  );
}

export default HeaderLayout;