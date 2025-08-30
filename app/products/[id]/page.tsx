import InnerProduct from '@/components/InnerProduct';
import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Helper function to fetch product data (avoids duplication)
const fetchProduct = async (id: string) => {
    try {
        const response = await fetch(`http://mystore.alaqmar.dev/api/markaz-pneumatics/products/${id}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                return null; // Product not found
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params;
    const product = await fetchProduct(id);
    
    if (!product) {
        return {
            title: 'Product not found',
            description: 'The requested product could not be found.'
        };
    }
    
    return {
    title: product.name,
    description: product.description,
    openGraph: {
        title: product.name,
        description: product.description,
        images: product.images ? [product.images[0].url] : undefined,
    },
};
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const product = await fetchProduct(id);
    
    // If product doesn't exist, trigger Next.js 404 page
    if (!product) {
        notFound();
    }
    
    return (
        <div>
            <InnerProduct product={product} />
        </div>
    );
};

export default page;