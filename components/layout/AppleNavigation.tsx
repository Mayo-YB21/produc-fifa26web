"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppleNavigationProps {
  mobile?: boolean;
}

const AppleNavigation = ({ mobile = false }: AppleNavigationProps) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/products' },
    { name: 'Ediciones', href: '/editions' },
    { name: 'Accesorios', href: '/accessories' },
    { name: 'Soporte', href: '/support' },
  ];

  const baseClasses = "text-sm font-medium transition-all duration-300 hover:text-blue-500";
  const activeClasses = "text-blue-500";
  const inactiveClasses = "text-gray-600";

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${baseClasses} ${
              pathname === item.href ? activeClasses : inactiveClasses
            } text-lg py-2 border-b border-gray-100`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${baseClasses} ${
            pathname === item.href ? activeClasses : inactiveClasses
          } relative group`}
        >
          {item.name}
          <span
            className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
              pathname === item.href ? 'w-full' : ''
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default AppleNavigation;
