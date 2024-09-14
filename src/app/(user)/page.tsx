import { Main } from '@/components/craft'
import HeroSimple from '@/components/blocks/Hero/HeroSimple'
import { getPageData } from '@/lib/data'
import React from 'react'
import { MagicCard } from '@/components/magicui/magic-card'

const Page = async () => {

  const data = await getPageData('page') as any;
  return (
    <Main>
        <HeroSimple heroSimple={data[0].layout[0]}/>
        <MagicCard>

          twatwadwad
        </MagicCard>
    </Main>
  )
}

export default Page