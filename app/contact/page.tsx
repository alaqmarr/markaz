'use client'
import React from 'react'

const page = () => {
    const html = `
    <main class="fix">

    <!--==============================
    Breadcrumb Area
    ==============================-->
    <section class="breadcrumb__area fix">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="breadcrumb__content">
                        <h3 class="title">CONTACT<img class="breadcrumb-shape" src="assets/img/others/bredcrumb-shape1.png" alt="img"></h3>
                        <nav class="breadcrumb">
                            <span property="itemListElement" typeof="ListItem">
                                <a href="/">Home</a>
                            </span>
                            <span class="breadcrumb-separator"><i class="flaticon-right-arrow-angle"></i></span>
                            <span property="itemListElement" typeof="ListItem">Contact</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcrumb-area-end -->

    <!--==============================
    Contact Area
    ==============================-->
    <section class="contact-area-1 pt-120 pb-120 overflow-hidden">

        <div class="container">
            <div class="section__title mb-60">
                <h2 class="title">LET'S GET IN TOUCH</h2>
            </div>
            <div class="row gy-60">
                <div class="col-lg-6">
                    <div class="contact__info-wrap">
                        <ul class="list-wrap">
                            <li>
                                <h6 class="title">Phone</h6>
                                <a href="tel:+919866678652">+91 98666 78652</a>
                            </li>
                            <li>
                                <h6 class="title">Email</h6>
                                <a href="mailto:markazhyd@gmail.com">markazhyd@gmail.com</a>
                            </li>
                            <li>
                                <h6 class="title">Office</h6>
                                4-3-129, Hill St, Victoria Ranigunj, <br/>Old Bhoiguda, Rani Gunj, Secunderabad, Telangana 500003
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/place/MARKAZ+PNEUMATICS+%26+HYDRAULICS/data=!4m2!3m1!1s0x0:0x9a8f3e4fc9d7ff07?sa=X&ved=1t:2428&ictx=111" class="link-btn">
                                    See on Google Map
                                    <i class="icon-arrow-top-left"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--======== / Contact Section ========-->

    <!-- contact-map -->
    <div class="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.544656050382!2d78.49183769999999!3d17.4336265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1c04fcd0df%3A0x9a8f3e4fc9d7ff07!2sMARKAZ%20PNEUMATICS%20%26%20HYDRAULICS!5e0!3m2!1sen!2sin!4v1756539462370!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- contact-map-end -->

    </main>
    <!-- main-area-end -->
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}>
      
    </div>
  )
}

export default page
