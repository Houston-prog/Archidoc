import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CreditCardIcon, Edit2Icon, Users2Icon } from 'lucide-react'


export default function TabArchives() {
  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href={route('archives.view')} className="inline-flex items-center gap-1.5">
                    <Edit2Icon size={16} aria-hidden="true" />
                    Nouvelle archive
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href={route('dossierrh.createrh')} className="inline-flex items-center gap-1.5">
                    <Users2Icon size={16} aria-hidden="true" />
                    Dossiers RH
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href={route('typearchives.view')} className="inline-flex items-center gap-1.5">
                    <CreditCardIcon size={16} aria-hidden="true" />
                    Dossier Comptabilité
                </BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
  )
}
