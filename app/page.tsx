import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import React from 'react'

const Page = () => {
  return (
    <main>
    <h1 className="text-2xl ">Popular Teachers</h1>
    <section className='home-section'>
      
      <CompanionCard
      id='123'
      name='Ajeeb Jonejo'
      topic='Linear Algebra'
      subject='math'
      duration={45}
      color='#FFDA6E'
      />

      <CompanionCard
      id='456'
      name='Zeeshan Rasool'
      topic='Logic Gates'
      subject='DLD'
      duration={50}
      color='#FFC8E4'
      />
      
      <CompanionCard
      id='789'
      name='Awais Rehmani'
      topic='Python'
      subject='Programming'
      duration={30}
      color='#BDE7FF'
      />

    </section>

    <section className='home-section'>
      <CompanionList/>
      <CTA/>

    </section>

    </main>
  )
}

export default Page