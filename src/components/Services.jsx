import React from 'react'
import Layout from '../pages/Layout'

function Services() {
    const services = [
        {
          title: "Custom Web Application Development",
          description: "Design and develop bespoke web applications tailored to your specific business needs. From simple websites to complex enterprise solutions, I utilize cutting-edge technologies to create scalable, secure, and user-friendly web applications."
        },
        {
          title: "Mobile App Development",
          description: "Craft innovative mobile applications for iOS and Android platforms. Whether you need a native, hybrid, or cross-platform solution, I have expertise in building high-performance mobile apps that deliver seamless user experiences and drive user engagement."
        },
        {
          title: "Cloud Solutions Architecture",
          description: "Architect robust cloud solutions that leverage the power of leading cloud platforms such as AWS, Azure, or Google Cloud. From infrastructure design to deployment and optimization, I ensure scalability, reliability, and cost-effectiveness of your cloud-based systems."
        },
        {
          title: "Data Analytics and Visualization",
          description: "Harness the potential of your data with advanced analytics and visualization solutions. I offer services ranging from data modeling and analysis to building interactive dashboards and reports, empowering you to make data-driven decisions and gain actionable insights."
        },
        {
          title: "Cybersecurity Consulting",
          description: "Protect your digital assets and mitigate cybersecurity risks with comprehensive consulting services. From conducting security assessments to implementing robust measures and protocols, I help organizations safeguard their systems, data, and networks against cyber threats."
        }
      ]
      
    return (
        <Layout>
            <div className='h-[100%] bg-darkBlue'>
                {services.map((service, index) => (
                    <div key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Services
