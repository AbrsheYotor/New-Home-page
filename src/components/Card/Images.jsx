import React from 'react'
import './images.css'
import Web from './web.jpg'
const Images = () => {
  return (
    <div className='images'>
      <div className="left">
      <div className="im1">
     <img  className=" web" src={Web}  alt="hello"/>
      </div>
      <div className="im2">
        <div className="pp">
        <h1 className='hh1'>The Bright Feature of  Web 3?</h1>
        </div>
      <div className="pandb">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eaque ex dolorum molestiae facere. Minus quod quae illum 
          placeat quisquam.Minus quod quae illum 
          placeat quisquam.Minus quod quae illum 
          placeat quisquam</p>
          
          <button className='but'>READ MORE</button>
        </div>
        
      </div>
      </div>
    
      <div className="right">
      <h1 className='h1'>News</h1>
      <div className="left_content">
      <h3>Hydrogen vs Electic Car</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eaque ex dolorum molestiae facere.</p>
      </div>
      <div className="left_content">
        <h3>Hydrogen vs Electic Car</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eaque ex dolorum molestiae facere.</p>
      </div>
      <div className="left_content">
      <h3>Hydrogen vs Electic Car</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eaque ex dolorum molestiae facere.</p>
      </div>
      </div>
      
    </div>
  )
}

export default Images