"use client";
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    ShoppingBagIcon,
    ClipboardDocumentIcon,
    TruckIcon,
    ShoppingCartIcon
   
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
        name: 'Inventory',
        href: '/dashboard/inventory',
        icon: DocumentDuplicateIcon,
    },
    { name: 'Orders', href: '/dashboard/orders', icon: ShoppingCartIcon },
    {
        name: 'Suppliers',
        href: '/dashboard/suppliers',
        icon: UserGroupIcon,
    },
    {
        name: 'Shipments',
        href: '/dashboard/shipments',
        icon: TruckIcon
    },
    {
        name: 'Reports',
        href: '/dashboard/reports',
        icon: ClipboardDocumentIcon
    }
];

export function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-none bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}>
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
