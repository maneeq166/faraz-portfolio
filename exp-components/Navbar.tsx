'use client' // 👈 VERY IMPORTANT for Link clicks to work

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute top-4 right-[20%] w-[400px]">
      <div className="bg-black text-white rounded-md shadow-md">
        <ul className="flex justify-around py-2">
          <li>
            <Link className='hover:underline' href="/about">About</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
