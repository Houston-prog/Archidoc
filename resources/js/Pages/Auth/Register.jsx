import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from '@/Components/ui/label';
import DangerButton from '@/Components/DangerButton';
import { CheckCircleIcon, Trash2Icon } from 'lucide-react';
import SubmitButton from '@/Components/SubmitBtn';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        username: '',
        departement: '',
        roles: '',
        matricule: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className='mx-auto max-w-11xl sm:px-6 lg:px-88'>
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                <div className="border-sky-200 creation-title font-bold py-10">
                    Cr&eacute;ation des comptes
                </div>

                <form onSubmit={submit}>

                    <div className='mx-2 py-4 text-gray-500'>
                        <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                            <Label htmlFor="roles">
                                Type de compte:
                            </Label>
                            <Select
                                defaultValue="Compte utilisateur"
                                name="roles"
                                // Use the `onValueChange` prop to update Inertia's form data
                                onValueChange={(value) => setData('roles', value)}
                                // Set the currently selected value based on the form data
                                value={data.roles}
                            >
                                <SelectTrigger id="roles">
                                    <SelectValue placeholder="Type de compte" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="User">Compte utilisateur</SelectItem>
                                    <SelectItem value="Admin">Compte administrateur</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className='mx-2 py-4 text-gray-500'>
                        <InputLabel htmlFor="name" value="Nom de l'utilisateur" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='basis-1/2'>
                            <div className='mx-2 py-4 text-gray-500'>
                                <InputLabel htmlFor="matricule" value="Matricule" />

                                <TextInput
                                    id="matricule"
                                    name="matricule"
                                    value={data.matricule}
                                    className="mt-1 block w-full"
                                    autoComplete="matricule"
                                    isFocused={true}
                                    onChange={(e) => setData('matricule', e.target.value)}
                                    required
                                />

                                <InputError message={errors.matricule} className="mt-2" />
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <div className='mx-2 py-4 text-gray-500'>
                                <InputLabel htmlFor="phone" value="Telephone" />

                                <TextInput
                                    id="phone"
                                    name="phone"
                                    value={data.phone}
                                    className="mt-1 block w-full"
                                    autoComplete="phone"
                                    isFocused={true}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    required
                                />

                                <InputError message={errors.phone} className="mt-2" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='basis-1/2'>
                            <div className='mx-2 py-4 text-gray-500'>
                                <InputLabel htmlFor="email" value="Identifiant" />

                                <TextInput
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <div className='mx-2 py-4 text-gray-500'>
                                <InputLabel htmlFor="username" value="Email" />

                                <TextInput
                                    id="username"
                                    name="username"
                                    value={data.username}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    type='email'
                                    onChange={(e) => setData('username', e.target.value)}
                                    required
                                />

                                <InputError message={errors.username} className="mt-2" />
                            </div>
                        </div>
                    </div>

                    <div className='mx-2 py-4 text-gray-500'>
                        <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
                            <Label htmlFor="roles">
                                Groupe d'acces:
                            </Label>
                            <Select
                                defaultValue="S-DAG"
                                name="departement"
                                // Use the `onValueChange` prop to update Inertia's form data
                                onValueChange={(value) => setData('departement', value)}
                                // Set the currently selected value based on the form data
                                value={data.departement}
                            >
                                <SelectTrigger id="departement">
                                    <SelectValue placeholder="Groupe d'acces" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="S-DAG">S-DAG</SelectItem>
                                    <SelectItem value="S-DCF">S-DCF</SelectItem>
                                    <SelectItem value="SO">SO</SelectItem>
                                    <SelectItem value="SGCCC">SGCCC</SelectItem>
                                    <SelectItem value="SGDB">SGDB</SelectItem>
                                    <SelectItem value="DPB">DPB</SelectItem>
                                    <SelectItem value="DPC">DPC</SelectItem>
                                    <SelectItem value="DCOB">DCOB</SelectItem>
                                    <SelectItem value="DI">DI</SelectItem>
                                    <SelectItem value="DREF">DREF</SelectItem>
                                    <SelectItem value="DDPP">DDPP</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='basis-1/2'>
                            <div className="mx-2 py-4 text-gray-500">
                                <InputLabel htmlFor="password" value="Mot de passe" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <div className="mx-2 py-4 text-gray-500">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirmez mot de passe"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row py-2 my-4 mx-8 gap-4">
                        <div className=" basis-1/2">
                            <DangerButton>
                                <Trash2Icon size={20}/> &nbsp;&nbsp;Annuler
                            </DangerButton>
                        </div>
                        <div className="basis-1/2 flex justify-end">
                            <SubmitButton>
                                Enregister &nbsp;&nbsp;<CheckCircleIcon size={20}/>
                            </SubmitButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
