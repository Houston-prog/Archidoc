import SidebarCons from '@/Components/SidebarCons'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import SubmitButton from '@/Components/SubmitBtn';
import { Search, SearchCheckIcon, SearchCodeIcon, SearchSlashIcon, SquarePen } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from '@/Components/ui/label';
import Textarea from '@/Components/Textarea';

export default function ArchivByGroup({ departments }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        departement: '',
    });

    const handleSearch = (e) => {
        e.preventDefault();

        post(route('searchgroup'));
    }

  return (
    <AuthenticatedLayout hideHeader={true}>


        <SidebarCons />

        <div className="py-8 md:pl-64 pl-4">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                    <div className="p-6 border-sky-200 creation-title font-bold">

                        <div className="">
                            <div className="mx-auto max-w-15xl sm:px-6 lg:px-8">
                                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                                    <div className="p-6 border-sky-200 creation-title font-bold">
                                        Recherche des archives par groupe d'acc&egrave;s
                                    </div>

                                    <form onSubmit={handleSearch}>

                                        <div className='mx-8 gap-4 text-gray-600'>
                                            <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                                                <Label htmlFor="departement">
                                                    Groupe d'acc&egrave;s:
                                                </Label>

                                                <Select
                                                    // Use the `onValueChange` prop to update Inertia's form data
                                                    onValueChange={(value) => setData('departement', value)}
                                                    // Set the currently selected value based on the form data
                                                    value={data.departement}
                                                    >
                                                    <SelectTrigger id="departement">
                                                        {/* The SelectValue displays the currently selected item's text */}
                                                        <SelectValue placeholder="Selectionner le type d'archive..." />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {departments.map((role) => (
                                                            <SelectItem key={role.id} value={String(role.sigle)}>
                                                                {role.sigle}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>

                                            </div>
                                        </div>

                                        <div className="flex flex-row py-2 my-4 mx-8 gap-4">
                                            <div className="basis-1/2">

                                            </div>
                                            <div className="basis-1/2 flex justify-end">
                                                <SubmitButton>
                                                    <Search size={20}/> &nbsp;&nbsp;Rechercher
                                                </SubmitButton>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
