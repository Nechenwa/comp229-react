import React from 'react'
import Layout from '../pages/Layout'

function Projects() {
    const projects = [
        {
            title: "Calculator App",
            img: "../assets/calculator.png",
            link: "https://youtu.be/cVwabg7EihQ?si=f08PxVsYV9AD8YBD",
            description: "This is a calcuator app which I developed using C# Windows Form.",
        },
        {
            title: "Bug Smasher",
            img: "../assets/smasher.png",
            link: "../../../bug-smasher/bug-smasher/assignment3.html",
            description: "This is a bug smasher game which I developed using JavaScript, HTML, & CSS",
        },
    ]
    return (
        <Layout>
            <div className='h-[100%] bg-darkBlue'>
                <h1>My Projects</h1>
                <div>
                    {projects.map((project, index) => (
                        <div key={index}>
                            <img src={project.img} alt={project.title} />
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <a href={project.link} target='_blank'>
                                <button>View Project <span>&rarr;</span></button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Projects
