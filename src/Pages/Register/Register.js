import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../../useTitle/UseTitle';

const Register = () => {
    const { createUser, GoogleProvider } = useContext(AuthContext)
    useTitle('Register')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm, photoURL);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error, 'error');
            })
    }
    const handleGoogleProvider = () => {
        GoogleProvider()
            .then(result => {
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo URL" name='photourl' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input type="password" placeholder="Confirm password" name='confirm' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type='submit' value='Sign Up'></input>
                        </div>
                    </form>
                    <p className='text-center font-bold mb-4'>Already have 'an account <Link className='text-orange-600' to='/login'>Login</Link></p>
                    <p className='text-center font-bold mb-4'>Or</p>
                    <p className='text-center font-bold mb-4'>SignIn with Google <button onClick={handleGoogleProvider} className='btn btn-info w-20'><FcGoogle /></button></p>
                </div>
            </div>
        </div>
    );
};

export default Register;