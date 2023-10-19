import { Link, useLocation, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import NavBar from "../Components/NavBar";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();
    const navigate = useNavigate();


    const { logIn, signInWithGoogle } = useContext(AuthContext);

    // const location = useLocation();
    // const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // console.log(e.currentTarget, form);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);


        setLoginError('');
        setSuccess('');

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have logged in successfully',
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                const msg = error.message;
                console.log(msg);
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
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <h2 className='text-3xl my-5 text-center'>Login to your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-secondary text-white">Login</button>
                    </div>
                    {
                        loginError && <p className="text-red-700 text-lg font-medium">{loginError}</p>
                    }
                    {
                        success && <p className="text-green-700 text-lg font-medium">{success}</p>
                    }
                </form>

                <p className="text-center mb-4 font-medium">New here? Please <Link to='/register'><button className="btn-link text-secondary">Register</button></Link></p>
                <div className="border-2 border-blue-900 rounded-lg text-2xl px-8 py-4 flex items-center font-medium mb-12">
                    <h3>Login With</h3>
                    <button onClick={handleGoogle} className="btn-link ml-2 text-secondary">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;