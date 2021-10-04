import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../utilites/images/error-page.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="w-screen bg-white flex items-center py-12">
                <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="flex-1">
                        <div className="text-5xl font-dark font-bold">404</div>
                        <p
                            className="text-2xl md:text-3xl font-light leading-normal"
                        >Sorry we couldn't find this page. </p>
                        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                        <Link to='/home' className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-red-800 active:bg-blue-600 hover:bg-red-700">Back to homepage</Link>
                    </div>
                    <div className="flex-1 pb-6">
                        <img className="w-full" src={errorImg} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;