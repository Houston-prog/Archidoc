import { Link } from '@inertiajs/react'
import { FileEditIcon, FolderOpen, HandCoinsIcon, ListChecksIcon, ListTodoIcon, Share2Icon, UsersRoundIcon } from 'lucide-react'
import React from 'react'

export default function SidebarHisto() {
  return (
    <div className='overflow-hidden flex items-center justify-center basis-32'>
        <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div className="fixed flex flex-col top-30 left-0 w-64 bg-green-200 h-full border-r">
                <div className="flex items-center justify-center h-14 border-b border-blue-300">
                    <div className="uppercase text-sm text-center">
                        Historique des Consultations
                    </div>
                </div>

                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <Link href={route('vosunites')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">

                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">

                            </span>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
