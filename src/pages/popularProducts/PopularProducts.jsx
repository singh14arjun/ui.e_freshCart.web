import React from 'react'
import ProductCard from './ProductCard'

const PopularProducts = () => {
    return (
        <div className='mx-20'>
            <h1>Popular Products</h1>
            <div className="productCard flex gap-4 justify-baseline flex-wrap">
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg"
                    category="Snack & Munchies"
                    name="Haldiram's Sev Bhujia"
                    rating={4.3}
                    reviews={4}
                    price={21.6}
                    originalPrice={24}
                    offer="10%"
                    tag="Sale"
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg"
                    category="Bakery & Biscuits"
                    name="NutriChoice"
                    rating={4.3}
                    reviews={4}
                    price={24}
                    originalPrice={24}
                    offer=""
                    tag=""
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg"
                    category="Bakery & Biscuits"
                    name="Cadbury 5 Star Chocolate"
                    rating={4.3}
                    reviews={4}
                    price={35}
                    originalPrice={35}
                    offer=""
                    tag="Buy 1 Get $4.00 Off"
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-4.jpg"
                    category="Snack & Munchies"
                    name="Onion Flavour Potato"
                    rating={4.3}
                    reviews={4}
                    price={3}
                    originalPrice={5}
                    offer="Hot"
                    tag="40%"
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-5.jpg"
                    category="Instant Food"
                    name="Salted Instant Popcorn"
                    rating={4.3}
                    reviews={4}
                    price={11.7}
                    originalPrice={18}
                    offer=""
                    tag="35%"
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg"
                    category="Bakery & Biscuits"
                    name="NutriChoice"
                    rating={4.3}
                    reviews={4}
                    price={24}
                    originalPrice={24}
                    offer=""
                    tag=""
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg"
                    category="Snack & Munchies"
                    name="Haldiram's Sev Bhujia"
                    rating={4.3}
                    reviews={4}
                    price={21.6}
                    originalPrice={24}
                    offer="10%"
                    tag="Sale"
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-6.jpg"
                    category="Dairy,Bread & Eggs"
                    name="Blueberry Greek Yogurt"
                    rating={4.3}
                    reviews={4}
                    price={14.4}
                    originalPrice={24}
                    offer="40%"
                    tag=""
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-7.jpg"
                    category="Dairy,Bread & Eggs"
                    name="Britannia Cheese Slices"
                    rating={4.3}
                    reviews={4}
                    price={24}
                    originalPrice={24}
                    offer=""
                    tag=""
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-8.jpg"
                    category="Instant Food"
                    name="Kellogg's Original Cereals"
                    rating={4.3}
                    reviews={4}
                    price={29.75}
                    originalPrice={35}
                    offer="15%"
                    tag=""
                />
                 <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg"
                    category="Bakery & Biscuits"
                    name="NutriChoice"
                    rating={4.3}
                    reviews={4}
                    price={24}
                    originalPrice={24}
                    offer=""
                    tag=""
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-9.jpg"
                    category="Snack & Munchies"
                    name="Slurrp Millet Chocolate"
                    rating={4.3}
                    reviews={4}
                    price={14}
                    originalPrice={14}
                    offer=""
                    tag=""
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-10.jpg"
                    category="Dairy, Bread & Eggs"
                    name="Amul Butter - 500 g"
                    rating={4.3}
                    reviews={4}
                    price={13.5}
                    originalPrice={18}
                    offer="25"
                    tag=""
                />
                 <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg"
                    category="Bakery & Biscuits"
                    name="NutriChoice"
                    rating={4.3}
                    reviews={4}
                    price={24}
                    originalPrice={24}
                    offer=""
                    tag=""
                />
                <ProductCard
                    imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-9.jpg"
                    category="Snack & Munchies"
                    name="Slurrp Millet Chocolate"
                    rating={4.3}
                    reviews={4}
                    price={14}
                    originalPrice={14}
                    offer=""
                    tag=""
                />

            </div>
        </div>
    )
}

export default PopularProducts
