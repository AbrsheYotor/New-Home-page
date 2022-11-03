import React from 'react'
import'./bottom.css'
import Game from './game.jpg'
import Retro from './retro.jpg'
import Thir from './thir.jpg'
const Bottom = () => {
  return (
    <div className='bottom'>
        <div className="content">
        <div className="image_content">
            <img className='ima' src={Game} alt="yeah" />
        </div>
        <div className="image_content">
            <h1 className='pad'>01</h1>
            <h4>Reviving Retro PCs</h4>
            <p className='para'><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </small></p>
            </div>
            </div>
            
            <div className="content">
        <div className="image_content">
            <img className='ima' src={Retro} alt="yeah" />
        </div>
        <div className="image_content">
            <h1 className='pad'>02</h1>
            <h4>Reviving Retro PCs</h4>
            <p className='para'><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </small></p>
            </div>
            </div>
            <div className="content">
        <div className="image_content">
            <img className='ima' src={Thir} alt="yeah" />
        </div>
        <div className="image_content">
            <h1 className='pad'>03</h1>
            <h4>Reviving Retro PCs</h4>
            <p className='para'><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </small></p>
            </div>
            </div>
            
        
        
    </div>
  )
}

export default Bottom