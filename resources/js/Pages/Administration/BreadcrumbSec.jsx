import { Link } from '@inertiajs/react'
import { ChevronRight, ListCheckIcon } from 'lucide-react'
import React from 'react'

export default function BreadcrumbSec() {
  return (
    <nav className='flex bg-gray-50 text-gray-700 border-gray-200 py-3 px-5 rounded-lg dark:bg-white dark:border-gray-400 dark:border-b' aria-label="Breadcrumb">
        <ol className='inline-flex items-center md:space-x-3'>
            <li className='inline-flex items-center'>
                <Link className='text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-green-300'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Mot de passe oubli&eacute;
                </Link>

                <ChevronRight />
            </li>
            <li className='flex items-center'>
                <Link className='text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-green-300'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Connexion suspecte
                </Link>

                <ChevronRight />
            </li>

        </ol>
    </nav>
  )
}
