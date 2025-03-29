import React from 'react'

import MainPageHero from './MainPageHero';
import MainPageForum from './MainPageForum';
import MainPageContact from './MainPageContact';

export const MainPage = () => {
  return (
    <div>
      <MainPageHero />
      <MainPageForum />
      <MainPageContact />
    </div>
  )
}

export default MainPage;