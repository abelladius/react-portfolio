import './contact-form.styles.scss'

const ContactForm = () => {
  return (
    <form
        action="https://formspree.io/f/meqyjozz"
        method="POST"
>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit" className='button'>Submit</button>
    </form>
  );
};

export default ContactForm;
