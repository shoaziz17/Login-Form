import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormSide() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const loginInput = (e) => {
        setLogin(e.target.value);
    }

    const passwordInput = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (login && password) {
            setErr(false)
            toast.success('Successfully loged!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            setErr(true);
        }
    }

    return (
        <div className='w-1/2'>
            <ToastContainer />
            <div className='px-40 pt-20'>
                <div className='mb-5'>
                    <h1 className='uppercase mb-5 text-[12px] font-medium text-center'>Muhammad Al-Xorazmiy Nomidagi Toshkent Axborot Va Texnologiyalri Universiteti</h1>
                    <img className='mx-auto w-20 mb-10' src="https://lms.tuit.uz/assets/images/logo-md.png" alt="TUIT logo" />
                    <h1 className='text-center uppercase font-semibold'>Learning Management System</h1>
                </div>

                {err ? <div className='bg-red-200 border-2 border-red-600 mb-2'>
                    <h1 className='text-center text-red-500 text-sm'>Fill the inputs!</h1>
                </div> : null}

                <form className='flex flex-col'>
                    <label className='text-sm mb-2' htmlFor='login'>Login</label>
                    <input onChange={loginInput} value={login} className='mb-4 border text-sm border-slate-400 p-2 rounded-md' type="text" name="login" id="login" placeholder='Enter your login' />
                    <label className='text-sm mb-2' htmlFor='login'>Password</label>
                    <input onChange={passwordInput} value={password} className='mb-4 border text-sm border-slate-400 p-2 rounded-md' type="text" name="login" id="login" placeholder='Enter your password' />
                    <button onClick={onSubmit} className='bg-blue-900 text-white font-medium p-2 rounded-md'>Enter</button>
                </form>
            </div>
            <h1 className='text-center mt-16 font-light text-sm'>
                Copyright © 2021 of Tashkent University of Information Technologies
            </h1>
        </div>
    )
}

export default FormSide