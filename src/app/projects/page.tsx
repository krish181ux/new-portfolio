import { Hero, HeroProjects } from "@/components";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroProjects/>
      <div className='mt-12 padding-x padding-y
        max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
              Projects Page
          </h1>
          <p>
            Let us See what will happen now
          </p>
        </div>
      </div>
    </main>
  )
}