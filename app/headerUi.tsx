"use client"; // Marca el componente como Cliente

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Switch } from '@headlessui/react';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#skill' },
  { name: 'Portafolio', href: '#portafolio' },
];

export default function HeaderUi() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    toggleDarkMode();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [enabled, setEnabled] = useState(false);
  function toggleDarkMode() {
    const html = document.querySelector('html');
    const current = localStorage.getItem('theme');

    if (current === "dark") {
      html?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      html?.classList.add('light');
      setEnabled(false);
      return;
    }
    if (current === "light") {
      html?.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      html?.classList.add('dark');
      setEnabled(true);
      return;
    }
    localStorage.setItem('theme', 'dark');
    html?.classList.add('dark');
    setEnabled(true);
  }

  // function initTheme() {
  //   const html = document.querySelector('html');
  //   const current = localStorage.getItem('theme');
  //   if (current === undefined) {
  //     console.log("HERE")
  //     localStorage.setItem('theme', 'dark');
  //     html?.classList.add('dark');
  //     setEnabled(true);
  //   }
  // }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className={`bg-white dark:bg-blueDark fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''
        }`}
    >
      <nav aria-label="Global" className="flex justify-between items-center mx-auto p-6 lg:px-[100px] 2xl:px-[0px] max-w-7xl">
        <div className="flex lg:flex-1">
          <a href="#banner" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="Your Company Logo" src="/lpLogo.svg" width={32} height={32} priority />
          </a>
        </div>
        <div className="lg:hidden flex">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-[#1D00ED] dark:text-blueText text-sm leading-6">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className='flex items-center gap-3'>
            <SunIcon className="w-5 h-5 text-[#3D9AF4] dark:text-gray-400" />
            <Switch
              checked={enabled}
              onChange={toggleDarkMode}
              className="group inline-flex items-center bg-gray-300 dark:bg-[#3D9AF4] rounded-full w-11 h-6 transition"
            >
              <span className="bg-white dark:bg-white rounded-full size-4 transition translate-x-1 group-data-[checked]:translate-x-6" />
            </Switch>
            <MoonIcon className="w-5 h-5 text-gray-400 dark:text-[#3D9AF4]" />
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="z-10 fixed inset-0" />
        <DialogPanel className="right-0 z-10 fixed inset-y-0 bg-white dark:bg-slate-700 px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="-m-1.5 p-1.5">

              <Image alt="Your Company Logo" src="/lpLogo.svg" width={32} height={32} priority />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 rounded-md text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)} // Cierra el menú al hacer clic
                    className="block dark:hover:bg-slate-600 hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-gray-900 dark:text-white text-base leading-7"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='flex items-center gap-3'>
                <Switch
                  checked={enabled}
                  onChange={toggleDarkMode}
                  className="group inline-flex items-center bg-gray-300 dark:bg-[#3D9AF4] rounded-full w-11 h-6 transition"
                >
                  <span className="bg-white dark:bg-white rounded-full size-4 transition translate-x-1 group-data-[checked]:translate-x-6" />
                </Switch>
                <MoonIcon className="w-5 h-5 text-gray-400 dark:text-[#3D9AF4]" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
