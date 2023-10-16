import React, { Component } from 'react'

export default class FeaturedShop extends Component {
  render() {
    return (
      <div className='w-11/12 mx-auto'>
        <h1 className='text-white text-3xl font-bold py-8'>Featured</h1>
        <div>
            <img src="/img/fifa.jpg" alt="" />
        </div>
        <h2 className='text-white text-xl font-bold pt-3'>Fifa</h2>
        <hr className='h-[2px] mt-10'/>
        
      </div>
    )
  }
}
