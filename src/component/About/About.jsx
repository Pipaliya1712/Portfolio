import React from 'react'
import './About.css'
import ShapeImg from '../Images/Shape_crope.png'
import MyImg from '../Images/my.png'
import Typed from 'typed.js'
// import GitBlack from '../SVGs/'
// import Git from '../SVGs/'
// import LinkedBlack from '../SVGs/'
// import Linked from '../SVGs/'
// import InstaBklack from '../SVGs/'
// import Insta from '../SVGs/'

function about() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Devlopment.', 'Competitive Programming.', 'Data Structures.', 'Algorithms.'],
      typeSpeed: 80,
      backSpeed: 20,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [el]);

  return (
    <>
    <div className='flex aic jcc space Aboutcontainer'>
      <div className='detel'>
        <div className='tcFFFFFF fs27'>Hello, It's Me</div><br />
        <div className='tcFFFFFF fs50'>Parth Pipaliya</div><br />
        <div className='tcFFFFFF fs24'>And I'm skilled in <span ref={el} className='tc00D6B4' /></div><br />
        <div className='tcFFFFFF fs16'>Welcome, This is my official portfolio website.I'm a passionate web developer with a keen interest in competitive programming and data structures & algorithms. </div>
      </div>
      <div className='images'>
        <img src={ShapeImg} alt="lol" className='shape'/>
        {/* <img src={MyImg} alt="lol" className='my'/> */}
      </div>
    </div>
    </>
  )
}

export default about
