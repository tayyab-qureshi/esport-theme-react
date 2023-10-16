import React, { Component } from 'react'

export default class LeageOfLegendHome extends Component {
  render() {
    return (
        <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold py-10">League of Legends</h1>
        </div>

        <div className="flex gap-5 ">

          <div className="flex flex-col gap-5">
            <div className="w-[100%]">
            <img className="w-[100%]"
              src="/img/Olaf-League-of-Legends-Splash-Art-922x544.jpg"
            />
            </div>

            <div className="text-white flex flex-col gap-6">
              <h1 className="font-semibold text-4xl">
              Riot plans mid-scope updates for both Taliyah and Olaf
              </h1>
              <p className="font-light text-lg">
              League of Legends developers have talked about some possible updates to Taliyah and Olaf which should be released in a couple of months.
              </p>
            </div>
          </div>


          <div className="flex flex-col gap-5 text-white  w-4/12">

            <div className="flex gap-3">
            <div>
              <img
                src="/img/Doublelift-on-NA-servers-and-ping-issues-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-base font-medium">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>


            <div className="flex gap-3 mt-2">
            <div>
              <img
                src="/img/Best-season-12-mid-laners-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-base font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>

            <div className="flex gap-3">
            <div>
              <img
                src="/img/TSM-Not-in-playoffs-LCS-2022-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-base font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
             <div>
              <img
                src="/img/TSMFTXmain-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-base font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>


            <div className="flex gap-2 mt-2">
             <div>
              <img
                src="/img/Tryndamere-Barbarian-King-Skin-334x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-base font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>

          </div>
        </div>
            <hr className="h-[2px] bg-white mt-14" />
        </div>
    )
  }
}
