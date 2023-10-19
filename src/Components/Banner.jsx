
const Banner = () => {
    return (
        <div className="hero min-h-screen relative z-1 bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/927krv9/pink-range-rover.jpg)' }}>
            <div className="z-2 absolute bg-[rgba(0,0,0,0.58)] w-full h-full"></div>
            <div className="hero-content flex-col text-center text-neutral-content absolute top-20 space-y-12">
                <h2 className="text-5xl font-bold uppercase">Make your <span className="text-[#f080b8]">dream drive</span> come true</h2>
                <button className="bg-[#e73f93] px-8 py-4 text-2xl font-semibold rounded-lg">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;