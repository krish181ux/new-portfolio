import Head from 'next/head'
import Image from 'next/image'

import { CustomFilter, Hero, SearchBar, SkillCard } from '@/components'
import { mainSkills } from '@/constants'

export default function Home() {
  //const allSkills = JSON.parse(mainSkills);
  return (
    <main className='overflow-hidden'>
      <Hero/>

      <div className='mt-12 padding-x padding-y
      max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
              Skill Catalogue
          </h1>
          <p>
            A list of things that I can do
          </p>
        </div>
      {/* <div className='home__filters'>
        <SearchBar />
        <div className='home__filter-container'>
          <CustomFilter title='t1'/>
          <CustomFilter title='t2'/> 
        </div>
      </div> */}
      <div className='home__cars-wrapper'>
        {mainSkills.map((item) => (
          <SkillCard skill={item} />
        ))}
      </div>
      </div>
    </main>
  )
}
