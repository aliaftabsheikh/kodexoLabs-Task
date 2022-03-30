import React from 'react'
import Sky from '../../assets/sky-diving.jpeg';
import heart from '../../assets/heart-fill.svg'
import './Home.scss'

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-content">

        <div className="app__home-card">

      <div className="app__home-img">
        <img src={Sky} alt="" />
        <div className="app__home-heart">
          <img src={heart} alt="" />
        </div>
      </div>
      
      <div className="app__home-details">
      <p>2 BR | 2.5 Bath | 1500 Sq Ft</p>
      </div>
      <div className="app__home-price">
        <p>$3,750,000</p>
      </div>
      <div className="app__home-address">
        <p>1839 Berkely Way, Folsom, CA</p>
      </div>
      <div className="app__home-list_date">
        <p>Listed: 12/13/20</p>
      </div>
    </div>

    </div>
      </div>
  )
}

export default Home