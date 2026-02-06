import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import LoginButton from '@/Components/LoginButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className='m-auto rounded-md grid lg:grid-cols-2 shadow-sm'>
                <div className="rounded-lg bg-gradient-to-r mt-24 relative overflow-hidden">
                    <img alt="logo" src="images/Archi.png" className="absolute p-2 m-auto mb-20 bg-cover bg-center mt-10 top-11" width="700" height="800" />
                </div>

                <div className='right flex flex-col justify-evenly bg-slate-100'>
                    <div className='flex justify-center'>
                        <div className='bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md'>

                            <img src="images/logo_dgb.png" alt="logo" className="w-32 h-32 mx-auto mb-4" />

                            <h2 className="text-black text-3xl mb-8 font-semibold text-center">
                                Espace membre | Login
                            </h2>

                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="username" value="Identifiant" />

                                    <TextInput
                                        id="username"
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4 flex items-center justify-end">

                                    <LoginButton className="w-full items-center justify-center text-center" disabled={processing}>
                                        Connexion
                                    </LoginButton>
                                </div>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-white items-center px-2 text-gray-500">
                                            Assistance
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                                <div>

                                    <span className="text-center">
                                        <a
                                            href={route('password.request')}
                                            className="rounded-md text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-900 dark:focus:ring-offset-gray-800"
                                        >
                                            Mot de pass oubli&eacute;? &nbsp;
                                        </a>
                                    </span>

                                    <span className="text-center">
                                        <a
                                            href={route('password.request')}
                                            className="rounded-md text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-900 dark:focus:ring-offset-gray-800"
                                        >
                                            <span className="text-red-500">|</span> Support & Assistance
                                        </a>
                                    </span>
                                </div>
                                <div className="cursor-pointer text-red-500">

                                </div>
                            </div>

                            <div className="flex gap-4 justify-center mt-2 px-2 text-teal-400">
                                <a href="https://www.cinvcorsa.com">
                                    CINVCORSA.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </GuestLayout>
    );
}
