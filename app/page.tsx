import Hero from '@/exp-components/Hero'
import AboutPage from './about/page'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
      <Hero />
      <AboutPage />
    </div>
  )
}

export default page