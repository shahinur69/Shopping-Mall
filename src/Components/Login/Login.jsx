
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    const [success, setSuccess] = useState(' ');
    const [register, registerError] = useState(' ');
    const handleLogin = e => {
        e.preventdefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        registerError('');
        setSuccess('');
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed up 
                console.log(result.user)
                setSuccess('user logged in successfully')
                // ...
            })
            .catch((error) => {
                console.error(error);
                registerError(error.message)
                // ..
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-8">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;