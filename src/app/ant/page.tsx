import { Hero, HeroProjects } from "@/components";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroAnt/>
      <div className='mt-12 padding-x padding-y
        max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
              Blog Page
          </h1>
          <p>
            We will add some op-ed pieces here
          </p>
        </div>
      </div>
    </main>
  )
}