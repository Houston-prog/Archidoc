import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useMemo, useState } from 'react'
import SidebarArchive from '@/Components/SidebarArchive';

export default function Services() {

  return (
    <AuthenticatedLayout>
        <div className="py-3">
            <div className="mx-auto max-w-11xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                    <div className="p-6 text-green-700 text-xl italic dark:text-green-600 text-center">
                        Mieux se souvenir d'hier aujourd'hui, afin de mieux décider pour demain
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-row gap-4">
            <SidebarArchive/>
        </div>

        <div className="py-8 ml-60 basis-4/5">
            <div className="mx-auto max-w-11xl sm:px-6 lg:px-88">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                    <div className="p-6 border-sky-200 creation-title font-bold">

                        <div className='mx-2 gap-4 py-2'>
                            <img src="images/Service_Archive.png" alt="" className='mx-auto px-4 w-full' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
