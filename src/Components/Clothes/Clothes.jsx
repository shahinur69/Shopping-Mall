import cloth1 from "../../clothes/cloth-1.png";
import cloth2 from "../../clothes/cloth-2.png";
import cloth3 from "../../clothes/cloth-3.png";
import cloth4 from "../../clothes/cloth-4.png";
import cloth5 from "../../clothes/cloth-5.png";
import cloth6 from "../../clothes/cloth-6.png";
import cloth7 from "../../clothes/cloth-7.png";
import cloth8 from "../../clothes/cloth-8.png";
import cloth9 from "../../clothes/cloth-9.png";

const Clothes = () => {
    return (
        <div className="w-3/4 mx-auto my-12">
            <h2 className="text-4xl pb-10 font-bold text-center">You can get to buy easily from here !!!</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Shirts</h2>
                        <p className="text-2xl">Price:  $1500</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* first card  */}
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Tops</h2>
                        <p className="text-2xl">Price:  $1000</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* second card  */}
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">T-Shirts</h2>
                        <p className="text-2xl">Price:  $2500</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* third card  */}
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl"> Formal Shirts</h2>
                        <p className="text-2xl">Price:  $2700</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* fourth card  */}
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Shirts</h2>
                        <p className="text-2xl">Price:  $4500</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* fifth card  */}
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl"> Jean Shirts</h2>
                        <p className="text-2xl">Price:  $1500</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* sixth card  */}
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth7} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Winter Clothes</h2>
                        <p className="text-2xl">Price:  $4000</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* seventh card  */}
                <div className="card card-compact w-96 bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth8} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Shirts</h2>
                        <p className="text-2xl">Price:  $1400</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* eight card  */}
                <div className="card card-compact w-96  bg-slate-800 shadow-xl">
                    <figure><img className="h-64 w-96" src={cloth9} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Jackets</h2>
                        <p className="text-2xl">Price:  $1500</p>
                        <p className="text-xl">All things are very fancy and comfortable</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Later</button>
                            <button className="btn btn-primary bg-green-800 border-none text-white text-base">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* ninth card  */}
            </div>
        </div>
    );
};

export default Clothes;