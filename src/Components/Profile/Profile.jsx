import img1 from "../../clothes/HDAI1008.png";
const Profile = () => {
    return (
        <div className="w-3/4 mx-auto">
            <div className="hero  min-h-[500px] py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Hi , My Name Is MD Shahin Rashid . It is my favourite website. !!!</h1>
                        <h3 className="text-3xl font-semibold mt-5">I am a web Developer And <span>Designer</span></h3>
                        <p className="py-6">Introducing Required Actions Dashboard for Developers Beginning this month, we’re rolling out Required actions dashboard to a limited number of app administrators who manage apps on developers.facebook.com.</p>
                        <a href="https://www.facebook.com/" className="btn btn-primary text-lg text-white bg-green-600 border-none">Facebook Link</a>
                    </div>
                </div>
                {/* profile */}
            </div>
            <div className="hero min-h-[700px] bg-gray-700 my-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
// http://localhost:5173/