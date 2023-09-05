import { Hero, HeroProjects } from "@/components";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroProjects/>
      <div className='mt-12 padding-x padding-y
        max-width' id='discover'>
        <div className='home__text-container'>
        {/* <Link href='/' className='flex
            justify-center items-center'>
                <Image
                    src='/logo.png'
                    alt='Krishna Logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link> */}

            <Link href='/crisis' className='hero__title'>
                Survive the Crisis - A Web Based Serious Game
            </Link>

            <Link href='/cash' className='hero__title'>
                CashPool - An expense sharing Android application
            </Link>

            <Link href='/ant' className='hero__title'>
                Automatic Note Taking Tool - An extensive Figma Prototype
            </Link>
            
        </div>
      </div>
    </main>
  )
}