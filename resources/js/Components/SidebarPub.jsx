import { Link, usePage } from '@inertiajs/react'
import { FileEditIcon, FolderOpen, HandCoinsIcon, ListChecksIcon, ListTodoIcon, Share2Icon, UsersRoundIcon, HomeIcon } from 'lucide-react'
import React from 'react'

export default function SidebarPub() {
  const user = usePage().props.auth.user
  return (
    <div className='hidden md:flex items-center justify-center'>
        <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-transparent text-gray-800">
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-green-200 h-full border-r">
                <div className="flex items-center justify-center h-14 border-b border-blue-300">
                    <div className="uppercase text-sm text-center">
                        Consultations Publiques
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
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Constitution
                            </span>
                        </Link>
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Ordonnances
                            </span>
                        </Link>
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Lois
                            </span>
                        </Link>
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Décrets
                            </span>
                        </Link>
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Arrêtés
                            </span>
                        </Link>
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Décisions
                            </span>
                        </Link>
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Circulaires
                            </span>
                        </Link>
                        <Link href={route('public')} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <FolderOpen size={15} />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Instructions
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
