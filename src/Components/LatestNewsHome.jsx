import { Component } from "react";

export default class LatestNewsHome extends Component {
  render() {
    return (
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold py-10">Latest News</h1>
        </div>

        <div className="flex gap-5">

          <div className="flex flex-col gap-5 w-8/12">
            <div className="w-[100%]">
            <img className="w-[100%]"
              src="/img/wireless-gaming-headsets-affiliates-953x544.jpg"
            />
            </div>

            <div>
              <p className="text-sm bg-yellow-400 py-1 text-center font-semibold w-[60px] rounded">
                Gaming
              </p>
            </div>
            <div className="text-white flex flex-col gap-6">
              <h1 className="font-semibold text-4xl">
                Gaming Gear – The 5 best Wireless Headsets compared
              </h1>
              <p className="font-light text-lg">
                Headsets are an essential part of your Gaming Gear. Now if you
                also want to enjoy the comfort of wireless headsets there are
                plenty to choose from. Here are our top 5 recommendations.
              </p>
            </div>
          </div>


          <div className="flex flex-col gap-5 text-white  w-4/12">
            <div>
              <p className="text-sm bg-yellow-400 text-black py-1 text-center font-semibold w-[130px] rounded">
                League of Legends
              </p>
            </div>

            <div className="flex gap-3">
            <div>
              <img
                src="/img/LEC-Grand-Final-to-feature-live-audience-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg leading-tight font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base leading-tight font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm bg-yellow-400 text-center py-1 text-black font-semibold w-[60px] rounded">
                Gaming
              </p>
            </div>

            <div className="flex gap-3 mt-2">
            <div>
              <img
                src="/img/Beste-Gaming-Headsets-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg leading-tight font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base leading-tight font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>


            <div className="flex gap-2 mt-2">
              <div>
                <p className="text-sm text-center text-black bg-yellow-400 py-1 font-semibold w-[60px] rounded">
                  CS:GO
                </p>
              </div>
              <div>
                <p className="text-sm bg-yellow-400 py-1 text-center text-black font-semibold w-[60px] rounded">
                  DOTA2
                </p>
              </div>
              <div>
                <p className="text-sm bg-yellow-400 py-1 text-center text-black font-semibold w-[60px] rounded">
                  Gaming
                </p>
              </div>
            </div>

            <div className="flex gap-3">
            <div>
              <img
                src="/img/NAVI-CEO-about-war-in-Ukraine-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg leading-tight font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base leading-tight font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-center text-black bg-yellow-400 py-1 font-semibold w-[65px] rounded">
                Valorant
              </p>
            </div>
            <div className="flex gap-2 mt-2">

             <div>
              <img
                src="/img/New-VALORANT-Agent-abilities-leaked-350x197.jpg"
                alt=""
              />
              </div>
              <div className="w-8/12">
                <h1 className="text-lg leading-tight font-semibold">
                  LEC to bring back live audience for Spring Split Finals
                </h1>
                <p className="text-base leading-tight font-light">
                  The lec is bringing back the libe audience for one series as
                  the compitition...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] flex flex-col justify-around">
            <hr className="h-[2px] bg-white" />
            <hr className="h-[2px] bg-white" />
        </div>
      </div>
    );
  }
}