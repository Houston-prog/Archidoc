export default function LoginButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-teal-400 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-teal-200 focus:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-teal-700 dark:bg-teal-400 dark:text-gray-800 dark:hover:bg-teal-200 dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
