import React from 'react'
import ProfilePicture from '../../assets/images/pp-2.png'
import './testimonials.styles.scss'

// What my clients say about me:
//                 <p class="content">Discover the experiences and feedback of those who have journeyed with me. These testimonials are a testament to the collaborations, the impact, and the relationships forged through web development. </p>

// <p class="content">-Alpinmag</p>
//                 </div>
//                 <p>"Damian is a highly skilled and dedicated web developer. He played a pivotal role in our e-commerce success. His expertise in OpenCart, plugin installations, banner designs, bug fixing, and SEO optimization significantly contributed to our online growth. We couldn't have achieved our goals without him."</p>

// <p class="content">-KYD Animal Shelter</p>
//                 </div>
//                 <p>"Damian's commitment to our cause was truly exceptional. He designed and developed a website that allowed us to receive online donations effortlessly. His work was instrumental in furthering our mission to support stray animals. We're incredibly grateful for his contribution."</p>



const Testimonials = () => {
  return (
    <div class="content-container testimonial-container">
        <h2 className="subtitle">Testimonials</h2>
        <hr />
        <p>Discover the experiences and feedback of those who have journeyed with me. These testimonials are a testament to the collaborations, the impact, and the relationships forged through web development.</p>

        <div className='testimonial-cards-container'>
            <div className="testimonial-card">
                <img src={ProfilePicture} alt="" />
                <h3 className="subtitle">Bela Sebastian</h3>
                <h4>-AlpinMag</h4>
                <p>"Damian is a highly skilled and dedicated web developer. He played a pivotal role in our e-commerce success. His expertise in OpenCart, plugin installations, banner designs, bug fixing, and SEO optimization significantly contributed to our online growth. We couldn't have achieved our goals without him."</p>
            </div>

            <div className="testimonial-card">
                <img src={ProfilePicture} alt="" />
                <h3 className="subtitle">Jhonatan K.</h3>
                <h4>-KYDAnimalShelter</h4>
                <p>"Damian's commitment to our cause was truly exceptional. He designed and developed a website that allowed us to receive online donations effortlessly. His work was instrumental in furthering our mission to support stray animals. We're incredibly grateful for his contribution."</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials