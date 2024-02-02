import img1 from "../../assets/images/images/phone .png";
import img2 from "../../assets/images/images/girl.png";
import img3 from "../../assets/images/images/pexels-artem-beliaikin-1832323-removebg-preview.png";

const Header = () => {
    return (
        <div className=" w-3/4 mx-auto py-20">
            <div className="mb-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="px-10">
                        <h1 className="text-5xl font-bold">You can get easily from here and this gives you better services</h1>
                        <p className="py-6 text-lg">You can find your device Android version number, security update level, and Google Play system level in your Settings app. You'll get notifications when updates are available for you. You can also check for updates.</p>
                        <button className="btn btn-primary text-lg bg-orange-500 border-none text-white">Visit Here</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="px-10">
                        <h1 className="text-5xl font-bold">The girl who can contribute a massive if you want to visit, go our page!!!</h1>
                        <p className="py-6 text-lg">This can be done by Girl Guides themselves or with their Patrol or Unit and the Girl Recognition System provides opportunities to complete challenges and activities while also earning badges and Awards to recognise those achievements.</p>
                        <button className="btn btn-primary text-lg bg-orange-500 border-none text-white">Visit Here</button>
                    </div>
                    <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
            </div>
            <hr />
            <div className="my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img3} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="px-10">
                        <h1 className="text-5xl font-bold">The girl who can contribute a massive if you want to visit, go our page!!!</h1>
                        <p className="py-6 text-lg">This can be done by Girl Guides themselves or with their Patrol or Unit and the Girl Recognition System provides opportunities to complete challenges and activities while also earning badges and Awards to recognise those achievements.</p>
                        <button className="btn btn-primary text-lg bg-orange-500 border-none text-white">Visit Here</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;