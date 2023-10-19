import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { getAuth, updateProfile } from "firebase/auth";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();
    const navigate = useNavigate();


    const { registerUser, signInWithGoogle } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // console.log(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Please enter at least 6 character or longer');
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character');
            return
        }
        else if (!/[!@#$%^&*()_+]/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            return
        }


        registerUser(email, password)
            .then(result => {
                console.log(result.user);
                const auth = getAuth();
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(result => {
                        console.log(result.user, 'updated');
                    })
                    .catch(error => {
                        console.error(error);
                        console.log('not updated');
                        navigate(location?.state ? location.state : '/')
                    })

                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have registered successfully',
                })
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.......',
                    text: error.message
                })
            })




    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have registered successfully',
                })
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.......',
                    text: error.message
                })
            })

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="flex flex-col items-center">
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <h2 className='text-3xl my-5 text-center'>Register your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo URL" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-secondary text-white">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-600 text-lg">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 text-lg">{success}</p>
                }
                <p className="text-center mb-4 font-medium">Already have an account? Please <Link to='/login'><button className="btn-link text-secondary">Login</button></Link></p>
                <div className="border-2 border-blue-900 rounded-lg text-2xl px-8 py-4 flex items-center font-medium mb-12">
                    <h3>Login With</h3>
                    <button onClick={handleGoogle} className="btn-link ml-2 text-secondary">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;