import React from 'react'
import Layout from '../pages/Layout'
import { FaFacebookSquare, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

function Contact() {
    const socials = [
        {
            name: "Facebook",
            link: "",
            icon: <FaFacebookSquare />
        },
        {
            name: "GitHub",
            link: "",
            icon: <FaGithub />
        },
        {
            name: "Instagram",
            link: "",
            icon: <FaInstagram />
        },
        {
            name: "Youtube",
            link: "",
            icon: <FaYoutube />
        },
    ]
    return (
        <Layout>
            <div className='h-[100%] bg-darkBlue flex justify-start items-center px-20'>
                <div className='w-[50%] h-[250px]'>
                    <h1 className='text-[24px] mb-4 text-skyBlue font-bold'>Socials</h1>
                    <div className='flex flex-col gap-y-8'>
                        {socials.map((social, index) => (
                            <ul key={index} className='flex items-center'>
                                <span className='mr-4'>{social.icon}</span>
                                <a href={social.link}>
                                    <li>{social.name}</li>
                                </a>
                            </ul>
                        ))}
                    </div>

                </div>
                <div className='w-[50%] h-[250px] flex flex-col'>
                    <h1 className='text-[24px] mb-4 text-skyBlue font-bold'>Send me a message</h1>
                    <form method='post' className='w-[50%] flex flex-col justify-center'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Name' />

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Email' />

                        <label htmlFor="">Message</label>
                        <input type="text" placeholder='Message' />

                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
