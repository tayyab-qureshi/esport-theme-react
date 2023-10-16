import React, { Component } from 'react'

export default class CallOfDutyHome extends Component {
  render() {
    return (
        <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold py-10">Call of Duty</h1>
        </div>

        <div className="flex gap-5 flex-col">

          <div className="flex  gap-5 ">
            <div className="w-6/12">
            <img className="w-[100%]"
              src="/img/Secret-Vault-Warzone-Rebirth-Island-720x405.jpg"
            />
            </div>
            <div className="text-white flex flex-col gap-6 w-6/12">
              <h1 className="font-semibold text-4xl">
              Warzone Player finds loadout and cash in secret vault on Rebirth Island
              </h1>
              <p className="font-light text-lg">
              Like usual the newest Warzone update has some surprises in store and players have found a secret vault this time around.
              </p>
            </div>
          </div>


          <div className="flex  gap-5 text-white mt-5 ">

            <div className="flex gap-3 flex-col  w-4/12">
            <div>
              <img
                src="/img/Warzone-season-2-reloaded-merges-gamemodes-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div >
                <h1 className="text-lg leading-tight font-semibold">
                Warzone Season 2 reloaded merges Vanguard Royale and Battle Royale
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                The Warzone developers have shared some updates on what we can expect in Season 2 reloaded, including merging Vanguard Royale and regular Battle Royale.
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/mp5-loadout-rebirth-island-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Warzone Pro FaZe.Booya shows off MP5 loadout for Rebirth Island
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                FaZe's Call of Duty Pro Booya shows us his newest MP5 Loadout for Rebirth Island in his recent YouTube video. Check it out!
                </p>
              </div>
            </div>


            <div className="flex gap-3 flex-col w-4/12">
            <div>
              <img
                src="/img/Snoop-dogg-joins-call-of-duty-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Is Snoop Dogg making his way into Call of Duty?
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                A new teaser posted by the Call of Duty account might hint towards rapper and entertainer Snoop Dogg joining.
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 flex-col w-4/12">

             <div>
              <img
                src="/img/warzone-pacific-season-2-reloaded-350x197.jpg"
                alt="" className='w-[100%]'
              />
              </div>
              <div>
                <h1 className="text-lg leading-tight font-semibold">
                Warzone Pacific Season 2 Reloaded – What we can expect from the next update
                </h1>
                <p className="text-base leading-tight font-normal mt-2">
                The Reloaded patch is coming soon to Warzone Pacific's Season 2. Here is what we can expect from the update.
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
