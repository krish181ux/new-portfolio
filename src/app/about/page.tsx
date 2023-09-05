import { Hero, HeroAbout, HeroProjects } from "@/components";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroAbout/>
      <div className='mt-12 padding-x padding-y
        max-width' id='discover'>
        <div className='home__text-container'>
            <h1 className='hero__title'>Experience & Education</h1>
            <br></br>
            <h2 className='hero__stitle'> UI/UX Developer, iAuto Analytics LLC, Atlanta, Georgia, USA </h2>
            <h3 className='hero__subtitle'> June 2020 - December 2021 & August 2022 - Present </h3>
            <br></br>
            <ul className='list-disc'>
                <li>Working on design and development of a full fledged web application.</li>
                <li> Using data oriented UX research techniques to improve the relevance of the content.</li>
                <li>Managing the Analytics of the website using Hubspot, Google Marketing Platform and Hotjar.</li>
                <li> Working to establish a new design system for the website.</li>
                <li> Worked on the UI/UX of the website, helped implement animations.</li>
                <li>Managed the HubSpot integration and helped with the analytics.</li>
                <li>Did qualitative and quantitative UX analysis to optimize the product with the help of available data.</li>
                <li>Implemented UX research studies to gain more domain knowledge to optimize the product with obtained data.</li>
                <li>Did affinity mapping to gain some valuable insights into the world of Car Sales.</li>
            </ul>
            <br></br>
            <h2 className='hero__stitle'> UX Developer Intern, Pluxbox, Hilversum, Netherlands </h2>
            <h3 className='hero__subtitle'> February 2022 - July 2022 (Internship)‍ </h3>
            <br></br>
            <ul className='list-disc'>
                <li>Worked on the UI/UX of a no-code development platform as a part of the research team.</li>
                <li>Implemented the use of research tools like Hotjar in tandem with Google Marketing Platform. </li>
                <li>Extensively used quantitative and qualitative UX research techniques to improve the product.</li>
                <li>Did user interviews of designers and developers to better understand the features that should be focused on.</li>
                <li>Implemented data oriented diary studies for existing users to better understand the product and evaluation with User 
                    Evaluation Questionnaire (UEQ) and System Usability Scale (SUS).</li>
                <li>Implemented the use of research tools like Hotjar in tandem with Google Marketing Platform. </li>
            </ul>
            <br></br>
            <h2 className='hero__stitle'> Masters in Human Computer Interaction and Design </h2>
            <h3 className='hero__subtitle'> EIT Digital Master School (2020 - 2022) </h3>
            <br></br>
            <h2 className='hero__stitle'> Masters in Interaction Technology </h2>
            <h3 className='hero__subtitle'> Exit Year (2021 - 2022) - EIT - University of Twente, Netherlands </h3>
            <h2 className='hero__stitle'> Masters in Digital Innovation </h2>
            <h3 className='hero__subtitle'> Entry Year (2020 - 2021) - EIT - Polytechnic University of Madrid, Spain </h3>
            <br></br>
            <h2 className='hero__stitle'> Bachelors in Computer Science & Engineering </h2>
            <h3 className='hero__subtitle'> Shiv Nadar University (2016 - 2020), India </h3>
        </div>
      </div>
    </main>
  )
}