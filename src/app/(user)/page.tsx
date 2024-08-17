import { Main } from '@/components/craft'
import HeroSimple from '@/components/blocks/Hero/HeroSimple'
import { getPageData } from '@/lib/data'
import React from 'react'

const Page = async () => {

  const data = await getPageData('page');
  return (
    <Main>
        <HeroSimple heroSimple={data[0].layout[0]}/>
    </Main>
  )
}

export default Page