import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center mx-20 pt-6 sm:justify-center sm:pt-0">

            <div className="overflow-hidden w-9/12 mx-20 bg-gray-100 px-6 py-4 items-center shadow-md sm:rounded-lg dark:bg-gray-100">
                {children}
            </div>
        </div>
    );
}
