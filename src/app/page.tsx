import Head from 'next/head'
import Image from 'next/image'

import { Hero } from '@/components'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero/>
    </main>
  )
}
