import React from 'react'
import Layout from '../pages/Layout'

function About() {
    return (
        <Layout>
            <div className='h-[100%]  flex items-center justify-center bg-darkBlue px-20'>
                <div className='w-[50%]'>
                    <img src='../assets/jennifer.jpg' alt='My profile image' className='w-[400px] h-[400px] rounded-[50%]'/>
                </div>
                <div className='w-[50%]'>
                    <p>Hello, my name is <br /> <span className='text-[24px] font-bold text-skyBlue'>Jennifer Arabel Jude</span></p>
                    <p className='my-5'>I am an IT specialist dedicated to developing 
                    custom tech solutions tailored to unique business needs. 
                    My expertise spans custom web and mobile app development, 
                    ensuring engaging, efficient, and cross-platform functionality. 
                    I also offer cloud solutions architecture to help businesses 
                    leverage cloud efficiency and scalability, alongside providing 
                    data analytics and visualization to transform data into actionable 
                    insights. My work in cybersecurity consulting further ensures that 
                    all solutions are secure from emerging threats, helping clients 
                    achieve technological robustness in today's digital landscape.
                    </p>
                    <button>contact me</button>
                </div>
            </div>
        </Layout>
    )
}

export default About






