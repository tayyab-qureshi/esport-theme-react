import React, { Component } from 'react'

export default class TopGamesHome extends Component {
    state = {
        array: [
            {
                image: "/img/lol.jpg",
                title: "League of Legends"
            },
            {
                image: "/img/csgo.jpg",
                title: "CS:GO"
            },
            {
                image: "/img/valorant.jpg",
                title: "VALORANT"
            },
            {
                image: "/img/dota.jpg",
                title: "DOTA 2"
            },
            {
                image: "/img/cod.jpg",
                title: "Call of Duty"
            },
            {
                image: "/img/Pokemon.jpg",
                title: "Pokémon"
            },
            {
                image: "/img/gaming_en-mittig-1.jpg",
                title: "Everything Gaming and more..."
            }
        ]
    }
  render() {
    return (
      <div className='w-11/12 mx-auto'>
        <h1 className='text-5xl text-yellow-400 font-semibold pb-12'>Top games</h1>
        <div className='flex gap-5'>
        {this.state.array.map((ele)=>{
            return(
                <div className='w-[148px] h-[215px] '>
                <div>
                    <img src={ele.image} alt="" className='w-[145px] h-[215px]'/>
                </div>
                <div className='w-[160px]'>
                <h1 className='text-white font-semibold text-lg pt-5'>{ele.title}</h1>
                </div>
                </div>
            )
        })}
        </div>
        <hr className='h-[3px] bg-white mt-28'/>
      </div>
    )
  }
}
