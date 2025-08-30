import Products from '@/components/Products';
import React from 'react'

const page = async ({searchParams} : {searchParams: Promise<{categoryId?: string}>}) => {
    // Correctly destructure the categoryId from the resolved searchParams
    const { categoryId } = await searchParams;

    try {
        const baseUrl = "http://mystore.alaqmar.dev/api/markaz-pneumatics/products";
        const url = categoryId 
            ? `${baseUrl}?categoryId=${encodeURIComponent(categoryId)}`
            : baseUrl;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const products = await response.json();
        
        return (
            <div>
                <Products products={products} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching products:', error);
        return (
            <div>
                <p>Error loading products. Please try again later.</p>
            </div>
        );
    }
}

export default page