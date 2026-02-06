import React from 'react'
import { Button } from "@/components/ui/button"

import {
    BellMinusIcon,
    ChevronDownIcon,
    LogOutIcon,
    SquarePenIcon,
    ListTodo,
    Settings2,
    ChartSplineIcon,
    ScrollTextIcon,
    UserRoundIcon,
    HardDriveDownloadIcon,
    NotebookIcon,
    GitForkIcon,
    FolderArchiveIcon,
    BrickWallShieldIcon,
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Link } from '@inertiajs/react';

export default function MenuInf() {
  return (
    <div className='bg-gray-100 dark:bg-gray-200'>
        <header className="border-b px-4 md:px-6">
            <div className="flex h-16 items-center justify-between gap-4">
                {/* Left side */}
                    <div className="flex items-center gap-2">
                        <Breadcrumb>
                            <BreadcrumbList>

                                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                                <BreadcrumbItem className="md:hidden">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="hover:text-foreground">
                                        <BreadcrumbEllipsis />
                                        <span className="sr-only">Toggle menu</span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem asChild>
                                            <Link href="documents/">
                                                Organigramme DGB
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <a href="#">Organigramme DGB</a>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                    </DropdownMenu>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent text-gray-800">
                                                <BreadcrumbLink>
                                                    Organigramme DGB
                                                </BreadcrumbLink>
                                                <ChevronDownIcon
                                                    size={16}
                                                    className="opacity-60"
                                                    aria-hidden="true"
                                                />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="max-w-64">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <GitForkIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/ORGANIGRAMME_DGB.pdf" target="_blank">
                                                            Organigramme DGB
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <GitForkIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/DECRET_066_PORTANT_ORGANISATION_MINFI_28022013_PR.pdf" target="_blank">
                                                            Decret portant orginanisation MINFI 2013
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <GitForkIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/DECRET_365_PORTANT_ORGANISATION_MINFI_08112008.pdf" target="_blank">
                                                            Decret portant orginanisation MINFI 2008
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <GitForkIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/DECRET_088_COMPLETANT_DISPOSITIONS_DECRET_217_09091998_PORTANT_ORGANISATION_MINEFI_17042001.pdf" target="_blank">
                                                            Decret portant orginanisation MINFI 2001
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <GitForkIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/DECRET_282_MODIFIANT_DISPOSITION_DECRET_168_16081995_PORTANT_ORGANISATION_MINISTERE_ECEONOMIE_FINANCES_02121996.pdf" target="_blank">
                                                            Decret portant orginanisation MINFI 1996
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent text-gray-800">
                                                <BreadcrumbLink>
                                                    Archives et Organisation
                                                </BreadcrumbLink>
                                                <ChevronDownIcon
                                                    size={16}
                                                    className="opacity-60"
                                                    aria-hidden="true"
                                                />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="max-w-64">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <FolderArchiveIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/Loi_001_Regissant_Archives_Cameroun_24072024.pdf" target="_blank">
                                                            Loi sur les archives
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <BrickWallShieldIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/Loi_Cybersecurite_Criminalite.pdf">
                                                            Loi sur la Cybersécurité et Cybercriminalité
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <BrickWallShieldIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/Loi_Commerce_Electronique.pdf">
                                                            Loi sur le Commerce Électronique
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <BrickWallShieldIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/LOI_COMMUNICATIONS_ ELECTRONIQUES.pdf">
                                                            Loi sur le Communication Électronique
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <FolderArchiveIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/Decret_Archive.pdf">
                                                            Decret sur les archives
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent text-gray-800">
                                                <BreadcrumbLink>
                                                    Organisation des archives de la DGB
                                                </BreadcrumbLink>
                                                <ChevronDownIcon
                                                    size={16}
                                                    className="opacity-60"
                                                    aria-hidden="true"
                                                />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="max-w-64">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <Settings2 size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/Rapport_Audit_Archivage-Novembre-2019.pdf">
                                                            Rapport d'audit des archives de la DGB
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <ChartSplineIcon size={16} className="opacity-60" aria-hidden="true" />
                                                    <span>
                                                        <BreadcrumbLink href="documents/Réseau_Archivage_DGB.pdf">
                                                            Reseau des référents des archives de la DGB
                                                        </BreadcrumbLink>
                                                    </span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </BreadcrumbItem>

                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
        </header>
    </div>
  )
}
