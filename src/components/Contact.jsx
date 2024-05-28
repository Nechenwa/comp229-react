import React from 'react'
import Layout from '../pages/Layout'

function Contact() {
    const socials = [
        {
            name: "Facebook",
            link: "",
        },
        {
            name: "Facebook",
            link: "",
        },
        {
            name: "GitHub",
            link: "",
        },
        {
            name: "Instagram",
            link: "",
        },
        {
            name: "Youtube",
            link: "",
        },
    ]
    return (
        <Layout>
            <div>
                <div>
                    <h1>Socials</h1>
                    {socials.map((social, index) => (
                        <ul key={index}>
                            <a href={social.link}>
                                <li>{social.name}</li>
                            </a>
                        </ul>
                    ))}
                </div>
                <div>
                    <h1>Send me a message</h1>
                    <form method='post'>
                        <label htmlFor="">Name</label>
                        <input type="text" />

                        <label htmlFor="">Email</label>
                        <input type="text" />

                        <label htmlFor="">Message</label>
                        <input type="text" />

                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
