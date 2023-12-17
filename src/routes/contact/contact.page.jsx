
import ContactForm from '../../components/contact-form/contact-form.component'; 
import './contact.styles.scss'
import {motion} from 'framer-motion'


const Contact = () => {
  return (
    <motion.section
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}>
      <div className="content-container contact-container">

        <div>
          <p className="accent">Feel free to</p>
          <h2 className="title">Contact Me</h2>
          <hr />
          <p className="content">
            Have a question or want to discuss about an opportunity? Feel free to send me a message!
          </p>
        </div>
        <ContactForm /> 
      </div>
    </motion.section>
  );
};

export default Contact;
