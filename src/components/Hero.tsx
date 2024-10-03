import ShimmerBtn from "./ui/ShimmerBtn";

const Hero = () => {
    return (
        <div className="">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                <div className="py-16 md:py-24">
                    <h1 className="text-left bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 mx-auto font-normal leading-none tracking-tight text-transparent text-balance text-5xl md:text-7xl lg:text-8xl mb-8">
                        Transforming the <span className="italic font-cursive">Future</span> of<br className="hidden md:block" /> Transportation.
                    </h1>
                    <p className="text-left mb-8 text-base sm:text-lg md:text-xl text-neutral-400 pb-12">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis iste <br className="hidden md:block" />totam commodi eveniet nesciunt explicabo provident.
                    </p>
                    <div className="flex:col md:flex items-center">
                        <ShimmerBtn />
                        <a href="#" className="ml-8 text-lg hover:text-neutral-400 transition">
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
