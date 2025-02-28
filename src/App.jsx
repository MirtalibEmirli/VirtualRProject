import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSession from './components/FeatureSession'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'

const App = () => {
  return (
   <>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   <FeatureSession></FeatureSession>
   <Workflow></Workflow>
   <Pricing></Pricing>
   </>
  )
}

export default App