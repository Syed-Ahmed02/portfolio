import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Blog } from '@/components/LatestArticles'
import { Projects } from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Blog/>
      <Contact/>
    </div>
  )
}

export default page