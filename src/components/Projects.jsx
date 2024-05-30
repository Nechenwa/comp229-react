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
            <div className='w-[100%] h-[100%] bg-darkBlue text-center flex flex-col justify-center items-center px-32'>
                <h1 className='text-[24px] font-bold text-skyBlue'>My Projects</h1>
                <div className='w-full flex justify-between items-center'>
                    {projects.map((project, index) => (
                        <div key={index} className='project-shadow-div w-[30%] rounded-lg'>
                            <img src={project.img} alt={project.title} className='w-[100%] h-[250px]'/>
                            <h1 className='text-[20px] font-bold text-skyBlue'>{project.title}</h1>
                            <p className='w-full'>{project.description}</p>
                            <a href={project.link} target='_blank'>
                                <button className='w-[120px] mt-5 mb-2'>View Project <span>&rarr;</span></button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Projects
