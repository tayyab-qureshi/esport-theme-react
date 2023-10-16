import React, { Component } from 'react'

export default class BannerShop extends Component {
  render() {
    return (
      <div className='w-11/12 mx-auto pt-10'>
        <div className='BannerShop h-auto text-black px-4 py-12'>

          <div className='bg-[#FFFFFF9E]  flex flex-col items-center'>
            <h1 className='text-4xl text-black font-semibold pt-5'>esports.com Shop - Everything you need for esports and Gaming</h1>
            <div>
            <button className='z-10 bg-yellow-400 px-14 py-4 text-lg font-bold mt-10'>
              Shop Homepage
            </button>
            </div>

            <p className='px-32 pt-10'>Are you burning for esports and gaming? Are you looking for merchandise, fan articles and clothing for the games you play?
              Then you should take a peek into our esports.com store. Here you can find everything your heart desires. Regardless if it is merchandise for your favorite games or the best hardware.
              With our shop you can find the latest gaming products with the best prices at certified online retailers.
              Controllers, keyboards, gaming mice and other peripherals from top brands like Razer, Logitech, Roccat, SteelSeries and more are represented here.
              You can also find monitors from LG and Samsung as well as laptops and desktops with graphics cards and processors from Intel, AMD and Nvidia in our store.
              Whether you play Fifa, Call of Duty, League of Legends, Fortnite, CS:GO or Valorant, you are sure to find something for you in the esports.com shop.</p>

            <p className='place-self-start underline text-[red] px-32 text-lg pt-5'>learn more</p>
          </div>

        </div>
        <p className='text-gray-400 px-32 pt-20 pb-10'>Contains sponsored content</p>
      </div>
    )
  }
}
