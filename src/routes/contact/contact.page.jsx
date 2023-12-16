
import ContactForm from '../../components/contact-form/contact-form.component'; 
import './contact.styles.scss'

const Contact = () => {
  return (
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
  );
};

export default Contact;
