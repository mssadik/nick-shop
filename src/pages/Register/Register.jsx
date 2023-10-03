
import { useForm, Controller } from 'react-hook-form';
import bg from '../../assets/nike-bg.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/UserSlice';

const Register = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const {email, password, first_name} = data;
        dispatch(createUser({email, password, first_name}))
        console.log(data);
    };

    return (
        <div style={{ backgroundImage: `url(${bg})`, filter: 'brightness(75%)' }} className="min-h-screen flex items-center bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800 justify-center bg-center object-fill py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-opacity-70 bg-slate-800  rounded-lg p-6">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">Register Now</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm space-y-3">
                        <div className='w-full flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="first_name" className="sr-only">First Name</label>
                                <Controller
                                    name="first_name"
                                    control={control}
                                    defaultValue="" // Add a defaultValue here
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="first-name"
                                            type="text"
                                            required
                                            className="appearance-none  border-none rounded-none relative block w-full px-3 py-2  border border-gray-300 placeholder-gray-500 text-gray-300 bg-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="First Name"
                                        />
                                    )}
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="sr-only">Last Name</label>
                                <Controller
                                    name="last-name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="last-name"
                                            type="text"
                                            required
                                            className="appearance-none border-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-300 bg-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Last Name"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="email"
                                        type="text"
                                        required
                                        className="appearance-none border-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-300 bg-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email"
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">password</label>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="password"
                                        type="password"
                                        required
                                        className="appearance-none border-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-300 bg-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <label htmlFor="retype-password" className="sr-only">retype-password</label>
                            <Controller
                                name="retype-password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="retype-password"
                                        type="password"
                                        required
                                        className="appearance-none border-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-300 bg-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Retype Password"
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:via-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                        >
                            Register
                        </button>

                    </div>
                    <p className='text-slate-300 font-thin text-xs mt-3 '>Already have an account <Link className='text-blue-600 underline cursor-pointer font-bold' to="/login">Login Now</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
