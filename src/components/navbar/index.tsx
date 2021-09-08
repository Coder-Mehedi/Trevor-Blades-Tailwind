import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { PageRoutes } from 'utils/page-routes';
import { Link, useLocation } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  let location = useLocation();

  const navigation = [
    {
      name: 'Continents',
      href: PageRoutes.Continents,
      current: location.pathname === PageRoutes.Continents,
    },
    {
      name: 'Countries',
      href: PageRoutes.Countries,
      current: location.pathname === PageRoutes.Countries,
    },
    {
      name: 'Languages',
      href: PageRoutes.Languages,
      current: location.pathname === PageRoutes.Languages,
    },
  ];

  return (
    <Disclosure as='nav' className='bg-primary'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center  sm:justify-between'>
                <h1 className='text-white font-bold capitalize mr-16'>
                  <Link href='/' to='/'>
                    Trevor Blades
                  </Link>
                </h1>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link to={item.href} key={item.name}>
                        <a
                          href='!#'
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-primaryText hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Link to={item.href} key={item.name}>
                  <a
                    href='!#'
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
