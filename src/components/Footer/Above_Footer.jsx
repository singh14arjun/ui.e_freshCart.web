import React from 'react'

const Above_Footer = () => {
    return (
        <>
            <div className="policy flex gap-5 justify-between  mx-20 my-10">
                <div className="instant-delivery">
                    <i class="fa-regular fa-clock"></i>
                    <h2>10 minute grocery now</h2>
                    <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                </div>
                <div className="best-price">
                    <i class="fa-solid fa-gift"></i>
                    <h2>Best Prices & Offers</h2>
                    <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
                </div>
                <div className="wide-assortment">
                    <i class="fa-solid fa-box"></i>
                    <h2>Wide Assortment</h2>
                    <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
                </div>
                <div className="easy-return">
                    <i class="fa-solid fa-repeat"></i>
                    <h2>Easy Returns</h2>
                    <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy</p>
                </div>
            </div>
        </>
    )
}

export default Above_Footer
