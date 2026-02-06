import BreadCrumb from '@/Components/BreadCrumb';
import SidebarCons from '@/Components/SidebarCons'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useMemo, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/Components/ui/button';
import { EyeIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function VosCreation({ units }) {

  return (
    <AuthenticatedLayout hideHeader={true}>


        <SidebarCons />

        <div className="py-8 md:pl-64 pl-4">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                    <div className="p-6 border-sky-200 creation-title font-bold">
                        <BreadCrumb />

                        <div className='mx-4 my-4'>
                            <p className='text-blue-400 font-semibold'>
                                Liste des documents
                            </p>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent">
                                    <TableHead>
                                      <Checkbox id={ units.id } />
                                    </TableHead>
                                    <TableHead>Type d'archives</TableHead>
                                    <TableHead>Objet du document</TableHead>
                                    <TableHead>Date de signature</TableHead>
                                    <TableHead>Emplacement</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {units.map((item) => (
                                    <TableRow
                                      key={item.id}
                                      className="has-data-[state=checked]:bg-muted/50"
                                    >
                                      <TableCell>
                                        <Checkbox id={`table-checkbox-${item.id}`} />
                                      </TableCell>
                                      <TableCell className="font-medium">{item.typearchive}</TableCell>
                                      <TableCell>{item.description}</TableCell>
                                      <TableCell>{item.date_doc}</TableCell>
                                      <TableCell>{item.emplacement}</TableCell>
                                      <TableCell className="text-right">
                                        <Button>
                                            <Link href="#">
                                                <EyeIcon className='w-5 h-5' />
                                            </Link>
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>


                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
