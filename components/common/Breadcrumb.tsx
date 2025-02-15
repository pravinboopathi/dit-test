'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Breadcrumb" className="inline-flex items-center space-x-3 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isCurrent = item.href === pathname;

        return (
          <React.Fragment key={item.label}>
            {index > 0 && (
              <span className="text-gray-600/60" aria-hidden="true">/</span>
            )}
            <div className={isLast ? 'flex items-center' : ''}>
              {isCurrent ? (
                <span className="text-gray-200" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb; 