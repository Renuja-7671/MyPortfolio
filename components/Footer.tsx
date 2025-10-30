'use client';

import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Renuja Janith. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Built with <FaHeart className="text-red-500" /> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}