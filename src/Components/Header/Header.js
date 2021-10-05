import { Disclosure } from '@headlessui/react';
import { ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navigation = [
        { name: 'Home', to: '/home', current: false },
        { name: 'Courses', to: '/courses', current: false },
        { name: 'About us', to: '/about', current: false },
        { name: 'Contact Us', to: '/contact', current: false },
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className="sticky top-0 z-50">
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 md:flex-1 flex items-center">
                                        <Link to="/home" className="block lg:hidden h-8 w-auto text-white font-semibold text-2xl">EduFlow</Link>
                                        <Link to="/home" className="hidden lg:block h-8 w-auto text-white font-semibold text-2xl">EduFlow</Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.to}
                                                    activeStyle={{
                                                        backgroundColor: '#991b1b'
                                                    }}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-white font-semibold text-md hover:bg-red-800 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-2 rounded-full text-white hover:bg-red-800 focus:bg-red-800"
                                    >
                                        <span className="sr-only">View Cart</span>
                                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-white font-semibold text-md hover:bg-red-800 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Header;