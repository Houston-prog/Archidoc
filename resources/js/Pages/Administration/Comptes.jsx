import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import SidebarAdmin from './SidebarAdmin';
import BreadcrumbSec from './BreadcrumbSec';
import Register from '../Auth/Register';
import BreadcrumbAccount from './BreadcrumbAccount';

export default function Comptes() {

  return (
    <AuthenticatedLayout hideHeader={true}>

        <div className="flex flex-row gap-4">
            <SidebarAdmin/>
        </div>

        <div className="py-8 md:pl-64 pl-4">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                    <div className="p-6 border-sky-200 creation-title font-bold">
                        <BreadcrumbAccount />

                        <Register />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
