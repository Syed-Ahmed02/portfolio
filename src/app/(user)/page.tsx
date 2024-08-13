import { Main } from '@/components/craft'
import HeroSimple from '@/components/sections/HeroSimple'
import { getPageData } from '@/lib/data'
import React from 'react'

const Page = async () => {

  const data = await getPageData('page');
  console.log(data)
  console.log(data[0].layout[0].richText)
  return (
    <Main className='min-h-screen'>
        <HeroSimple heroSimple={data[0].layout[0]}/>
    </Main>
  )
}

export default Page