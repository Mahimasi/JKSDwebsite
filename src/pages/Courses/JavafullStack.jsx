import React, { useState } from 'react';
import javafullstack from '../../assets/images/javafull.jpg';
import download from '../../assets/images/download.png';
import share from '../../assets/images/share.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import '@fortawesome/fontawesome-free/css/all.min.css';


const JavafullStack = () => {
    const [openWeek, setOpenWeek] = useState(null);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };

    const weeks = [
        {
            week: "Week 1: Introduction to Full Stack Development",
            details: [
                "Understanding the Full Stack Development Process",
                "Overview of Java Technologies",
                "Setting Up Your Development Environment"
            ]
        },
        {
            week: "Week 2: Java Programming Essentials",
            details: [
                "Java Basics and Object-Oriented Programming",
                "Working with Collections and Generics",
                "Exception Handling in Java"
            ]
        },
        {
            week: "Week 3: Frontend Development with HTML, CSS, and JavaScript",
            details: [
                "Building User Interfaces with HTML and CSS",
                "JavaScript for Dynamic Web Pages",
                "Introduction to Angular/React"
            ]
        },
        {
            week: "Week 4: Spring Framework Basics",
            details: [
                "Introduction to Spring and Spring Boot",
                "Creating RESTful Web Services",
                "Dependency Injection and Aspect-Oriented Programming"
            ]
        },
        {
            week: "Week 5: Database Integration with Hibernate",
            details: [
                "Introduction to ORM and Hibernate",
                "Mapping Entities to Database Tables",
                "Performing CRUD Operations"
            ]
        },
        {
            week: "Week 6: Building the Backend",
            details: [
                "Creating REST APIs with Spring Boot",
                "Securing APIs with Spring Security",
                "Integrating with Frontend Applications"
            ]
        },
        {
            week: "Week 7: DevOps Practices for Java Developers",
            details: [
                "Continuous Integration/Continuous Deployment (CI/CD)",
                "Using Jenkins for Automated Builds",
                "Containerization with Docker"
            ]
        },
        {
            week: "Week 8: Capstone Project",
            details: [
                "Developing a Full Stack Application",
                "Testing and Debugging Your Application",
                "Deploying Your Application to the Cloud"
            ]
        }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-indigo-950 w-full flex flex-col-reverse lg:flex-row'>
    <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
        <h1 className='text-3xl lg:text-4xl font-bold'>Java Full Stack Development</h1>
        <p className='pt-2 text-sm lg:text-base mr-10'>
        Pursuing a career in Java Full Stack Development opens doors to numerous opportunities in the ever-evolving tech industry. As companies demand versatile developers proficient in both front-end and back-end technologies, this course offers a comprehensive curriculum covering the entire development lifecycle. From building responsive user interfaces to creating robust server-side logic, our Java Full Stack Development program is tailored to develop your coding expertise and problem-solving skills. Guided by seasoned developers, you’ll gain practical experience in frameworks like Spring and Angular, ensuring you’re well-prepared to tackle complex projects and excel in your development career.
            {/* Truncated for brevity */}
        </p>

        <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5'>
    <button className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2" type="button">
        Download Brochure
        <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
    </button>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Contact Now
        <img className='h-5 sm:h-6 w-5 sm:w-6' src={telephone} alt="" />
    </button>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Share
        <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" />
    </button>
</div>

    </div>

    <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
        <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={javafullstack} alt="" />
    </div>
</div>
 {/* digital section close here  */}


{/* Digital Marketing: Thrive and Grow section start here  */}

<div className=''>
    <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Java Full Stack Development: Building Robust Applications</h1>

        <div className='flex flex-col lg:flex-row justify-center pt-5'>
            {/* Table of Contents */}
            <div className='lg:w-1/2 '>
                <h1 className='text-xl lg:text-2xl font-medium'>Table of Contents</h1>
                {weeks.map((item, index) => (
                    <div key={index} className="border-b border-orange">
                        <button
                            className="w-full flex justify-between items-center py-4 text-lg font-semibold focus:outline-none"
                            onClick={() => toggleWeek(index)}
                        >
                            <span>{item.week}</span>
                            <i className={`fas fa-chevron-down transform transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`}></i>
                        </button>
                        <ul
                            className={`text-lg transition-all duration-500 overflow-hidden ${openWeek === index ? 'max-h-40 opacity-100 py-4 px-3' : 'max-h-0 opacity-0'}`}
                        >
                            {item.details.map((detail, idx) => (
                                <li key={idx} className="ml-4 list-disc">{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Course Details */}
            <div className='lg:ml-14 lg:pl-5 mt-6 lg:mt-0 lg:w-2/3'>
                <h1 className='font-medium text-xl lg:text-2xl'>Course Details</h1>
                <div className='text-[16px] lg:text-[20px] pt-3 font-medium'>
                    <pre>Level:             Beginner</pre>
                    <pre>Total Duration :   3/6 months</pre>
                    <pre>Certificate:      Certificate of Completion</pre>
                </div>
                
                {/* Requirements */}
                <div>
                    <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                    <p className='pt-3'>
                    Basic knowledge of Java programming
                    Understanding of web technologies (HTML, CSS, JavaScript)
                    Access to a computer with Java SDK installed
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                    <p className='pt-4'>At the completion of Java Full Stack Development training with us, you would be fully knowledgeable about various Java Full Stack Development disciplines that include:</p>
                    <ul className='list-disc pl-6 pt-2'>
                        <li>Java programming and object-oriented concepts</li>
                        <li>Spring framework and RESTful web services</li>
                        <li>Frontend development using Angular/React</li>
                        <li>Database integration with Hibernate and JPA</li>
                        <li>DevOps practices with CI/CD tools</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


            {/* Digital Marketing: Thrive and Grow section close here  */}


 {/* cartificate section start here  */}

            <div className='cartificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-indigo-950 gap-4 justify-center items-center'>
    {/* Left Content Section */}
    <div className="text-white lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">
        {/* First Decorative Circle */}
        <div className='relative'>
            <div className='bg-red-300  h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 hidden lg:block  rounded-full absolute -top-16 md:-top-4 lg:-top-72'></div>
        </div>
        
        {/* Text Content */}
        <h1 className='text-orange ml-10 lg:ml-5 font-medium text-2xl lg:text-3xl pr-40 pt-0 lg:pt-16 '>
            Validating Your Success: About Your Certificate
        </h1>
        <p className='pt-6 lg:pt-10 font-medium mr-6  ml-10 lg:ml-5'>
            Once you complete the course videos, assignments, and quizzes, you will be able to generate the certificate.
        </p>
        <ul className='list-disc ml-10 lg:ml-5 pl-10 mr-6 pt-4 lg:pt-6'>
            <li>After watching 60% of videos</li>
            <li>After scoring 60% in quiz & assignment</li>
            <li>After completing 1 medium-level project on Experience Portal</li>
        </ul>
        
        {/* Certificate Information */}
        <div className='pt-6 '>
            <h1 className='text-xl ml-10 lg:ml-5 lg:text-2xl font-medium'>
                Certification From JKSD Infotech Pvt. Ltd.
            </h1>
        </div>
        
        {/* Second Decorative Circle */}
        <div className='relative '>
            <div className='bg-green-300 hidden lg:block h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 rounded-full absolute bottom-0  right-0 mb-[-10px] md:mb-[-10px] lg:mb-[-340px]'></div>
        </div>
    </div>

    {/* Right Image Section */}
    <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 lg:p-5 flex justify-center">
        <img className='h-auto w-full' src={cartificate} alt="Certificate" />
    </div>
</div>

        </div>
    
    );
};

export default JavafullStack;
