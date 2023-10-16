import React, { Component } from 'react';
import LatestNewsHome from '../Components/LatestNewsHome';
import TopGamesHome from '../Components/TopGamesHome';
import LeageOfLegendHome from '../Components/LeageOfLegendHome';
import GamingHome from '../Components/GamingHome';
import CsGoHome from '../Components/CsGoHome';
import ValorantHome from '../Components/ValorantHome';
import Dota2Home from '../Components/Dota2Home';
import CallOfDutyHome from '../Components/CallOfDutyHome';
import EntertainmentHome from '../Components/EntertainmentHome';
import AllNewsHome from '../Components/AllNewsHome';
import FaqHome from '../Components/FaqHome';
import SpecialDealsSlider from '../Components/SpecialDealsSlider';

export default class Home extends Component {
  render() {
    return (
      <div>
        <LatestNewsHome/>
        <TopGamesHome/>
        <SpecialDealsSlider/>
        <LeageOfLegendHome/>
        <CsGoHome/>
        <ValorantHome/>
        <Dota2Home/>
        <CallOfDutyHome/>
        <GamingHome/>
        <EntertainmentHome/>
        <AllNewsHome/>
        <FaqHome/>
      </div>
    )
  }
}
