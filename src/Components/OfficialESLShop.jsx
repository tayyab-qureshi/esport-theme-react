import React, { Component } from 'react'
import {LiaGreaterThanSolid} from 'react-icons/lia'


export default class OfficialESLShop extends Component {
  render() {
    return (
        <div className='w-11/12 mx-auto'>
        <div className='flex mt-10 gap-5'>
            <div className='w-6/12'>
                <h1 className='text-white text-4xl font-bold'>Official ESL Shop</h1>
                
                <p className='text-white font-medium text-normal pt-16'>The Logitech G502 HERO is a choice made by many professional esports players and, which is nice for more casual gamers, sits at a very affordable price point. It has a wide DPI range and features 11 customizable buttons, which is a pretty high amount, offering a lot of versatility. Furthermore it’s possible to tweak the weight of the mouse in 3.6 grams intervals, as you’re able to change it to your liking.</p>
                <div className='flex items-center gap-2 bg-yellow-400 text-lg font-semibold py-4 px-14 w-[fit-content] mt-8'>
                    <div>
                        <h1>Shop Now</h1>
                    </div>
                    <div><LiaGreaterThanSolid/></div>
                </div>
            </div>
            <div className='w-6/12'>
                <img src="/img/ESL-FACEIT-merge-under-Saudi-Savvy-Group.jpg" alt="" className='w-[100%] pt-20' />
            </div>
        </div>
        <hr className='h-[2px] mt-10'/>

    </div>
    )
  }
}
