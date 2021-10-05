import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="place-content-center grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center rounded">
                <div className="grid place-content-center bg-gray-900 h-full text-gray-50 p-11 md:rounded-l-lg">
                    <div>
                        <h1 className="text-7xl font-semibold pb-4 capitalize">What we do</h1>
                        <p>EduFlow is a nonprofit dedicated to expanding access to various skills in schools and increasing participation by young women and students from other underrepresented groups. Our vision is that every student in every school has the opportunity to gain various skills as part of their core K-12 education.</p>
                    </div>
                </div>
                <div className="order-first lg:order-last">
                    <img className="md:rounded-r-lg " src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;