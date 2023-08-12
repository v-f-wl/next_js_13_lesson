'use client'

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { HiOutlineSparkles } from 'react-icons/hi'

import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme-toggle';
import MobileSideBar from '@/components/mobile-sidebar';

const font = Poppins({
  weight: '600',
  subsets: ['latin']
})
const Navbar = () => {
  return (  
    <div 
      className="
        fixed 
        w-full 
        z-50 
        flex 
        justify-between items-center 
        py-2 px-4 
        border-b border-primary/10 bg-secondary 
        h-16
      "
    >
      <div className="flex items-center">
        <MobileSideBar/>
        <Link href='/'>
          <h1 className={cn(
            'hidden md:block text-xl md:text-2xl font-bold text-primary',
            font.className
            )}>
            ИИ App
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size='sm' variant='premium'>
          Upgrade
          <HiOutlineSparkles className='w-4 h-4 fill-white text-white ml-2'/>
        </Button>
        <ModeToggle/>
        <UserButton/>
      </div>  
    </div>
  );
}
 
export default Navbar;