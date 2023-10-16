import React, { Component } from 'react'

export default class GamingHome extends Component {
  render() {
    return (
        <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold py-10">Latest News</h1>
        </div>

        <div className="flex gap-5 ">

          


          <div className="flex flex-col gap-5 text-white  w-4/12">

            <div className="flex gap-3">
            <div>
              <img
                src="/img/Best-Gaming-Mice-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <div>
                <h1 className="text-lg font-semibold leading-tight">
                Gaming Gear – The 5 best Gaming Headsets
                </h1>
                <p className="text-base font-light leading-tight">
                *Disclaimer: All links to other online shops are affiliate links. esports.com receives a small commission for each...
                </p>
                </div>
              </div>
            </div>


            <div className="flex gap-3 mt-1">
            <div>
              <img
                src="/img/Activision-Blizzard-lay-off-50-people-restructure-live-events-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg font-semibold leading-tight">
                New lawsuit for Activision Blizzard as female employee alleges sexual harassment
                </h1>
                <p className="text-base font-light leading-tight">
                Things seemingly keep getting worse for Activision Blizzard, as another employee has now sued them for...
                </p>
              </div>
            </div>


            <div className="flex gap-3 mt-1">
            <div>
              <img
                src="/img/GenShin-Impact-Guide-to-Freedom-How-To-Get-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg font-semibold leading-tight">
                Getting Guide to Freedom in Genshin Impact
                </h1>
                <p className="text-base font-light leading-tight">
                Looking to level up your characters and in need of Guide of Freedom? Let’s take a look at what needs to...
                </p>
              </div>
            </div>


            <div className="flex gap-3 mt-1">
             <div>
              <img
                src="/img/New-Witcher-game-in-development-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg font-semibold leading-tight">
                CD Projekt Red announces new Witcher game is being developed
                </h1>
                <p className="text-base font-light leading-tight">
                CD Projekt Red has announced that they’re working on a new game in the Witcher series, entering a new...
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-1">
             <div>
              <img
                src="/img/How-Twitch-became-the-biggest-streaming-platform-323x197.jpg"
                alt="" className='w-[342px]'
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg font-semibold leading-tight">
                History of Twitch – How Twitch became the most popular streaming platform
                </h1>
                <p className="text-base font-light leading-tight">
                Twitch provides an easy to access but equally easy to start on platform for anyone that wants to see or...
                </p>
              </div>
            </div>



          </div>

          <div className="flex flex-col gap-5  w-8/12">
            <div className="w-[100%]">
            <img className="w-[100%]"
              src="/img/Best-Gaming-Keyboards-967x544.jpg"
            />
            </div>
            <div className="text-white flex flex-col gap-6 ">
            
              <h1 className="font-semibold text-4xl">
                Gaming Gear – The 5 best Wireless Headsets compared
              </h1>
              
              
              <p className="font-light text-lg">
                Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!
              </p>
              
            </div>
          </div>


        </div>
            <hr className="h-[2px] bg-white mt-14" />
        </div>
    )
  }
}
