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
                    <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptates modi, ipsum harum eius eaque illo sit possimus
                        illum quisquam fugiat, tenetur dolorum ducimus doloribus
                        quo molestias? Architecto saepe ducimus aliquid dignissimos
                        cum? Ut ea dicta, ab culpa totam facilis soluta excepturi
                        consectetur fuga omnis et sunt harum vel tenetur quod.
                        Eos error distinctio id nobis nulla hic accusamus
                        corrupti soluta, velit, aliquam praesentium veniam.
                    </p>
                    <button>contact me</button>
                </div>
            </div>
        </Layout>
    )
}

export default About






