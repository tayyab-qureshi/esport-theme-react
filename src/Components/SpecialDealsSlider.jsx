import React, { Component } from 'react'

export default class SpecialDealsSlider extends Component {

    state = {
        array: [
            {
                img: '/img/wireless-gaming-headsets-affiliates-345x197.jpg',
                title: 'Gaming Gear – The 5 best Wireless Headsets compared',
                details: 'Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here...'
            },
            {
                img: "./img/Beste-Gaming-Headsets-350x197.jpg",
                title: "Gaming Gear – The 5 best Gaming Headsets",
                details:"*Disclaimer: All links to other online shops are affiliate links. esports.com receives a small commission for each purchase through those links. As a...",
            },
            {
                img: '/img/Best-Gaming-Keyboards-350x197.jpg',
                title: 'Gaming Gear – The 5 best Gaming Keyboards',
                details: `Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!`
            },
            {
                img: '/img/Best-Gaming-Mice-350x197.jpg',
                title: 'Gaming Gear – The 5 best gaming mice',
                details: 'Looking for a new gaming mouse but unsure where to look? Let’s take a look at some of the top picks out there!'
            },
            {
                img: '/img/Header_Gaming-Desks-below-150-EN-350x197.jpg',
                title: 'Gaming Gear – The 5 best Gaming Desks for your setup',
                details: 'Do you need a Gaming Desk? We think that you should grab one! Here is everything you need to know about their advantages and the best...'
            },
            {
                img: '/img/best-SSDs-350x197.jpg',
                title: 'Gaming Gear – The 5 best SSDs for Gaming',
                details: 'Which SSDs are the most fitting for Gamers? Here are the Top 5 for every price range and specifications you require.'
            }
        ]
    }

    render() {
        return (
            <section className=' flex w-11/12 flex-col mx-auto pt-10'>
                <div className='flex justify-between'>
                    <div>
                <h1 className=" text-4xl font-bold text-white">
                    Special Deals
                </h1>
                </div>
                <div className='flex gap-2 items-center'>
                    <h2 className='text-white'>Contains sponsored Content</h2>
                    <p className='bg-yellow-400 px-2 font-bold'>AD</p>
                </div>
                </div>

                <div className='flex overflow-x-scroll overflow-hidden SpecialCard gap-5 pt-10'>
                    {this.state.array.map((items,) => {
                        return (
                            <div>
                                <div className='w-[16.5rem]'>
                                <img src={items.img} alt={items.title} className='w-[100%]'/>
                                </div>
                                <h1 className="font-medium text-base text-white pt-4">{items.title}</h1>
                                <p className="font-light text-normal text-white leading-tight pt-2">{items.details}</p>
                            </div>
                        );
                    })}
                </div>
                <hr className='h-[2px] mt-12 bg-white' />
            </section>
        )
    }
}
