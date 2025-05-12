import React from 'react'
import '../Footer/footer.css'
import Footer_Middle from './Footer_Middle'
import Footer_bottom from './Footer_bottom'
import Above_Footer from './Above_Footer'
const Footer = () => {
  return (
    <div>
      <Above_Footer />
      <div className="footer bg-gray-400 px-20">
        <div className="item-list flex flex-wrap justify-between  py-5">
          <div className="Categories">
            <h3 className='text-2xl'>Categories</h3>
            <div className="list-menu flex justify-between">
            <ul>
              <li>Vegetables & Fruits</li>
              <li>Breakfast & instantfood</li>
              <li>Bakery & Biscuits</li>
              <li>Atta, rice & dal </li>
              <li>Sauces & spreads</li>
              <li>Organic & gourmet</li>
              <li>Baby care</li>
              <li>Cleaning essentials</li>
              <li>Personal care</li>
            </ul>
            <ul>
              <li>Dairy, bread & eggs   </li>
              <li>Cold drinks & juices</li>
              <li>Tea, coffee & drinks</li>
              <li>Masala, oil & more</li>
              <li>Chicken, meat & fish</li>
              <li>Paan corner</li>
              <li>Pharma & wellness</li>
              <li>Home & office</li>
              <li>Pet care</li>
            </ul>
            </div>
          </div>
          <div className="get-to-know-us">
            <h3>Get to Know Us</h3>
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Help</li>
              <li>Our Value</li>
            </ul>
          </div>
          <div className="for_consumer">
            <h3>For Consumers</h3>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Product Returns</li>
              <li>FAQ</li>
              <li>Shop Checkout</li>
            </ul>
          </div>
          <div className="become-a-shopkeep">
            <h3>Become a Shopper</h3>
            <ul>
              <li>Shopper Opportunties</li>
              <li>Become a Shopper</li>
              <li>Earnings</li>
              <li>Ideas & Guides</li>
              <li>New Retailers</li>
            </ul>
          </div>
          <div className="freshcartPrograms">
            <h3>Freshcart programs</h3>
            <ul>
              <li>Freshcart programs</li>
              <li>Gift Cards</li>
              <li>Promos & Coupons</li>
              <li>Freshcart Ads</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        
      <Footer_Middle />
      <Footer_bottom />
      </div>
    </div>
  )
}

export default Footer
