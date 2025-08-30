'use client'
import React from 'react'

const InnerProduct = ({ product }: { product: any }) => {
    const html = `
    <main>

    <!--==============================
    Breadcrumb Area
    ==============================-->
    <section class="breadcrumb__area fix">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="breadcrumb__content">
                        <h3 class="title">${product.name}<img class="breadcrumb-shape" src="/assets/img/others/bredcrumb-shape1.png" alt="img"></h3>
                        <nav class="breadcrumb">
                            <span property="itemListElement" typeof="ListItem">
                                <a href="/">Home</a>
                            </span>
                            <span class="breadcrumb-separator"><i class="flaticon-right-arrow-angle"></i></span>
                            <span property="itemListElement" typeof="ListItem">${product.name}</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcrumb-area-end -->

    <!--==============================
    Blog Details Area
    ==============================-->
    <section class="blog__details-area pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog__details-wrap mb-100">
                        <div class="blog__details-thumb">
                            <img src="${product.images[0].url}" alt="img">
                        </div>
                        <div class="blog__details-content">
                            <h2 class="page-title mb-30">${product.name}</h2>
                            <p class="mb-30">${product.description}</p>
<!--
                            <p>One of the most remarkable applications of AI in healthcare is in diagnostics. Machine learning algorithms are capable of analyzing vast amounts of medical data with unprecedented speed and accuracy. This has led to earlier and more precise disease detection, greatly enhancing the chances of successful treatment.</p>
                            <blockquote>
                                <p>
                                ${product.description}
                                </p>
                            </blockquote>
                            -->

                            <a href="https://wa.me/+919866678652?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}" class="btn">Enquire</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog-details-area-end -->

    </main>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default InnerProduct
