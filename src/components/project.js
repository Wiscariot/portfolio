import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import icon from './imgs/openIcon.png'

export default function Component(props) {
    const filepath = `./imgs/${props.project.imgSrc}`
    AOS.init()

    const openLink = () => window.open(props.project.link);
    

    return(
       <div 
        className="project"
        data-aos="slide-right"
        >
        <div key={props.project.name} className="project-table">
            <div className="row">
               <div class="img-cell">
                <img 
                    alt={`Project ${props.project.name}`}
                    src={require(`${filepath}`)} 
                    className="project-img"
                />
               </div>
               
                <div className="project-text">
                    <h3>{`< ${props.project.name} />`}</h3>
                        <p>{`'${props.project.simpleDesc}'`}</p>
                        
                        <p>{props.project.description}</p>
                </div>    
                <div className="btn-cell">
                    <button target="_blank" onClick={openLink}>
                        <img className="icon" src={icon}/>
                    </button>
                </div>
            </div>
            
            <div className="tech-row">
            <p className="tech-cell">Technologies:</p> 
            {props.project.technologies.map(tech => <p className="tech-cell">#{tech}</p>)}
            </div>
        </div>
       </div> 
    )
}

