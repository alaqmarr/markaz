'use client'
import React from 'react'

const Header = ({categories, products} : {categories: any, products: any}) => {
    const html = `
        <header>
        <div id="sticky-header" class="tg-header__area transparent-header tg-header__area-six">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-12">
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav">
                                <div class="logo">
                                    <a href="/"><img src="/logo.webp" alt="Logo"></a>
                                </div>
                                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                    <ul class="navigation me-0">
                                        <li><a href="/">HOME</a>
                                        </li>

                                        <li class="menu-item-has-children"><a href="/products">Products</a>
                                            <ul class="sub-menu">
                                                ${
                                                    products.map((product: any) => (
                                                        `<li key={product.id}><a href="/products/${product.id}">${product.name}</a></li>`
                                                    )).join('')
                                                }
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">Categories</a>
                                            <ul class="sub-menu">
                                                ${
                                                    categories.map((category: any) => (
                                                        `<li key={category.id}><a href="/products?categoryId=${category.id}">${category.name}</a></li>`
                                                    )).join('')
                                                }
                                            </ul>
                                        </li>
                                        <li><a href="/contact">CONTACT</a></li>
                                    </ul>
                                </div>
                                <div class="tgmenu__action d-none d-md-block">
                                    <ul class="list-wrap">
                                        <li class="offCanvas-menu">
                                            <a href="javascript:void(0)" class="menu-tigger sidebar-btn">
                                                <span class="line"></span>
                                                <span class="line"></span>
                                                <span class="line"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mobile-nav-toggler">
                                    <a href="javascript:void(0)" class="sidebar-btn">
                                        <span class="line"></span>
                                        <span class="line"></span>
                                        <span class="line"></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Menu  -->
        <div class="tgmobile__menu">
            <nav class="tgmobile__menu-box">
                <div class="close-btn"><i class="fas fa-times"></i></div>
                <div class="nav-logo">
                    <a href="/"><img src="/logo.webp" alt="Logo"></a>
                </div>
                <div class="tgmobile__menu-outer">
                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                </div>
                <div class="tgmobile__menu-bottom">
                    <div class="contact-info">
                        <ul class="list-wrap">
                            <li><a href="mailto:markazhyd@gmail.com">markazhyd@gmail.com</a></li>
                            <li><a href="tel:+919866678652">+91 98666 78652</a></li>
                        </ul>
                    </div>
                    <div class="social-links">
                        <ul class="list-wrap">
                            <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.whatsapp.com/" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="tgmobile__menu-backdrop"></div>
        <!-- End Mobile Menu -->

        <!-- offCanvas-menu -->
        <div class="offCanvas__info">
            <div class="offCanvas__close-icon menu-close">
                <button><i class="fas fa-times"></i></button>
            </div>
            <div class="offCanvas__logo mb-30">
                <a href="/"><img src="/logo.webp" alt="Logo"></a>
            </div>
            <div class="offCanvas__side-info mb-30">
                <div class="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p>
                        4-3-129, Hill St, Victoria Ranigunj, Old Bhoiguda, Rani Gunj, Secunderabad, Telangana 500003
                    </p>
                </div>
                <div class="contact-list mb-30">
                    <h4>Phone Number</h4>
                    <p>+91 98666 78652</p>
                </div>
                <div class="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p>markazhyd@gmail.com</p>
                </div>
            </div>
            <div class="offCanvas__social-icon mt-30">
                <ul class="list-wrap">
                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.whatsapp.com/" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="offCanvas__overly"></div>
        <!-- offCanvas-menu-end -->

    </header>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Header
