const Slide3 = () => {
    return (
        <div>
            <div className="hero min-h-[calc(100vh-64px)]" style={{ backgroundImage: 'url(https://i.postimg.cc/sgqdWZ44/1015.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Discover Your Next <span className="text-[#FA7070]">Adventure</span></h1>
                        <p className="mb-5 opacity-80">Embark on a journey of discovery with our curated selection of destinations. From bustling cities to serene natural wonders, find your perfect getaway.</p>
                        <button className="btn bg-[#A1C398] border-none text-white text-lg">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide3;