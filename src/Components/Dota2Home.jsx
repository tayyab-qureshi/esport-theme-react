import React, { Component } from 'react'

export default class Dota2Home extends Component {
  render() {
    return (
        <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold py-10">DOTA 2</h1>
        </div>

        <div className="flex gap-5 flex-col">

          <div className="flex  gap-5 ">
            <div className="w-6/12">
            <img className="w-[100%]"
              src="/img/Arlington-Major-announced-720x405.jpg"
            />
            </div>
            <div className="text-white flex flex-col gap-6 w-6/12">
              <h1 className="font-semibold text-4xl">
              PGL announces $500.000 Dota 2 Texas Major
              </h1>
              <p className="font-light text-lg">
              A new Dota 2 Major is coming to the United States, says PGL, featuring a $500.000 prize pool.
              </p>
            </div>
          </div>


          <div className="flex  gap-5 text-white mt-5 ">

            <div className="flex gap-3 flex-col  w-4/12">
            <div>
              <img
                src="/img/Sea-DPC-banned-accounts-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div >
                <h1 className="text-lg leading-tight font-semibold">
                After investigation in SEA DPC Qualifier: 10 players, including VtFaded, banned from Valve events
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                Things have taken a big turn following the SEA DPC Open Qualifier, as ten players out of Team Orca and Apex have been banned from Valve events.
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/Hellraisers-suspend-operations-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Hellraisers decide to suspend operations during war in Ukraine
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                Esports organization Hellraisers has released a statement saying they’ll be suspending operations for the duration of the current war in Ukraine.
                </p>
              </div>
            </div>


            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/Gamers-Galaxy-Dota-2-Virtus-Pro-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Virtus.Pro claims to be threatened with disqualification at Gamers Galaxy Dota 2 Invitational
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                In the wake of current events, Virtus.Pro claims to be threatened with disqualification at the Gamers Galaxy Dota 2 Invitational Series.
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 flex-col w-4/12">

             <div>
              <img
                src="/img/FMryM1aWYAMRt7S-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Rawkus is no longer coaching Sentinels
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                Rawkus took to Twitter last night to announce he’s no longer coaching Sentinels.  The announcement came immediately after Sentinels lost the first map in their NA VCT Challengers One matchup against OpTic 2-1...
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
