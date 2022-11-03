import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <div className='nav'>
     
        <div className="red"><p className='bold'>W.</p></div>
        
        
          <div className="red">
          <ul className='navlist'>
            <li className="navitem">< a href="#">Home</a></li>
            <li className="navitem">< a href="#">New</a></li>
            <li className="navitem">< a href="#">Popular</a></li>
            <li className="navitem">< a href="#">Trending</a></li>
            <li className="navitem">< a href="#">Catagories</a></li>
        </ul>
          </div>
        
        </div>
    
  )
}

export default Nav