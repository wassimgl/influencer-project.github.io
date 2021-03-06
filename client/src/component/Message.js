import React,{ useEffect, useRef ,useState} from 'react'
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './message.css';
const Message = () => {
    const [result, setResult] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zjl90jd', 'template_6l8c8b9', form.current, 'R4hpM-oPlIXcXwpf3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setResult(true)
        e.target.reset()
        setTimeout(()=>setResult(false),5000)
    };
    useEffect(()=>{
      Aos.init({duration: 2500});
        },[]  );

  return (
    <section className='contt'>
<div className='content'>
<h2>Notre équipe se tient à votre disposition pour vous aider.</h2>
</div>
<p>Vous souhaitez être conseillé sur nos services ou vous avez besoin de plus d’informations à propos de notre platforme ? Vous pouvez vous mettre en contact avec nous en utilisant ce formulaire e-mail. Nous répondrons volontiers à vos questions.</p>

<div className='containeer'>

<div className='contactForm'>
<form ref={form} onSubmit={sendEmail}>
<h2> Send message </h2>
      <div className='inputBox'>
      <input type="text" name="" required="required" />
      <span> Full Name</span>
      </div>
      <div className='inputBox'>
      <input type="email" name=""  required="required"  />
      <span> Email </span>
      </div>
      <div className='inputBox'>
      <textarea name="message" />
      <span> Type your message...</span>
</div>
      <div className='inputBox'>
      <input type="submit" value="Send"  required="required"  />
     { result ? <h1>Message envoyé</h1> : null}
     </div>
    </form>
</div>

</div>




  
    
    </section>
  )
}

export default Message;