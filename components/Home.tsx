'use client'
import React from 'react'

const Home = ({products} : {products: any}) => {

    const featuredProducts = products.filter((product: any) => product.isFeatured === true);
    // first 6 products for showcase
    const showcaseProducts = products.slice(0, 6);

  const html = `
  <main class="fix">

    <!--==============================
    Hero Area
    ==============================-->
    <section class="hero-wrapper hero-7">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero-style7">
                        <h1 class="hero-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                            Markaz Pneumatics and Hydraulics
                        </h1>
                        <div class="hero-flex-wrap">
                            <img class="content-thumb wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s" src="/janatics.webp" alt="img">
                            <p class="hero-text wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">AUTHORISED DISTRIBUTOR</p>
                            <div class="tg-button-wrap" data-aos="fade-up" data-aos-delay="200">
                                <a href="/products" class="btn big-circle-btn style4 gsap-magnetic">
                                    Explore Products
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--======== / Hero Section ========-->

    <!--==============================
    Skill Area 01
    ==============================-->
    <section class="skill-area-1 pt-120 pb-120 black-bg">
        <div class="container">
            <div class="row gy-40 align-items-center">
                <div class="col-xl-5">
                    <div class="skill-thumb-box1 wow img-custom-anim-left">
                        <img src="/logobanner.webp" alt="img">
                    </div>
                </div>
                <div class="col-xl-7">
                    <div class="skill-wrap1">
                        <div class="section__title mb-50 wow img-custom-anim-left">
                            <h2 class="title text-white">WE BELIEVE IN THE POWER OF QUALITY</h2>
                            <p class="sec-text text-white">
                            
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--======== / Skill Section ========-->

    <!--==============================
    Marquee Area
    ==============================-->
    <div class="container-fluid px-0 overflow-hidden pb-30 pt-30 theme-bg">
        <div class="slider__marquee clearfix marquee-wrap style3">
            <div class="marquee_mode marquee__group">
                <div class="item m-item"><a href="#"><img src="/uflow.jpeg" alt="img"></a></div>
                <div class="item m-item"><a href="#"><img src="/janatics.png" alt="img"></a></div>
            </div>
        </div>
    </div>
    <!--======== / Marquee Section ========-->

    <!--==============================
    Service Area 07
    ==============================-->
    <!--
    <section class="service-area-7 pt-110 pb-120 position-relative">
        <div class="container">
            <div class="section__title mb-50 wow img-custom-anim-left">
                <div class="row gy-4">
                    <div class="col-lg-7">
                        <h2 class="title">OUR SERVICES</h2>
                    </div>
                    <div class="col-lg-5">
                        <p class="sec-title">Dive into our expertise in user experience optimization, digital strategy, and cutting-edge technology.</p>
                    </div>
                </div>
            </div>
            <div class="row gy-40 justify-content-between">
                <div class="col-xxl-5 col-xl-6">
                    <div class="service-thumb7-1">
                        <img src="assets/img/service/7-1.jpg" alt="img">
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="row gy-90">
                        <div class="col-md-6">
                            <div class="service-list7-wrap">
                                <h4 class="service-list7-title">Product Design</h4>
                                <ul>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Mobile & Web Apps</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> User Experience</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Data Visualization</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-list7-wrap">
                                <h4 class="service-list7-title">Development</h4>
                                <ul>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> ReactJS</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> WebGL</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Prototyping</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-list7-wrap">
                                <h4 class="service-list7-title">Visual Design</h4>
                                <ul>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Websites</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> 3D</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Branding</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-list7-wrap">
                                <h4 class="service-list7-title">Content</h4>
                                <ul>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Photography</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Motion Graphics</li>
                                    <li><img src="assets/img/icon/arrow-left.svg" alt="img"> Illustrations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    -->
    <!--======== / Service Section ========-->

    <!--==============================
    Counter Area
    ==============================-->
    <!--
    <section class="pb-120">
        <div class="counter-area-1 pt-60 pb-60 overflow-hidden">
            <div class="container">
                <div class="row gy-40 justify-content-between">
                    <div class="col-xl-auto col-lg-4 col-md-6 counter-divider">
                        <div class="counter-box">
                            <div class="counter-box_icon">
                                <i class="icon-service-icon1"></i>
                            </div>
                            <h3 class="counter-box_title"><span class="counter-number">26</span>+ Design Awards</h3>
                            <p class="counter-box_text">We are a creative agency brands building insightful strategy, creating unique designs helping</p>
                        </div>
                    </div>
                    <div class="col-xl-auto col-lg-4 col-md-6 counter-divider">
                        <div class="counter-box">
                            <div class="counter-box_icon">
                                <i class="icon-service-icon2"></i>
                            </div>
                            <h3 class="counter-box_title"><span class="counter-number">247</span>+ Total Projects</h3>
                            <p class="counter-box_text">We are a creative agency brands building insightful strategy, creating unique designs helping</p>
                        </div>
                    </div>
                    <div class="col-xl-auto col-lg-4 col-md-6 counter-divider">
                        <div class="counter-box">
                            <div class="counter-box_icon">
                                <i class="icon-service-icon3"></i>
                            </div>
                            <h3 class="counter-box_title"><span class="counter-number">140</span>+ Happy Customers</h3>
                            <p class="counter-box_text">We are a creative agency brands building insightful strategy, creating unique designs helping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    -->
    <!--======== / Counter Section ========-->

    <!--==============================
    Project Area 06
    ==============================-->
    <!--
    <section class="project-area-7 pt-110 pb-120 overflow-hidden black-bg">
        <div class="container">
            <div class="section__title text-center mb-55 wow img-custom-anim-top">
                <h2 class="title text-white">OUR SELECTED PROJECTS</h2>
            </div>
            <div class="row gy-30 gx-30">
                <div class="col-lg-6">
                    <div class="project-card-item6 shine-animate-item">
                        <div class="project-card-thumb wow img-custom-anim-top">
                            <a class="shine-animate" href="project-details.html">
                                <img src="assets/img/project/project7-1.jpg" alt="img">
                            </a>
                        </div>
                        <div class="project-card-content">
                            <a href="about.html" class="btn icon-btn gsap-magnetic">
                                <i class="icon-arrow-top-left"></i>
                            </a>
                            <div class="slider__marquee clearfix marquee-wrap">
                                <div class="marquee_mode2 marquee__group">
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="project-card-item6 shine-animate-item">
                        <div class="project-card-thumb wow img-custom-anim-top">
                            <a class="shine-animate" href="project-details.html">
                                <img src="assets/img/project/project7-2.jpg" alt="img">
                            </a>
                        </div>
                        <div class="project-card-content">
                            <a href="about.html" class="btn icon-btn gsap-magnetic">
                                <i class="icon-arrow-top-left"></i>
                            </a>
                            <div class="slider__marquee clearfix marquee-wrap">
                                <div class="marquee_mode2 marquee__group">
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="project-card-item6 shine-animate-item">
                        <div class="project-card-thumb wow img-custom-anim-top">
                            <a class="shine-animate" href="project-details.html">
                                <img src="assets/img/project/project7-3.jpg" alt="img">
                            </a>
                        </div>
                        <div class="project-card-content">
                            <a href="about.html" class="btn icon-btn gsap-magnetic">
                                <i class="icon-arrow-top-left"></i>
                            </a>
                            <div class="slider__marquee clearfix marquee-wrap">
                                <div class="marquee_mode2 marquee__group">
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">THE ORDINARY</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="project-card-item6 shine-animate-item">
                        <div class="project-card-thumb wow img-custom-anim-top">
                            <a class="shine-animate" href="project-details.html">
                                <img src="assets/img/project/project7-4.jpg" alt="img">
                            </a>
                        </div>
                        <div class="project-card-content">
                            <a href="about.html" class="btn icon-btn gsap-magnetic">
                                <i class="icon-arrow-top-left"></i>
                            </a>
                            <div class="slider__marquee clearfix marquee-wrap">
                                <div class="marquee_mode2 marquee__group">
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                    <h4 class="item m-item project-card-title text-white"><a href="project-details.html">DREAMY VISIONS</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    -->
    <!--======== / Project Section ========-->

    <!--==============================
    FAQ Area 2
    ==============================-->
    <!--
    <section class="faq-area-2 pt-120 pb-120 gray-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="accordion-area accordion" id="faqAccordion">

                        <div class="accordion-card style2 active">
                            <div class="accordion-header" id="collapse-item-1">
                                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">What will my Project cost?</button>
                            </div>
                            <div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    <p class="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-card style2">
                            <div class="accordion-header" id="collapse-item-2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">What happens to my data if I cancel?</button>
                            </div>
                            <div id="collapse-2" class="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    <p class="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-card style2">
                            <div class="accordion-header" id="collapse-item-3">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">How I can optimize voice search?</button>
                            </div>
                            <div id="collapse-3" class="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    <p class="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-card style2">
                            <div class="accordion-header" id="collapse-item-4">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">What happens to my data if I cancel?</button>
                            </div>
                            <div id="collapse-4" class="accordion-collapse collapse " aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    <p class="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-card style2">
                            <div class="accordion-header" id="collapse-item-5">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">Can I change my plan later?</button>
                            </div>
                            <div id="collapse-5" class="accordion-collapse collapse " aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    <p class="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    -->
    <!--======== / FAQ Section ========-->

<section class="blog-area-4 pt-110 pb-120">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5">
                    <div class="section__title mb-50">
                        <h2 class="title wow img-custom-anim-left">FEATURED</h2>
                    </div>
                </div>
                <div class="col-lg-auto">
                    <div class="tg-button-wrap mb-50">
                        <a href="/products" class="btn border-dark2 wow img-custom-anim-right">
                            All Products
                        </a>
                    </div>
                </div>
            </div>
            <div class="row gy-40 justify-content-center">
                ${
                    featuredProducts.map((product: any) => `
                        <div class="col-xl-4 col-md-6">
                            <div class="blog__post-item-five shine-animate-item">
                                <div class="blog__post-thumb">
                                    <a class="shine-animate" href="/products/${product.id}"><img src="${product.images[0].url}" alt="img"></a>
                                </div>
                                <div class="blog__post-content">
                                    <h3 class="title"><a href="/products/${product.id}">${product.name}</a></h3>
                                    <a href="https://wa.me/+919866678653?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}" class="link-btn">
                                        Enquire
                                        <i class="icon-arrow-top-left"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `).join('')
                }
            </div>
        </div>
    </section>

    <!--==============================
    Blog Area
    ==============================-->
    <section class="blog-area-4 pt-110 pb-120">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5">
                    <div class="section__title mb-50">
                        <h2 class="title wow img-custom-anim-left">PRODUCTS</h2>
                    </div>
                </div>
                <div class="col-lg-auto">
                    <div class="tg-button-wrap mb-50">
                        <a href="/products" class="btn border-dark2 wow img-custom-anim-right">
                            All Products
                        </a>
                    </div>
                </div>
            </div>
            <div class="row gy-40 justify-content-center">
                ${
                    showcaseProducts.map((product: any) => `
                        <div class="col-xl-4 col-md-6">
                            <div class="blog__post-item-five shine-animate-item">
                                <div class="blog__post-thumb">
                                    <a class="shine-animate" href="/products/${product.id}"><img src="${product.images[0].url}" alt="img"></a>
                                </div>
                                <div class="blog__post-content">
                                    <h3 class="title"><a href="/products/${product.id}">${product.name}</a></h3>
                                    <a href="https://wa.me/+919866678652?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}" class="link-btn">
                                        Enquire
                                        <i class="icon-arrow-top-left"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `).join('')
                }
            </div>
        </div>
    </section>
    <!--======== / Blog Section ========-->

    </main>
  `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}>
      
    </div>
  )
}

export default Home
