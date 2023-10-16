import React, { Component } from 'react'
import {LiaGreaterThanSolid} from 'react-icons/lia'

export default class StreamingShop extends Component {
    render() {
        return (
            <div className='w-11/12 mx-auto'>
                <div className='w-[100%] mt-5'>
                    <img src="/img/shopbanner-mit-text-1280x303.png" alt="" className='w-[100%]'/>
                </div>
                <div className='flex mt-10 gap-5'>
                    <div className='w-6/12'>
                        <h1 className='text-white text-4xl font-bold'>Thinking of streaming?</h1>
                        <h2 className='text-white text-3xl font-bold pt-16'>Say yes & get 50% off your cool looks for that at OWN3D!</h2>
                        <p className='text-white font-medium text-normal pt-6'>OWN3D is the #1 online shop for streamers and has the biggest selection of Stream Overlay Packages, alerts, emotes and more! All designs work right out of the box with your streaming software of choice. OBS Studio, Streamlabs or StreamElements. Be ready on any streaming platform like Twitch, YouTube, Trovo or Facebook. Get 50% off using the code “streaming”. Your viewers will love it.</p>
                        <div className='flex items-center gap-2 bg-yellow-400 text-lg font-semibold py-4 px-14 w-[fit-content] mt-8'>
                            <div>
                                <h1>Shop Now</h1>
                            </div>
                            <div><LiaGreaterThanSolid/></div>
                        </div>
                    </div>
                    <div className='w-6/12'>
                        <img src="/img/2022-04_OWN3Dtv_esports-banner_EN_710x400.png" alt="" className='w-[100%] pt-20' />
                    </div>
                </div>
                <hr className='h-[2px] mt-10'/>

            </div>
                
        )
    }
}
