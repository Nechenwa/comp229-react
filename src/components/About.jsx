import React from 'react'
import Layout from '../pages/Layout'

function About() {
    return (
        <Layout>
            <div>
                <div>
                    <img src='../assets/jennifer.jpg' alt='My profile image' />
                </div>
                <div>
                    <p>Hello, my name is <br /> <span>Jennifer Arabel Jude</span></p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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
