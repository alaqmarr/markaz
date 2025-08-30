import React from 'react'

const Products = ({ products } : { products: any }) => {
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
                        <h3 class="title">PRODUCTS<img class="breadcrumb-shape" src="assets/img/others/bredcrumb-shape1.png" alt="img"></h3>
                        <nav class="breadcrumb">
                            <span property="itemListElement" typeof="ListItem">
                                <a href="/">Home</a>
                            </span>
                            <span class="breadcrumb-separator"><i class="flaticon-right-arrow-angle"></i></span>
                            <span property="itemListElement" typeof="ListItem">Products</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcrumb-area-end -->

    <!--==============================
    Blog Area
    ==============================-->
    <section class="blog-area-4 pt-110 pb-120">
        <div class="container">
            <div class="row gy-80 justify-content-center">
                ${
                    products.map((product: any) => (`
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
                `
                    )
                    ).join('')
                }
            </div>
        </div>
    </section>
    <!--======== / Blog Section ========-->

    </main>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Products
