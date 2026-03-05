import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useMemo, useState } from 'react'
import SidebarAdmin from './SidebarAdmin';
import { useForm } from '@inertiajs/react'
import { Label } from '@/Components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SubmitButton from '@/Components/SubmitBtn';
import InputLabel from '@/Components/InputLabel';
import Textarea from '@/Components/Textarea';
import TextInput from '@/Components/TextInput';
import { Search } from 'lucide-react';

export default function Journal({ types }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        typearchive: '',
        description: '',
        date_doc: '',
        created_at: '',
    });

    const handleSearch = (e) => {
        e.preventDefault();

        post(route('journal.show'));
    }

  return (
    <AuthenticatedLayout>

        <div className="flex flex-row justify-between">

            <div className='basis-1/4'>
                <SidebarAdmin/>
            </div>

            <div className="basis-3/4 mr-24 lg:mr-24 md:mr-24 sm:mr-10 py-6">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                        <div className="p-6 border-sky-200 creation-title font-bold">
                            <h2>
                                Paramétrage du journal
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
  )
}
