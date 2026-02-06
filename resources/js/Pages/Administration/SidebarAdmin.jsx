import { Link, usePage } from '@inertiajs/react'
import { ChartLineIcon, FileEditIcon, Fingerprint, HandCoinsIcon, HardDriveDownloadIcon, ListChecksIcon, ListTodoIcon, ScrollTextIcon, Share2Icon, Users, UsersRoundIcon, HomeIcon } from 'lucide-react'
import React from 'react'

export default function SidebarAdmin() {
  const user = usePage().props.auth.user
  return (
    <div className='hidden md:flex items-center justify-center'>
        <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-transparent text-gray-800">
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-green-200 h-full border-r">
                <div className="flex items-center justify-center h-14 border-b border-blue-300">
                    <div className="uppercase text-sm text-center">
                        Administration
                    </div>
                </div>

                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <Link href={route('dashboard')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <HomeIcon size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Accueil
                            </span>
                        </Link>
                        <Link href={route('securite')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <Fingerprint size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                S&eacute;curit&eacute;
                            </span>
                        </Link>
                        <Link href={route('stat')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <ChartLineIcon size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Statistique
                            </span>
                        </Link>
                        <Link href={route('journal')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <ScrollTextIcon size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Journal
                            </span>
                        </Link>
                        <Link href={route('compte')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <Users size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Compte utilisateur
                            </span>
                        </Link>
                        <Link href={route('backup')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <HardDriveDownloadIcon size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Sauvegarde
                            </span>
                        </Link>
                    </ul>
                </div>

                <div className="p-4 border-t bg-green-100">
                    <div className="text-sm font-medium text-gray-700 truncate">{ user?.name }</div>
                    <div className="text-xs text-gray-600 mb-2 truncate">{ user?.roles }</div>
                    <div className="flex">
                        <Link href={route('profile.edit')} className="text-xs mr-2 text-blue-700">Profil</Link>
                        <Link href={route('logout')} method="post" className="ml-auto text-xs text-red-700">Déconnexion</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
