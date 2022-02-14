import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-screen mx-auto py-4 px-8 lg:px-64 md:px-24 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold text-blue-600">Next Blog</h1>

      <Link href="https://github.com/Aditya6101/next-blog-app" passHref>
        <Image
          className="cursor-pointer"
          src="/images/github.svg"
          alt="Avatar"
          width={25}
          height={25}
        />
      </Link>
    </header>
  );
};

export default Header;
