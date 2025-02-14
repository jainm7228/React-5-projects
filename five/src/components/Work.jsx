import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from "../assets/data.json"

const Work = () => {
  return (
    <div id='work'>
        <h2>Work</h2>
        <section>
            <article>
               <Carousel 
               showArrows = {false}
               showIndicators={false}
               showThumbs={false}
               infiniteLoop={true}
               showStatus={false}
               interval={2000}
               autoPlay={true}
               >
                {
                    data.projects.map(i=>(
                        <div key={i.title} className='workItem'>
                            <img src={i.imgSrc} alt="i.title" />
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <a href={i.url} target="_blank" >View Project</a>
                            </aside>
                        </div>
                    ))
                }
               </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work