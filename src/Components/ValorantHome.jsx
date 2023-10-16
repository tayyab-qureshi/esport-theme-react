import React, { Component } from 'react'

export default class ValorantHome extends Component {
  render() {
    return (
        <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold py-10">VALORANT</h1>
        </div>

        <div className="flex gap-5 flex-col">

          <div className="flex  gap-5 ">
            <div className="w-6/12">
            <img className="w-[100%]"
              src="/img/New-VALORANT-AGent-teaser-720x405.jpg"
            />
            </div>
            <div className="text-white flex flex-col gap-6 w-6/12">
              <h1 className="font-semibold text-4xl">
                VALORANT blog teases newest agent
              </h1>
              <p className="font-light text-lg">
                Headsets are an essential part of your Gaming Gear. Now if you
                also want to enjoy the comfort of wireless headsets there are
                plenty to choose from. Here are our top 5 recommendations.
              </p>
            </div>
          </div>


          <div className="flex  gap-5 text-white mt-5 ">

            <div className="flex gap-3 flex-col  w-4/12">
            <div>
              <img
                src="/img/FPX-not-competing-at-vct-masters-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div >
                <h1 className="text-lg leading-tight font-semibold">
                Team Liquid to replace FunPlus Phoenix at VCT Masters Reykjavik
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                What many people have feared turned into reality, as FunPlus Phoenix is unable to participate at VCT Masters Reykjavik due to the war in Ukraine.
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/VCT-Masters-might-not-feature-russian-players-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Russian VALORANT players likely can’t compete at VCT Masters
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                According to recent rumors, Russian players might not be able to participate during VCT Masters.
                </p>
              </div>
            </div>


            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/Cypher-VALORANT-removed-temporarily-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                VALORANT Bug party continues – Astra returns as Cypher breaks the game
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                VALORANT players are currently unable to play as Cypher due to a game-breaking bug. In the meantime, Astra returns to the field.
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 flex-col w-4/12">

             <div>
              <img
                src="/img/Rawkus-350x197.jpg"
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
