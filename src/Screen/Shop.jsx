import React, { Component } from 'react'
import StreamingShop from '../Components/StreamingShop'
import LogitechShop from '../Components/LogitechShop'
import OfficialESLShop from '../Components/OfficialESLShop'
import SpecialDealsSlider from '../Components/SpecialDealsSlider'
import FeaturedShop from '../Components/FeaturedShop'
import BannerShop from '../Components/BannerShop'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <StreamingShop/>
        <LogitechShop/>
        <OfficialESLShop/>
        <SpecialDealsSlider/>
        <FeaturedShop/>
        <BannerShop/>
      </div>
    )
  }
}
