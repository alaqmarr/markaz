'use client'
import React from 'react'

const Footer = () => {
    const html = `
        <footer>
        <div class="footer__area black-bg">
            <div class="footer__cta-wrap5 pt-110">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-xl-7">
                            <h2 class="footer__cta-wrap-title text-white">Contact Us</h2>
                        </div>
                    </div>
                    <div class="row gy-4 justify-content-between align-items-end">
                        <div class="col-xl-auto">
                            <form class="newsletter-form form-group">
                                <input class="form-control style-border2" type="email" placeholder="Email Email" required="">
                                <button type="submit" class="btn icon-btn"><i class="icon-arrow-top-left"></i></button>
                            </form>
                        </div>
                        <div class="col-xl-8">
                            <ul class="footer-menu-list">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/products">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="footer__top footer__top-six fix">
                    <div class="row justify-content-between">
                        <div class="col-xl-auto col-md-6">
                            <div class="footer__widget footer__contact">
                                <h4 class="footer__widget-title">Enquire</h4>
                                <div class="footer__content">
                                    <p><a href="mailto:markazhyd@gmail.com">markazhyd@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-auto col-md-6">
                            <div class="footer__widget footer__contact">
                                <h4 class="footer__widget-title">New business:</h4>
                                <div class="footer__content">
                                    <p><a href="tel:9866678652">+91 98666 78652</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-auto col-md-6">
                            <div class="footer__widget footer__links">
                                <h4 class="footer__widget-title">Socials</h4>
                                <div class="footer__link">
                                    <ul class="list-wrap">
                                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                                        <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                                        <li><a href="https://www.behance.com/">Behance</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-auto col-md-6">
                            <div class="footer__widget footer__location">
                                <h4 class="footer__widget-title">Address</h4>
                                <div class="footer__content">
                                    <p>4-3-129, Hill St, Victoria Ranigunj, Old Bhoiguda, Rani Gunj, Secunderabad, Telangana 500003
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="footer__bottom footer__bottom-five">
                    <div class="row gy-2 justify-content-center text-center">
                        <div class="col-xl-12">
                            <div class="copyright-text">
                                <p class="text-white">© 2025 Markaz Pneumatics, All rights reserved. <br/> Designed, Developed and Powered by <a href="https://alaqmar.dev">The Web Sensei</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Footer
