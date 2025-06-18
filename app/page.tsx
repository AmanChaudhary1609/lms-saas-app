import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular companions</h1>
          <section className='home-section'>
            
            <CompanionCard
            id="123"
            name="Countsy the Number Wizard"
            topic=" Neural Network Of the Brain"
            subject= "science"
            duration={45}
            color="#ffda6e"
            />
            <CompanionCard
            id="456"
            name="Countsy the Number Wizard"
            topic=" Neural Network Of the Brain"
            subject= "science"
            duration={45}
            color="#ffda6e"
            />
            <CompanionCard
            id="789"
            name="Countsy the Number Wizard"
            topic=" Neural Network Of the Brain"
            subject= "science"
            duration={45}
            color="#ffda6e"
            />
            </section>
            <section className='home-section'>
            <CompanionsList
            title="Recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
            </section>
    </main>
  )
}

export default Page