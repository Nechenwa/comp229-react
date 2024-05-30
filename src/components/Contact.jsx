import React from 'react'
import Layout from '../pages/Layout'
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Contact() {
    const socials = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/jenniferchichi.nwankwor",
            icon: <FaFacebookSquare />
        },
        {
            name: "GitHub",
            link: "https://github.com/Nechenwa",
            icon: <FaGithub />
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/neche_nwa246/",
            icon: <FaInstagram />
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/channel/UC87m2Jh03jx51_Ne468Udog",
            icon: <FaYoutube />
        },
        {
            name: "Linkedln",
            link: "https://www.linkedin.com/in/jenniferjude04/",
            icon: <FaLinkedin />
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
