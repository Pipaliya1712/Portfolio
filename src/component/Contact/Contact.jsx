import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <div className='heading-wrapper tcFFFFFF space heading'>
    Reach out! Let's start something together.
    </div>
    <form className='mt space flex f-c' action="">
      <label htmlFor="name" className='fild fild-text'>NAME</label>
      <input type="text" name='name'  placeholder='Enter your name' className='input'/>
      <label htmlFor="email" className='fild fild-text'>EMAIL ADDRESS</label>
      <input type="email" name='email' placeholder='Enter your email address' className='input'/>
      <label htmlFor="fild" className='fild fild-text'>MESSAGE</label>
      <textarea name="fild" maxLength="5000" placeholder='Example Text'className='input text-area-height'></textarea>
      <input type="submit" value="Submit" className='button'/>
    </form>
    </>
  )
}

export default Contact
