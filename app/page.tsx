import LandingPage from '../components/home/LandingSec'
import TrendingItems from '../components/home/TrendingItemSec'
import WhatWeOffer from '../components/home/WhatWeOfferSec'
import JoinUs from '../components/home/JoinUs'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <div className='h-fit overflow-x-hidden'>
      <LandingPage/>
      <TrendingItems/>
      <WhatWeOffer/>
      <JoinUs/>
      <Footer/>
    </div>
  )
}