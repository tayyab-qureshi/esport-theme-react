import React, { Component } from 'react'
import {AiOutlineDown} from 'react-icons/ai'


export default class VideosContent extends Component {
    state = {
        array: [
    
            {
                img: "/img/spunJ-350x197.jpg",
                title: "PGL Major Interview with SPUNJ- “People on Reddit do a Great Job”",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/yekindar-350x194.jpg",
                title: "PGL Major Interview with YEKINDAR- “I don’t push anyone to play the same like me”",
                description: "The LEC is bringing back the live audience for one series, as the competition moves closer to the Spring Split finals."
            },
            {
                img: "/img/semmler-small2-330x197.png",
                title: "PGL Major Interview with Semmler – “Its not fun to travel anymore”",
                description: "We spoke to PGL host and caster Auguste 'Semmler' Massonnat about the PGL major in Stockholm and his thoughts about post-pandemic csgo scene."
            },
            {
                img: "/img/EU-versus-NA-in-VALORANT-Featured-350x197.jpg",
                title: "VIDEO – A brief timeline of EU versus NA in VALORANT",
                description: "We reached out to Natus Vincere's CEO Yevhan Zolotarov to talk about his organisation's struggles and challenges amidst the War in Ukraine."
            },
            {
                img: "/img/How-Twitch-became-the-biggest-streaming-platform-323x197.jpg",
                title: "VIDEO: 3 Of the biggest scandals on twitch ever",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/The-competitive-history-of-mirage-350x197.jpg",
                title: "CS:GO – The competitive history of Mirage",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/How-VALORANT-is-taking-over-the-competitive-FPS-scene-350x197.jpg",
                title: "VIDEO: How VALORANT is taking over the competitive FPS scene",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            },
            {
                img: "/img/How-100-Thieves-became-one-of-the-best-teams-in-the-LCS-350x197.jpg",
                title: "VIDEO: How 100 Thieves became one of the best teams in the LCS",
                description: "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are"
            }
        ]
    }
    render() {
        return (
            <div className='w-11/12 mx-auto'>
                <div>
                    <h1 className='font-bold text-4xl text-yellow-400 pt-20'>Latest videos</h1>
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
                                    <img src={items.img} className='h-[220px]'/>
                                <h1 className='font-medium text-base text-white pt-5'>{items.title}</h1>
                                <p className='font-light text-white text-base pb-3'>{items.description}</p>
                            </div>
                        )
                    })}
                </div>
          
                <div className='flex items-center justify-center p-10'>
                        <button className='bg-yellow-400 px-10 py-4 text-black text-lg flex items-end font-semibold justify-center'>Show More News<AiOutlineDown/></button>
                    </div>
              
            </div>
       
        )
      }
}
