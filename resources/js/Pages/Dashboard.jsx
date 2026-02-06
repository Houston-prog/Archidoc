import MenuInf from '@/Components/MenuInf';
import MessageDgb from '@/Components/MessageDgb';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>

            <div className="py-3">
                <div className="mx-auto max-w-11xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                        <div className="p-6 dark:text-green-600 text-center text-green-700 text-xl italic">
                            Mieux se souvenir d'hier aujourd'hui, afin de mieux décider pour demain
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <div className="mx-auto max-w-11xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-100">
                        <div className="p-6 text-gray-900 dark:text-gray-600">
                            <MessageDgb />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
