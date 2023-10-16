import React, { Component } from 'react'
import {AiOutlineDown} from 'react-icons/ai'


export default class NewsContent extends Component {
    state = {
        array: [

            {
                img: "/img/wireless-gaming-headsets-affiliates-345x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/LEC-Grand-Final-to-feature-live-audience-350x197.jpg",
                title: "LEC to bring back live audience for Spring Split Finals",
                description: "The LEC is bringing back the live audience for one series, as the competition moves closer to the Spring Split finals."
            },
            {
                img: "/img/Beste-Gaming-Headsets-350x197.jpg",
                title: "Gaming Gear – The 5 best Gaming Headsets",
                description: "*Disclaimer: All links to other online shops are affiliate links. esports.com receives a small commission for each purchase through those links. As a customer you do not have to pay additional fees or higher prices. Thank..."
            },
            {
                img: "/img/NAVI-CEO-about-war-in-Ukraine-350x197.jpg",
                title: "How CEO Yevhen Zolotarov charts a course for NAVI through war – “It’s surreal that this happens in ...",
                description: "We reached out to Natus Vincere's CEO Yevhan Zolotarov to talk about his organisation's struggles and challenges amidst the War in Ukraine."
            },
            {
                img: "/img/New-VALORANT-Agent-abilities-leaked-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Olaf-League-of-Legends-Splash-Art-334x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Best-Gaming-Keyboards-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/New-VALORANT-AGent-teaser-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/FPX-not-competing-at-vct-masters-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Best-Gaming-Mice-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Doublelift-on-NA-servers-and-ping-issues-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Best-season-12-mid-laners-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/TSM-Not-in-playoffs-LCS-2022-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/VCT-Masters-might-not-feature-russian-players-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Team-cangro.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/spunJ-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/yekindar-350x194.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/semmler-small2-330x197.png",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/EU-versus-NA-in-VALORANT-Featured-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/How-Twitch-became-the-biggest-streaming-platform-323x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/The-competitive-history-of-mirage-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Olaf-League-of-Legends-Splash-Art-334x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/S1mple-Dreamhack-Spring-2021-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/spunJ-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/spunJ-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/Team-Spirit-Relocating-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "./img/The-competitive-history-of-mirage-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/thumbnail_G2-MAD-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/TSM-Not-in-playoffs-LCS-2022-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/VCT-Masters-might-not-feature-russian-players-350x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/wireless-gaming-headsets-affiliates-345x197.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/yekindar-350x194.jpg",
                title: "Gaming Gear – The 5 best Wireless Headsets compared",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            }
        ]
    }
    render() {
        return (
            <div className='w-11/12 mx-auto'>
                <div>
                    <h1 className='font-bold text-3xl text-yellow-400 pt-20'>News</h1>
                    <ul className='flex font-medium text-base text-white gap-4 py-8 pl-5'>
                        <li className='text-yellow-400 underline'>All</li>
                        <li className='hover:text-yellow-400'>Special Deals</li>
                        <li className='hover:text-yellow-400'>League of Legends</li>
                        <li className='hover:text-yellow-400'>Cs:Go</li>
                        <li className='hover:text-yellow-400'>DOTA 2</li>
                        <li className='hover:text-yellow-400'>Call of Duty</li>
                        <li className='hover:text-yellow-400'>Pokemon</li>
                        <li className='hover:text-yellow-400'>Volarant</li>
                        <li className='hover:text-yellow-400'>Gaming</li>
                        <li className='hover:text-yellow-400'>Entertainment</li>
                        <li className='hover:text-yellow-400'>FIFA</li>
                    </ul>
                </div>
                <div className='flex flex-wrap gap-5'>
                    {this.state.array.map((items) => {
                        return (
                            <div className='flex flex-col w-[24%]'>
                                    <img src={items.img}/>
                                <h1 className='font-medium text-base text-white pt-5'>{items.title}</h1>
                                <p className='font-light text-white text-base pb-3'>{items.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex items-center justify-center p-16'>
                    <button className='bg-yellow-400 px-10 py-4 text-black text-lg flex items-end font-semibold justify-center'>Show More News<AiOutlineDown/></button>
                </div>
            </div>
        )
    }
}
