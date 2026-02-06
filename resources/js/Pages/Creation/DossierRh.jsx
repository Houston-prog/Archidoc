import InputLabel from '@/Components/InputLabel'
import Sidebar from '@/Components/Sidebar'
import SubmitButton from '@/Components/SubmitBtn'
import Textarea from '@/Components/Textarea'
import TextInput from '@/Components/TextInput'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { useForm } from '@inertiajs/react'
import {
    CheckCircle2,
    SkipBack,
    SkipForward,
    Edit3Icon,
    UserSquare2Icon,
    CreditCardIcon
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/Components/ui/card'
import TabArchives from './TabArchives'

export default function TypeArchives({ locations }) {
    const [ currentStep, setCurrentStep ] = useState(1);

    const { data, setData, post, processing, errors, reset } = useForm({
        type_document: '',
        name: '',
        format: '',
        emplacement: '',
        emplacement2: '',
        rayon: '',
        travee: '',
        cote: '',
        accesgroup: '',
        filepath: null
    });

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    }

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    }

    const handleFileChange = (e) => {
        // Set the file object to the form data
        const file = e.target.files[0];

        if (file && file.type === 'application/pdf') {
            setData('filepath', file);
        } else {
            alert('Veuillez sélectionner un fichier PDF.');
            e.target.value = null; // Clear the input
            return;
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('dossierrh.storerh'), {
            forceFormData: true,
            onFinish: () => reset('type_document', 'name', 'format', 'emplacement', 'emplacement2', 'rayon', 'travee', 'cote', 'accesgroup, filepath'),
        });
    };

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

        <div className='flex flex-row gap-4'>

            <div className="py-8 basis-0.5">
                <Sidebar />
            </div>

            <div className="py-8 ml-60 basis-4/5">
                <div className="mx-auto max-w-11xl sm:px-6 lg:px-88">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                        <div className="p-6 text-gray-900 dark:text-green-600 text-center font-bold">
                            <TabArchives />
                        </div>

                        <div className="p-6 border-sky-200 creation-title font-bold">
                            Nouveau Dossier RH
                        </div>

                        <form onSubmit={submit}>

                            { currentStep === 1 && (
                                <div>
                                    <div className="p-6 border-sky-200 font-bold">
                                        Étape 1/3: Creation d'une archive
                                    </div>

                                    <div className='mx-8 py-2 gap-4'>
                                        <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                                            <Label htmlFor="type_document">
                                                Type de document:
                                                <span className="text-red-500">
                                                    &nbsp;*
                                                </span>
                                            </Label>
                                            <Select
                                                defaultValue="Dossier du personnel"
                                                name="type_document"
                                                // Use the `onValueChange` prop to update Inertia's form data
                                                onValueChange={(value) => setData('type_document', value)}
                                                // Set the currently selected value based on the form data
                                                value={data.type_document}
                                            >
                                                <SelectTrigger id="type_document">
                                                    <SelectValue placeholder="Type du Document" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Dossier du personnel">Dossier du personnel</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="mx-8 py-2 w-90">
                                        <div className="inline-flex relative">
                                            <InputLabel htmlFor="name" value="Nom & Prenom & Matricule:"/>
                                            <span className="text-red-500">
                                                &nbsp;*
                                            </span>
                                        </div>

                                        <Textarea
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />
                                    </div>

                                    <div className='mx-8 py-2 gap-4'>
                                        <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                                            <Label htmlFor="format">
                                                Format du document:
                                                <span className="text-red-500">
                                                    &nbsp;*
                                                </span>
                                            </Label>
                                            <Select
                                                defaultValue="Document PDF"
                                                name="format"
                                                // Use the `onValueChange` prop to update Inertia's form data
                                                onValueChange={(value) => setData('format', value)}
                                                // Set the currently selected value based on the form data
                                                value={data.format}
                                            >
                                                <SelectTrigger id="format">
                                                    <SelectValue placeholder="Format Document" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Document PDF">Document PDF</SelectItem>
                                                    <SelectItem value="Image">Image</SelectItem>
                                                    <SelectItem value="Document Papier">Document Papier</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="flex flex-row py-2 mx-8 gap-4">

                                        <div className='basis-1/2'>
                                            <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                                                <Label htmlFor="emplacement">
                                                    Emplacement Physique:
                                                    <span className="text-red-500">
                                                        &nbsp;*
                                                    </span>
                                                </Label>

                                                <Select
                                                    // Use the `onValueChange` prop to update Inertia's form data
                                                    onValueChange={(value) => setData('emplacement', value)}
                                                    // Set the currently selected value based on the form data
                                                    value={data.emplacement}
                                                    >
                                                    <SelectTrigger id="emplacement">
                                                        {/* The SelectValue displays the currently selected item's text */}
                                                        <SelectValue placeholder="Selectionner l'emplacement physique..." />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {locations.map((role) => (
                                                            <SelectItem key={role.id} value={String(role.magasin)}>
                                                                {role.magasin}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                {errors.emplacement && <p className="text-red-500 text-sm mt-1">{errors.emplacement}</p>}

                                            </div>
                                        </div>

                                        <div className="basis-1/2">
                                            <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                                                <Label htmlFor="emplacement2">
                                                    Emplacement Virtuel:
                                                    <span className="text-red-500">
                                                        &nbsp;*
                                                    </span>
                                                </Label>
                                                <Select
                                                    defaultValue="Serveur"
                                                    name="emplacement2"
                                                    // Use the `onValueChange` prop to update Inertia's form data
                                                    onValueChange={(value) => setData('emplacement2', value)}
                                                    // Set the currently selected value based on the form data
                                                    value={data.emplacement2}
                                                >
                                                    <SelectTrigger id="emplacement2">
                                                        <SelectValue placeholder="Emplacement Document" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Serveur">Serveur</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row py-2 mx-8 gap-4">
                                        <div className="basis-1/3">
                                            <div className="inline-flex relative">
                                                <InputLabel htmlFor="rayon" value="Rayon:"/>
                                            </div>

                                            <TextInput
                                                id="rayon"
                                                type="text"
                                                name="rayon"
                                                value={data.rayon}
                                                className="mt-1 block w-full"
                                                autoComplete="rayon"
                                                isFocused={true}
                                                onChange={(e) => setData('rayon', e.target.value)}
                                            />
                                        </div>
                                        <div className="basis-1/3">
                                            <div className="inline-flex relative">
                                                <InputLabel htmlFor="travee" value="Travée:"/>
                                            </div>

                                            <TextInput
                                                id="travee"
                                                type="text"
                                                name="travee"
                                                value={data.travee}
                                                className="mt-1 block w-full"
                                                autoComplete="travee"
                                                isFocused={true}
                                                onChange={(e) => setData('travee', e.target.value)}
                                            />
                                        </div>
                                        <div className="basis-1/3">
                                            <div className="inline-flex relative">
                                                <InputLabel htmlFor="cote" value="Cote de boite d'archives:"/>
                                            </div>

                                            <TextInput
                                                id="cote"
                                                type="text"
                                                name="cote"
                                                value={data.cote}
                                                className="mt-1 block w-full"
                                                autoComplete="cote"
                                                isFocused={true}
                                                onChange={(e) => setData('cote', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='mx-8 py-2 gap-4'>
                                        <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                                            <Label htmlFor="format">
                                                Groupe d'accès:
                                                <span className="text-red-500">
                                                    &nbsp;*
                                                </span>
                                            </Label>
                                            <Select
                                                defaultValue="RH"
                                                name="accesgroup"
                                                // Use the `onValueChange` prop to update Inertia's form data
                                                onValueChange={(value) => setData('accesgroup', value)}
                                                // Set the currently selected value based on the form data
                                                value={data.accesgroup}
                                            >
                                                <SelectTrigger id="accesgroup">
                                                    <SelectValue placeholder="Groupe d'accès" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="RH">RH</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="mx-8 py-4 w-90">
                                        <span className="italic">
                                            <span className="text-red-500">(*)</span> Tous les champs sont obligatoires
                                        </span>
                                    </div>

                                    <div className="flex flex-row py-2 my-4 mx-8 gap-4">
                                        <div className="">
                                            <SubmitButton onClick={nextStep}>
                                                Suivant &nbsp;&nbsp;<SkipForward size={20}/>
                                            </SubmitButton>
                                        </div>
                                    </div>
                                </div>
                            )}

                            { currentStep === 2 && (
                                <div className='my-4'>
                                    <div className="p-6 border-sky-200 font-bold">
                                        Étape 2/3: Importation du document
                                    </div>

                                    <div className='mx-8 py-4 gap-4'>
                                        <Label htmlFor="file">Importer le fichier (document)</Label>
                                        <Input
                                            id="file"
                                            name='filepath'
                                            type="file"
                                            accept=".pdf" // Restrict to PDF files in the browser
                                            onChange={handleFileChange}
                                        />

                                        {
                                            errors.filepath && <div> { errors.filepath } </div>
                                        }
                                    </div>

                                    <div className="flex flex-row py-2 my-4 mx-8 gap-4">
                                        <div className=" basis-1/2">
                                            <SubmitButton onClick={prevStep}>
                                                <SkipBack size={20}/> &nbsp;&nbsp;Precedent
                                            </SubmitButton>
                                        </div>
                                        <div className="basis-1/2 flex justify-end">
                                            <SubmitButton onClick={nextStep}>
                                                Suivant &nbsp;&nbsp;<SkipForward size={20}/>
                                            </SubmitButton>
                                        </div>
                                    </div>
                                </div>
                            )}

                            { currentStep === 3 && (
                                <div className='my-4'>
                                    <div className="p-6 border-sky-200 font-bold">
                                        Étape 3/3: Validation des données
                                    </div>

                                    <div className='flex flex-row py-2 my-4 gap-4'>
                                        <div className="basis-1/4 mx-8">
                                            <strong>Type du document:</strong> { data.type_document }
                                            <br />
                                            <strong>Nom & Prenom & Matricule:</strong> { data.name }
                                            <br />
                                            <strong>Format du document:</strong> { data.format }
                                            <br />
                                            <strong>Emplacement Physique:</strong> { data.emplacement }
                                            <br />
                                            <strong>Emplacement Virtuel:</strong> { data.emplacement2 }
                                            <br />
                                            <strong>Rayon:</strong> { data.rayon }
                                            <br />
                                            <strong>Travée:</strong> { data.travee }
                                            <br />
                                            <strong>Cote de boite d'archives:</strong> { data.cote }
                                            <br />
                                            <strong>Groupe d'accès:</strong> { data.accesgroup }
                                        </div>
                                        <div className="basis-3/4 mx-8">
                                            <Card className="max-w-4xl mx-auto">
                                                <CardHeader>

                                                </CardHeader>
                                                <CardContent>
                                                    <div className="aspect-[3/4] w-full border border-gray-300 rounded-lg overflow-hidden">
                                                        {/* Use an iframe for native browser PDF preview.
                                                        The 'type="application/pdf"' and 'height/width' attributes are important.
                                                        */}
                                                        <iframe
                                                            src={data.filepath ? URL.createObjectURL(data.filepath) : ''}
                                                            title="Aperçu du document PDF"
                                                            width="100%"
                                                            height="100%"
                                                            type="application/pdf"
                                                            className="w-full h-full"
                                                            style={{ border: 'none' }}
                                                        >
                                                            {/* Fallback content for browsers that can't render the iframe */}
                                                            <p>Your browser does not support PDF viewing. <a href={data.filepath} target="_blank" rel="noopener noreferrer">Download the PDF</a> instead.</p>
                                                        </iframe>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                        </div>
                                    </div>

                                    <div className="flex flex-row py-2 my-4 mx-8 gap-4">
                                        <div className="basis-1/2">
                                            <SubmitButton onClick={prevStep}>
                                                <SkipBack size={20}/> &nbsp;&nbsp;Precedent
                                            </SubmitButton>
                                        </div>
                                        <div className="basis-1/2 flex justify-end">
                                            <SubmitButton>
                                                <CheckCircle2 size={20}/> &nbsp;&nbsp;Valider
                                            </SubmitButton>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
