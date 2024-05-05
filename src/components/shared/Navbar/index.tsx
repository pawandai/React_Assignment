import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const MobileNavigation = () => {
  const { pathname } = useLocation();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='mt-5'>
          <SheetTitle className='flex flex-col items-center mb-10'>
            <img src='/logo.png' className='w-20' />
            CodeDuo
          </SheetTitle>
          <SheetDescription className='flex flex-col items-center gap-5'>
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={cn(
                  'px-5 py-2 text-lg border-b-2 border-b-primary-foreground w-full',
                  {
                    'text-red-600 outline-border border-b-red-600':
                      pathname === navLink.href,
                  }
                )}
              >
                <NavLink to={navLink.href}>{navLink.title}</NavLink>
              </li>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className='w-full h-fit px-4 bg-primary'>
        <nav className='max-w-6xl mx-auto flex justify-between'>
          <img src='/logo.png' className='rounded-full w-14' />

          <div className='flex items-center justify-end gap-40 flex-1 md:hidden'>
            <MobileNavigation />
          </div>

          <ul className='md:flex items-center justify-end gap-40 flex-1 hidden'>
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={cn('p-5 text-lg border-b-4 border-b-primary', {
                  'text-red-600 outline-border border-b-red-600':
                    pathname === navLink.href,
                })}
              >
                <NavLink to={navLink.href}>{navLink.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
