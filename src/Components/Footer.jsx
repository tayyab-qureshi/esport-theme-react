import React, { Component } from 'react';
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaDiscord,FaTwitch,FaTiktok} from 'react-icons/fa';
import {BiArrowToTop} from 'react-icons/bi'
 
export default class Footer extends Component {
  render() {
    return (
      <div className='bg-[#1b1b1b] relative'>
         <div className='bg-yellow-400 py-2 px-12 text-lg font-bold flex justify-center items-center absolute -top-6 right-52'>
            <div>
            <BiArrowToTop/>
            </div>
            <div>
            <h1>ROKET JUMP</h1>
             </div>
              </div>
        
        <div className='w-11/12 mx-auto pt-20 flex gap-24'>
        <div>
            <ul className='flex text-white text-xl font-semibold gap-10'>
                <div>
                <li className='text-xl font-light'>Games</li>
                <li className='pt-5'>League of Legends</li>
                <li className='pt-5'>VALORANT</li>
                <li className='pt-5'>Call of Duty</li>
                <li className='pt-5'>Gaming</li>
                </div>
                <div className='pt-8'>
                <li className='pt-5'>CS:GO</li>
                <li className='pt-5'>DOTA 2</li>
                <li className='pt-5'>Pokemon</li>
                </div>
            </ul>
        </div>

        <div>
            <ul className='text-white text-xl font-semibold gap-10'>
                <li className='text-xl font-light'>Guides</li>
                <li className='pt-5'>League of Legends Guides</li>
                <li className='pt-5'>CS:GO Guides</li>
                <li className='pt-5'>Dota2 Guides</li>
                <li className='pt-5'>Call of Duty Guides</li>
                <li className='pt-5'>Pokemon Guides</li>
            </ul>
        </div>


        <div>
            <ul className='text-white text-xl font-semibold gap-10'>
                <li className='text-xl font-light'>News</li>
                <li className='pt-5'>League of Legends News</li>
                <li className='pt-5'>CS:GO News</li>
                <li className='pt-5'>Dota2 News</li>
                <li className='pt-5'>Call of Duty News</li>
                <li className='pt-5'>Pokemon News</li>
                <li className='pt-5'>Fifa News</li>
            </ul>
        </div>

        <div>
            <ul className='text-white text-xl font-semibold gap-10'>
                <li className='text-xl font-light'>Patchnotes</li>
                <li className='pt-5'>League of Legends Patchnotes</li>
                <li className='pt-5'>CS:GO Patchnotes</li>
                <li className='pt-5'>Dota2 Patchnotes</li>
                <li className='pt-5'>Call of Duty Patchnotes</li>
            </ul>
        </div>

        <div>
            <ul className='text-white text-xl font-semibold gap-10'>
                <li className='text-xl font-light'>More</li>
                <li className='pt-5'>Special Deals</li>
                <li className='pt-5'>Gaming News</li>
                <li className='pt-5'>Entertainment</li>
                <li className='pt-5'>Videos</li>
            </ul>
        </div>
        
        </div>
        <hr  className='h-[2px] bg-gray-500 mt-12'/>
        <div>
            <div className='w-11/12 mx-auto flex pt-10 gap-[500px]'>
                <div>
                <h1 className='text-white text-lg'>Follow Us</h1>
                <ul className='flex gap-5 text-white text-2xl pt-5'>
                    <li><FaFacebookF/></li>
                    <li><FaTwitter/></li>
                    <li><FaInstagram/></li>
                    <li><FaYoutube/></li>
                    <li><FaDiscord/></li>
                    <li><FaTwitch/></li>
                    <li><FaTiktok/></li>
                </ul>
            </div>
            <div>
                <h1 className='text-white text-lg'>Partner</h1>
                <div className='flex gap-5 pt-5'>
                    <div className='w-[100px] h-[80px]'><img src="/img/Uni-icon-klein-dunkelgrau.jpg" alt="" /></div>
                    <div className='w-[100px] h-[80px]'><img src="/img/ESL-icon-klein-dunkelgrau.jpg" alt="" /></div>
                </div>

            </div>
        </div>
        </div>

        <div className='bg-black text-white'>
            <div className='w-11/12 mx-auto py-10 flex justify-between'>
                <ul className='flex gap-5 text-base font-light'>
                    <li>Imprint</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Cookie Policy Settings</li>
                    <li>Contact</li>
                    <li>Editorial Staff</li>
                    <li>Terms and Conditions</li>
                </ul>
                <div>
                <h1 className='text-base font-light'>© 2023 Seven.One Entertainment Group GmbH</h1>
            </div>
            </div>
            
        </div>
      </div>
    )
  }
}
