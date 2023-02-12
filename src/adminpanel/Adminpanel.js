import React from 'react'
import Navigation from './navbar/adminNavbar'
import Additem from './AddItems/Additem'
import Products from '../components/cart/product'

const Adminpanel = () => {
  return (
    <div>
        <Navigation/>
        <section className="vh-100" style={{backgroundColor: '#e2d5de'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '15px'}}>
                <div className="card-body p-5">
                    <h2>Shop items</h2>
                  <ul className="list-group mb-0">
                    <li><Products/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Adminpanel