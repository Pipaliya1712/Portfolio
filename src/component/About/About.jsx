import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import ShapeImg from '../Images/Shape_crope.png'
import MyImg from '../Images/my.png'
import Typed from 'typed.js'
import GitW from '../SVGs/GitW.png'
import Git from '../SVGs/Git.png'
import LinkedW from '../SVGs/LinkW.png'
import Linked from '../SVGs/Link.png'
import InstaW from '../SVGs/InstaW.png'
import Insta from '../SVGs/Insta.png'
import PDF from '../PDFs/CV.pdf'

function about() {

  const download = () => {
    const pdf = PDF;
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Parth Pipaliya CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Devlopment.', 'Competitive Programming.', 'Data Structures.', 'Algorithms.'],
      typeSpeed: 80,
      backSpeed: 20,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, [el]);

  return (
    <>
    <div className='flex aic space Aboutcontainer'>
      <div className='detel'>
        <div className='tcFFFFFF fs27'>Hello, It's Me</div><br />
        <div className='tcFFFFFF fs50'>Parth Pipaliya</div><br />
        <div className='tcFFFFFF fs24'>And I'm skilled in <span ref={el} className='tc00D6B4' /></div><br />
        <div className='tcFFFFFF fs16'>Welcome, This is my official portfolio website.I'm a passionate web developer with a keen interest in competitive programming and data structures & algorithms. </div>
        <div className='flex jcc'>
          <div id='gitw' className='svgSpace'>
            <img src={GitW} alt="" className='git'/>
            <Link to={'https://github.com/Pipaliya1712'} target="_blank"><img src={Git} alt="" className='gith'/></Link>
          </div>
          <div id='linkw' className='svgSpace'>
            <img src={LinkedW} alt="" className='link' style={{height: '25px'}}/>
            <Link to={"https://www.linkedin.com/in/parth-pipaliya-945680224/"} target="_blank"><img src={Linked} alt="" className='linkh'/></Link>
          </div>
          <div id='instaw' className='svgSpace'>
            <img src={InstaW} alt="" className='insta' style={{height: '25px'}}/>
            <Link to={"https://www.instagram.com/parth._.1712/"} target="_blank"><img src={Insta} alt="" className='instah'/></Link>
          </div>
        </div>
        <button onClick={download} className='button'>Download CV</button>
      </div>
      <div className='images'>
        <img src={ShapeImg} alt="lol" className='shape'/>
        <img src={MyImg} alt="lol" className='my'/>
      </div>
    </div>
    </>
  )
}

export default about
