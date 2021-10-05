import React from 'react';
import { LocationMarkerIcon, PhoneIcon, InboxIcon } from '@heroicons/react/outline';

const ContactUs = () => {
    return (
        <div>
            <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="py-6 px-10 mr-2 bg-gray-900 dark:bg-gray-800 sm:rounded-lg">
                                <h1 className="text-4xl sm:text-5xl text-white dark:text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p className="text-normal text-lg sm:text-2xl font-medium text-white dark:text-gray-400 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div className="flex items-center mt-8 text-white dark:text-gray-400">
                                    <LocationMarkerIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        eduflow Inc, Dhaka, Bangladesh
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-white dark:text-gray-400">
                                    <PhoneIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +880 17345678900
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-white dark:text-gray-400">
                                    <InboxIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        info@eduflow.org
                                    </div>
                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="hidden">Number</label>
                                    <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <button type="submit" className="md:w-32 bg-red-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-700 transition ease-in-out duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;