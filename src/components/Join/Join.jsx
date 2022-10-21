import React, { useRef } from 'react'
import './Join.scss'
import emailjs from '@emailjs/browser'

const Join = () => {
  //收到 email 的 response
  //使用emailjs來設置訂閱信寄過去的樣板
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className="join-section" id='Join-us'>
      <div className="left-j">
        <hr />
        <span>READY TO
          LEVEL UP </span> <br />
        <span>YOUR BODY
          WITH US?</span>
      </div>
      <div className="right-j">
        <form ref={form} action="" className='email-form' onSubmit={sendEmail}>
          <input type="email" name='user_name' placeholder='Enter your email to join!' />
          <button className='btn btn-join'>Join us</button>
        </form>
      </div>
    </div>
  )
}

export default Join
