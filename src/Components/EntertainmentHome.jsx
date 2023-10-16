import React, { Component } from 'react'

export default class EntertainmentHome extends Component {
  render() {
    return (
        <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold py-10">Entertainment</h1>
        </div>

        <div className="flex gap-5 flex-col">

          <div className="flex  gap-5 ">
            <div className="w-6/12">
            <img className="w-[100%]"
              src="/img/GMHikaru-banned-after-watching-dr-disrespect-720x405.jpg"
            />
            </div>
            <div className="text-white flex flex-col gap-6 w-6/12">
              <h1 className="font-semibold text-4xl">
              GMHikaru receives Twitch ban after watching Dr Disrespect play chess
              </h1>
              <p className="font-light text-lg">
              Popular chess streamer Hikaru Nakamura has seemingly made an error in judgment, as he’s banned after watching Dr Disrespect.
              </p>
            </div>
          </div>


          <div className="flex  gap-5 text-white mt-5 ">

            <div className="flex gap-3 flex-col  w-4/12">
            <div>
              <img
                src="/img/Snoop-dogg-joins-call-of-duty-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div >
                <h1 className="text-lg leading-tight font-semibold">
                Is Snoop Dogg making his way into Call of Duty?
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                A new teaser posted by the Call of Duty account might hint towards rapper and entertainer Snoop Dogg joining.
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/Asmongold-criticizes-Dr-Disrespect-on-NFT-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Asmongold criticizes Dr Disrespect after he gives out NFT for his upcoming new game
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                After Dr Disrespect announced an NFT which links back to his game development company and new game, Asmongold wasn’t a fan.
                </p>
              </div>
            </div>


            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/Dr-Disrespect-to-launch-own-gaming-studio-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Dr Disrespect’s YouTube numbers are up, show impressive growth throughout 2021
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                It’s been two years since the infamous Twitch ban, but the Doc has seemingly found his stride on YouTube, and the numbers don’t lie. On Twitch, Dr Disrespect was one of the most-followed streamers. Twitch...
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 flex-col w-4/12">

             <div>
              <img
                src="/img/drdis-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Dr. Disrespect and Twitch resolve legal dispute surrounding ban
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                The saga between Dr. Disrespect and Twitch following his permanent ban is seemingly over as both parties have settled the legal dispute.
                </p>
              </div>
            </div>
          </div>
        </div>
            <hr className="h-[2px] bg-white mt-12" />
      </div>
    )
  }
}
