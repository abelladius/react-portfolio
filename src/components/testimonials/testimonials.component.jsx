import React from 'react'
import ProfilePictureSeb from '../../assets/images/testimonials/testimonials-seb.webp'
import ProfilePictureJonathan from '../../assets/images/testimonials/testimonials-jonathan.webp'
import './testimonials.styles.scss'


const Testimonials = () => {
  return (
    <div className="content-container testimonial-container">
        <h2 className="subtitle">Testimonials</h2>
        <hr />
        <p>Discover the experiences and feedback of those who have journeyed with me. These testimonials are a testament to the collaborations, the impact, and the relationships forged through web development.</p>

        <div className='testimonial-cards-container'>
            <div className="testimonial-card">
                <img src={ProfilePictureSeb} alt="" />
                <h3 className="subtitle">Bela Sebastian</h3>
                <h4>-AlpinMag</h4>
                <p>"Damian is a highly skilled and dedicated web developer. He played a pivotal role in our e-commerce success. His expertise in OpenCart, plugin installations, banner designs, bug fixing, and SEO optimization significantly contributed to our online growth. We couldn't have achieved our goals without him."</p>
            </div>

            <div className="testimonial-card">
                <img src={ProfilePictureJonathan} alt="" />
                <h3 className="subtitle">Jhonatan K.</h3>
                <h4>-KYDAnimalShelter</h4>
                <p>"Damian's commitment to our cause was truly exceptional. He designed and developed a website that allowed us to receive online donations effortlessly. His work was instrumental in furthering our mission to support stray animals. We're incredibly grateful for his contribution."</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials